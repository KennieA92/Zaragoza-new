<template>
    <section id="trip-section" class="w-full md:h-[75vh] pb-8 ">
        <div class="h-full flex flex-col md:flex-row md:flex-nowrap overflow-hidden gap-4 lg:gap-10 xl:gap-12">
            <TripNavigationComponent :changeIndex="selectedIndex" :trips="trips" @isNavOpen="isNavOpen = !isNavOpen"
                @indexChanged="updateToIndex" />
            <TripContentComponent ref="tripcontent" :trips="trips" @change-index="updateIndex" :isSideNavOpen="isNavOpen"
                :indexChanged="selectedIndex" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useTrips from '../modules/useTrips';
import TripNavigationComponent from '../components/Trips/TripNavigationComponent.vue';
import TripContentComponent from '../components/Trips/TripContentComponent.vue';

const { trips, getTripsData } = useTrips();
const isNavOpen = ref(false);
const selectedIndex = ref(0);
const tripcontent = ref();

/**
 * Updates the index of the selected trip
 * @param index 
 */
const updateIndex = (index: number) => {
    selectedIndex.value = index;
}

/**
 * Updates the index of the selected trip
 * Triggers the exposed method of tripcontent
 * @param index 
 */
const updateToIndex = (index: number) => {
    selectedIndex.value = index;
    tripcontent.value.changeToIndex(index);
}

onMounted(() => {
    getTripsData();
});
</script>

<style scoped></style>