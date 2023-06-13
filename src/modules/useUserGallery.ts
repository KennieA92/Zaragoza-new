import { db, auth, storage } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc, query, DocumentData, where } from "firebase/firestore";
import { ref as storeRef, uploadBytesResumable, getDownloadURL, getStorage } from 'firebase/storage';
import { ref } from 'vue';

const useUserGallery = () => {
    type UserImage = { id: string, imageUrl: string, author: string }
    const userImage = ref({} as UserImage);
    const userImages = ref([] as UserImage[]);
    const userTripImages = ref([] as UserImage[]);
    const tripImagesDataRef = collection(db, "userImages");
    const snackbar = ref({ show: false, text: '' });
    /** 
     * Gets trip images data from firebase
    */
    const getUserImagesData = () => {
        const q = query(tripImagesDataRef, where("author", "==", auth.currentUser?.uid));
        onSnapshot(q, (snapshot) => {
            userImages.value = snapshot.docs.map((doc: DocumentData) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }

    /**
     * Add trip image to firebase
     * @param imageUrl 
     * @returns 
     */
    const addUserImage = async (imageUrl: string) => {
        if (!auth.currentUser) return alert('Please login to create a trip');
        console.log(userImage.value)
        await addDoc(tripImagesDataRef, {
            imageUrl: imageUrl,
            author: auth.currentUser.uid
        }).then(() => {
            console.log("Document successfully written!");
        })
    }

    /**
     * delete trip image from firebase
     * @param id 
     */
    const deleteUserImage = async (id: string) => {
        await deleteDoc(doc(tripImagesDataRef, id));
    }

    /** 
     * Edits trip image data
    */
    const editUserImage = async (trip: UserImage) => {
        await updateDoc(doc(tripImagesDataRef, userImage.value.id), {
            titleDescription: userImage.value.imageUrl,
            tripImage: userImage.value.author

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

                //Check if file is too large or not supported
                try {
                    const resizedBlob = await resizeImage(file, maxWidth, maxHeight);

                    const storageRef = storeRef(storage, 'userGalleryImages/' + file.name);
                    const uploadTask = uploadBytesResumable(storageRef, resizedBlob);

                    try {
                        if (resizedBlob.size > 5000000) {
                            snackbar.value.show = true, snackbar.value.text = 'One or more files exceed maximum size of 5mb'
                            console.log(file.size)
                            throw new Error('File size too large')
                        }
                        /*  if (file.type != 'image/png' && file.type != 'image/jpeg' && file.type != 'video/mp4' && file.type != 'video/quicktime' && file.type != 'video/x-msvideo' && file.type != 'video/x-ms-wmv') {
                             snackbar.value.show = true, snackbar.value.text = 'File type not supported'
                             throw new Error('File type not supported')
                         } */
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
                                addUserImage(downloadURL);
                            })
                        }
                    )

                } catch (error) {
                    console.error('Error resizing the image:', error);
                }


            });
        }
    }

    function getTripGalleryImageCount() {
        const q = query(tripImagesDataRef, where("author", "==", auth.currentUser?.uid));
        onSnapshot(q, (snapshot) => {
            userTripImages.value = snapshot.docs.map((doc: DocumentData) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }

    function downloadImageFromFirebase(url: string) {
        getDownloadURL(storeRef(getStorage(), url))
            .then((url) => {
                return fetch(url);
            })
            .then((response) => {
                return response.blob();
            })
            .then((blob) => {
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.setAttribute('download', 'image.jpg');
                downloadLink.style.display = 'none';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            })
            .catch((error) => {
                console.log('Error retrieving image URL:', error);
            });
    }

    function resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob> {
        return new Promise((resolve, reject) => {
            // Create a FileReader to read the file
            const reader = new FileReader();

            // Set up the onload event handler
            reader.onload = function (event) {
                // Create an image element
                const image = new Image();

                // Set up the onload event handler for the image
                image.onload = function () {
                    // Calculate the new dimensions
                    let width = image.width;
                    let height = image.height;

                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }

                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }

                    // Create a canvas element
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Set the canvas dimensions
                    canvas.width = width;
                    canvas.height = height;

                    if (ctx)
                        // Draw the image on the canvas
                        ctx.drawImage(image, 0, 0, width, height);

                    // Get the resized data URL from the canvas
                    const resizedDataUrl = canvas.toDataURL(file.type);

                    // Convert the resized data URL to a Blob
                    const resizedBlob = dataUrlToBlob(resizedDataUrl, file.type);

                    // Resolve the Promise with the resized Blob
                    resolve(resizedBlob);
                };

                if (event.target) {
                    // Set the source of the image to the file's data URL
                    image.src = event.target.result as string;
                }
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        });
    }

    // Function to convert Data URL to Blob
    function dataUrlToBlob(dataUrl: string, type: string): Blob {
        // extract the base64-encoded binary data from the Data URL
        const base64Data = dataUrl.split(',')[1];

        // convert the base64-encoded binary data to a Uint8Array
        const uint8Array = new Uint8Array(atob(base64Data).split('').map(char => char.charCodeAt(0)));

        // create a Blob object from the Uint8Array and the specified type
        return new Blob([uint8Array], { type });
    }

    return {
        snackbar,
        userImage,
        userImages,
        getUserImagesData,
        addUserImage,
        deleteUserImage,
        editUserImage,
        uploadFile,
        downloadImageFromFirebase,
        getTripGalleryImageCount,
        userTripImages

    }
}
export default useUserGallery