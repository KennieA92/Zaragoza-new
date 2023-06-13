<template>
    <section id="admin-trip" class="w-full h-screen flex justify-center items-center">
        <form @submit.prevent="addTrip()" class="w-10/12 h-4/12 flex flex-row flex-wrap justify-center gap-4">
            <div class="basis-2/5 flex items-center gap-2">
                <label class="w-2/12">Title</label>
                <input type="text" v-model="trip.title" class="w-full" required />
            </div>

            <div class="basis-2/5 flex items-center gap-2">
                <label class="w-2/12">Description</label>
                <input type="text" class="w-full" v-model="trip.titleDescription" required />
            </div>
            <div class="basis-2/5 flex items-center gap-2">
                <label class="w-2/12">TripImage:</label>
                <input @change="uploadFile" type="file" multiple />
            </div>

            <div class="basis-2/5 flex items-center gap-2">
                <label class="w-2/12">Location:</label>
                <input class="w-full" type="text" v-model="trip.location" />
            </div>
            <div class="basis-2/5 flex items-center gap-2">
                <label class="w-2/12">Start date:</label>
                <input class="w-full" type="date" v-model="trip.startDate" />
            </div>
            <div class="basis-2/5 flex items-center gap-2">
                <label class="w-2/12">End date:</label>
                <input class="w-full" type="date" v-model="trip.endDate" />
            </div>
            <div class="basis-full flex items-center gap-2">
                <label class="w-2/12">Location Description:</label>
                <input type="text" class="w-full" v-model="trip.description" required />
            </div>

            <button type="submit" class="basis-full bg-accent text-white p-4 rounded-3xl">
                Create Trip
            </button>
        </form>
    </section>
</template>

<script setup lang="ts">
import useTrips from '../../modules/useTrips';

const { trip, uploadFile, getTripsData, addTrip } = useTrips();

getTripsData();




</script>

<style scoped></style>