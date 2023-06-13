<template>
    <section id="trip-content-section" class="h-full w-full flex justify-center relative">
        <div
            class=" w-full md:w-full bg-secondary py-6 md:py-0 h-full md:rounded-r-3xl md:rounded-bl-3xl flex  justify-center items-center relative overflow-x-hidden">
            <div class="w-9/12 md:w-11/12 h-full md:h-5/6 flex flex-col flex-wrap md:flex-row justify-center items-center "
                :class="[slideRight ? 'animate-slideRight' : 'animate-slideLeft']" v-for="(trip, index) in trips"
                v-show="index === tripIndex">
                <div class="w-full md:w-10/12 flex flex-wrap gap-4 md:gap-2">
                    <h1 class="w-full text-6xl text-primary text-start"> {{ trip.title }}

                    </h1>
                    <p class="md:w-6/12"> {{ trip.titleDescription }}</p>
                </div>
                <div class="w-full flex items-end">
                    <div class=" w-full flex flex-col md:flex-row flex-nowrap items-center content-around justify-around">
                        <img :src="trip.tripImage" alt="" class="w-full md:w-5/12 h-4/5 object-contain">
                        <div class="md:w-5/12 flex flex-wrap content-end">
                            <h2 class="text-2xl h-1/12 text-primary font-semibold"> {{ trip.location }}</h2>
                            <p class="w-full h-1/12 text-white opacity-50">From: {{ trip.startDate }} - {{ trip.endDate }}
                            </p>
                            <p class="w-full 
                             text-white py-2"> {{ trip.description }}</p>

                            <div class="w-14 h-14 bg-primary rounded-full flex justify-center items-center mt-4">
                                <router-link :to="{ name: 'TripGallery', params: { id: trip.id, tripIndex } }"
                                    class="p-4 h-full"><img src="../../assets/trips/galleryicon.svg" alt=""></router-link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <img class="hidden md:block w-8 h-full md:h-8 md:top-[49%] left-4 absolute cursor-pointer rotate-180"
                @click="changeIndex(-1)" src="../../assets/trips/blackarrow.svg" v-if="isMoreTripsBefore">
            <img class="hidden md:block w-8 h-full md:h-8 md:top-[49%] right-4 absolute cursor-pointer"
                @click="changeIndex(1)" src="../../assets/trips/blackarrow.svg" v-if="isMoreTripsAfter">
        </div>
        <img class="w-4 md:hidden h-full  top-[0%] left-2 fixed cursor-pointer rotate-180" @click="changeIndex(-1)"
            src="../../assets/trips/blackarrow.svg" v-if="isMoreTripsBefore">
        <img class="w-4 md:hidden h-full top-[0%] right-2 fixed cursor-pointer" @click="changeIndex(1)"
            src="../../assets/trips/blackarrow.svg" v-if="isMoreTripsAfter">
    </section>
</template>

<script setup lang="ts">

import { toRef, onMounted, ref, computed } from 'vue';
const props = defineProps(["trips"]);
const emit = defineEmits(['changeIndex']);
const trips = toRef(props, "trips");
const trip = ref('');
const slideRight = ref(false);
const tripIndex = ref(0);

/**
 * Change the trip to the index
 * @param index 
 */
const changeIndex = (index: number) => {
    // If the index is more than 0, slide right
    if (index > 0) slideRight.value = true;
    // Else slide left
    else slideRight.value = false;
    tripIndex.value += index;
    emit('changeIndex', tripIndex.value);
    trip.value = trips.value[tripIndex.value];
}
/**
 * Change the trip to the index
 * @param index 
 */
const changeToIndex = (index: number) => {
    tripIndex.value = index;
    trip.value = trips.value[tripIndex.value];
}

/**
 * Expose the following to the parent component
 */
defineExpose({
    changeToIndex
});

const isMoreTripsBefore = computed(() => {
    return (tripIndex.value) > 0 ? true : false
})
const isMoreTripsAfter = computed(() => {
    return trips.value.length > (tripIndex.value + 1) ? true : false
})


onMounted(() => {
    setTimeout(() => {
        trip.value = trips.value[tripIndex.value];
    }, 1000);
})


</script>

<style scoped></style>