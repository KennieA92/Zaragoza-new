<template>
    <section id="#landing" class="pb-8 w-full flex justify-center">
        <div
            class="w-10/12 min-h-[60vh] md:min-h-[70vh] bg-primary flex justify-center items-center rounded-t-3xl rounded-l-3xl rounded-s-3xl relative">
            <div class="h-full w-11/12 flex justify-start items-center">
                <h1
                    class="w-full md:w-10/12 xl:w-8/12 break-words text-start text-4xl/snug md:text-5xl/snug lg:text-6xl/snug 2xl:text-7xl/snug font-nunito text-text-secondary">
                    WE'VE DEVELOPED THIS
                    <span class="font-thin">PHOTO GALLERY </span> TO <span class="font-extrabold">SHARE,
                        DISCOVER &amp; COLLECT </span>
                    YOUR FAVOURITE MOMENTS IN <span class="font-extrabold">ONE</span> PLACE.
                </h1>

            </div>
            <router-link :to="{ path: '/', hash: '#entry' }" aria-label="go-to-entry"><img
                    class="absolute right-10 md:right-20 w-4 md:w-10 bottom-2 md:bottom-4 animate-bounce"
                    src="../../assets/landing/arrow.svg" alt=""></router-link>
        </div>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>