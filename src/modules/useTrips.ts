import { db, auth, storage } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc, query, DocumentData } from "firebase/firestore";
import { ref as storeRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import useImageHandler from './useImageHandler';
import { ref } from 'vue';

const useTrips = () => {
    type Trip = { id: string, title: string; titleDescription: string, tripImage: string, location: string, startDate: Date, endDate: Date, description: string, images: [string] }
    const trip = ref({} as Trip);
    const trips = ref([] as Trip[]);
    const tripsDataRef = collection(db, "trips");
    const snackbar = ref({ show: false, text: '' });
    const { resizeImage } = useImageHandler();

    /**
     * Gets trips data from firebase
     */
    const getTripsData = () => {
        onSnapshot(tripsDataRef, (snapshot) => {
            trips.value = snapshot.docs.map((doc: DocumentData) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }

    /**
     * add trip to firebase
     * @returns trips data
     */
    const addTrip = async () => {
        if (!auth.currentUser) return alert('Please login to create a trip');
        console.log(trip)
        await addDoc(tripsDataRef, {
            title: trip.value.title,
            titleDescription: trip.value.titleDescription,
            tripImage: trip.value.tripImage,
            location: trip.value.location,
            startDate: trip.value.startDate,
            endDate: trip.value.endDate,
            description: trip.value.description
        }).then(() => {
            console.log("Document successfully written!");
            trip.value = {} as Trip;
        })
    }

    const deleteTrip = async (id: string) => {
        await deleteDoc(doc(tripsDataRef, id));
    }

    /**
     * Edits trip data
     * @param trip 
     */
    const editTrip = async (trip: any) => {
        await updateDoc(doc(tripsDataRef, trip.value.id), {
            title: trip.value.title,
            titleDescription: trip.value.titleDescription,
            tripImage: trip.value.tripImage,
            location: trip.value.location,
            startDate: trip.value.startDate,
            endDate: trip.value.endDate,
            description: trip.value.description,
            images: trip.value.images,

        });
    };

    /**
     * Checks if user is authenticated and uploads files to firebase storage
     * @param e 
     * @returns 
     */
    const uploadFile = async (e: Event) => {
        if (auth.currentUser) {
            const target = e.target as HTMLInputElement;
            const files = target.files;
            //If files are not selected, return
            if (!files || !files[0])
                return;
            // Go through each file
            Array.from(files).forEach(async (file: File) => {
                const maxWidth = 800;
                const maxHeight = 600;

                try {
                    const resizedBlob = await resizeImage(file, maxWidth, maxHeight);

                    const storageRef = storeRef(storage, 'trip/' + file.name);
                    const uploadTask = uploadBytesResumable(storageRef, resizedBlob);

                    //Check if file is too large or not supported
                    try {
                        if (resizedBlob.size > 5000000) {
                            snackbar.value.show = true, snackbar.value.text = 'One or more files exceed maximum size of 5mb'
                            console.log(file.size)
                            throw new Error('File size too large')
                        }
                        if (file.type != 'image/png' && file.type != 'image/jpeg' && file.type != 'video/mp4' && file.type != 'video/quicktime' && file.type != 'video/x-msvideo' && file.type != 'video/x-ms-wmv') {
                            snackbar.value.show = true, snackbar.value.text = 'File type not supported'
                            throw new Error('File type not supported')
                        }
                    } catch (error) {
                        // Show error if file is too large or not supported, by setting snackbar text and show to true
                        setTimeout(() => {
                            snackbar.value.show = false
                        }, 10000);
                        return;
                    }
                    // Provide feedback on the upload progress
                    uploadTask.on('state_changed',
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            console.log(error);
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                trip.value.tripImage = downloadURL;
                            })
                        }
                    )

                    // ...
                } catch (error) {
                    console.error('Error resizing the image:', error);
                }


            });
        }
    }



    return {
        trip,
        trips,
        getTripsData,
        addTrip,
        deleteTrip,
        editTrip,
        uploadFile

    }
}
export default useTrips