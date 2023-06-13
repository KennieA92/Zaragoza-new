<template>
    <div class="w-full min-h-screen flex flex-wrap justify-center ">
        <LandingComponent />
        <ScrollingTextComponent />
        <EntryComponent />
        <InfoComponent />
        <NewsletterComponent />
        <EventsInfoComponent />
    </div>
</template>

<script setup lang="ts">
import LandingComponent from '../components/Home/LandingComponent.vue';
import ScrollingTextComponent from '../components/Home/ScrollingTextComponent.vue';
import EntryComponent from '../components/Home/EntryComponent.vue';
import InfoComponent from '../components/Home/InfoComponent.vue';
import EventsInfoComponent from '../components/Home/EventsInfoComponent.vue';
import NewsletterComponent from '../components/Home/NewsletterComponent.vue';

</script>

<style lang="scss" scoped></style>