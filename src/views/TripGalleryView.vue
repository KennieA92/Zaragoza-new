<template>
    <section
        class="w-full h-full md:h-[70vh] flex flex-wrap md:flex-nowrap md:overflow-y-hidden overflow-y-scroll pb-8  md:mb-0">
        <section id="trip-navigation"
            class="h-50 md:h-full w-full md:w-3/12 lg:w-2/12 md:bg-primary md:rounded-r-3xl flex flex-col justify-center items-center relative border-t-2 border-b-2 border-secondary md:border-0">
            <div
                class="w-full flex md:flex-col md:justify-center items-start  overflow-x-auto md:overflow-x-hidden md:green-scrollbar no-scrollbar text-white gap-2 md:gap-0">
                <div class="flex flex-wrap justify-center items-start h-full w-full rounded-3xl py-1 md:my-0"
                    @click="updateIndex(index)" v-for="(trip, index) in trips">
                    <img class="w-16 h-16 object-contain rounded-3xl md:hidden" :src="trip.tripImage" alt="">
                    <h1 class="w-20 leading-4 font-nunito md:w-3/4 text-center break-words md:text-left text-black md:text-white  text-sm md:text-lg lg:text-xl xl:text-2xl hover:font-bold hover:text-secondary cursor-pointer "
                        :class="[changeIndex === index ? 'text-secondary font-bold' : '']">{{ trip.title }}
                    </h1>
                </div>
            </div>
        </section>

        <section class="h-full w-full flex justify-center relative">
            <div class="w-full md:w-11/12 h-full rounded-r-3xl rounded-bl-3xl flex flex-col-reverse md:flex-row flex-wrap justify-around md:justify-center content-around
                 ">
                <div class="w-full md:w-10/12 h-1/12 flex justify-center fixed bottom-16 md:static z-10 md:z-0"><label
                        for="fileUploader"
                        class="w-32 h-12 bg-accent flex justify-center items-center text-white gap-2 rounded-full relative"><input
                            id="fileUploader" class="opacity-0 absolute w-full h-full rounded-full" @change="uploadFile"
                            type="file" multiple accept=".heic,  image/heic, image/*, video/*" />
                        <img src="../assets/trips/plus.svg">
                        Upload</label>
                </div>
                <div
                    class="w-full md:w-full h-5/6 overflow-y-scroll bg-white bg-opacity-50 rounded-3xl scrollbar flex flex-wrap content-between justify-between gap-2">
                    <img class="md:h-1/3 object-contain rounded-3xl" :src="tripImg.imageUrl" alt=""
                        v-for="tripImg in tripImages" @click="setImage(tripImg.imageUrl)">
                </div>

            </div>

            <div class="absolute flex justify-center w-full animate-slow-fade" v-if="snackbar.show">
                <div class="w-full h-full py-2 text-center bg-red-500 rounded-bl-3xl text-white text-xl">
                    <h1>{{ snackbar.text }}</h1>
                </div>
            </div>
            <teleport to="body">
                <div class="fixed top-0 left-0 backdrop-blur z-20" v-if="selectedImage" @click="selectedImage = ''">
                    <img class="w-screen h-screen object-contain" :src="selectedImage" alt="">
                    <div class="w-full h-1/12 flex justify-center fixed bottom-16">
                        <button
                            class="w-32 h-12 bg-secondary flex justify-center items-center text-white gap-2 rounded-full relative z-50"
                            @click="downloadImageFromFirebase(selectedImage)">
                            <img src="../assets/landing/whitearrow.svg" class="w-4 h-6 text-white ">
                            Download</button>
                    </div>
                </div>
            </teleport>
        </section>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useTrips from '../modules/useTrips';
import useTripGallery from '../modules/useTripGallery';
const { trip, trips, getTripsData } = useTrips();
const { tripImage, tripImages, getTripImagesData, uploadFile, snackbar, downloadImageFromFirebase } = useTripGallery();
const route = useRoute();
const index = parseInt((route.params.tripIndex as string) ?? "0");
const changeIndex = ref(index);
const selectedImage = ref("");

/**
 * Sets current image to be displayed in the teleport.
 * @param tripImg 
 */
const setImage = (tripImg: string) => {
    selectedImage.value = tripImg;
}

onMounted(() => {
    getTripsData();
    setTimeout(() => {
        trip.value = trips.value[index];
        tripImage.value.tripId = trip.value.id;
        getTripImagesData(trip.value.id);
    }, 1000);
})

/**
 * Updates the index of the trip to be displayed.
 * @param index 
 */
const updateIndex = (index: number) => {
    changeIndex.value = index;
    trip.value = trips.value[index];
    tripImage.value.tripId = trip.value.id;
    getTripImagesData(trip.value.id);
}

</script>

<style scoped></style>