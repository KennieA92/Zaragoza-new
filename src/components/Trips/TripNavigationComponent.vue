<template>
    <section id="trip-navigation"
        class="h-50 md:h-full w-full md:w-3/12 lg:w-2/12 md:bg-primary md:rounded-r-3xl flex flex-col justify-center items-center relative border-t-2 border-b-2 border-secondary md:border-0"
        :class="[isNavOpen ? 'md:animate-tripNavOpen' : 'md:animate-tripNavClose']">
        <div
            class="w-full flex md:flex-col md:justify-center items-start  overflow-x-auto md:overflow-x-hidden md:green-scrollbar no-scrollbar text-white gap-2 md:gap-0">
            <div class="flex flex-wrap justify-center items-start h-full w-full rounded-3xl py-1 md:my-0"
                @click="$emit('indexChanged', index)" v-for="(trip, index) in trips">
                <img class="w-16 h-16 object-contain rounded-3xl md:hidden" :src="trip.tripImage" alt="">
                <h1 class="w-20 h-full leading-4 font-nunito md:w-3/4 text-center break-words md:text-left text-black md:text-white  text-sm md:text-lg lg:text-xl xl:text-2xl hover:font-bold hover:text-secondary cursor-pointer "
                    :class="[changeIndex === index ? 'text-secondary font-bold' : '']">{{ trip.title }}
                </h1>
            </div>
        </div>
        <img class="w-14 h-4 top-[50%] right-0 absolute cursor-pointer origin-center hidden md:block"
            :class="{ ['rotate-180']: isNavOpen }" @click="isNavOpen = !isNavOpen" src="../../assets/trips/arrow.svg">
    </section>
</template>

<script setup lang="ts">


import { ref, toRef } from 'vue';
const isNavOpen = ref(false);
const props = defineProps(["trips", "changeIndex"]);
const trips = toRef(props, "trips");
const changeIndex = toRef(props, "changeIndex");

</script>

<style scoped></style>