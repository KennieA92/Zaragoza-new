<template>
    <section id="#info" class="h-full w-full flex justify-center pb-8 ">
        <div
            class="w-10/12 h-full bg-primary flex items-center justify-center rounded-t-3xl rounded-l-3xl rounded-s-3xl relative flex-wrap py-6">
            <div class="h-full w-11/12 lg:w-11/12 2xl:w-11/12 flex justify-center items-center flex-wrap">
                <h1
                    class="w-full text-start text-2xl/snug md:text-5xl/snug lg:text-6xl/snug 2xl:text-7xl/tight font-nunito text-text-secondary">
                    WE'VE GATHERED YOUR LIFETIME MOMENTS FOR YOU SO YOU DO NOT HAVE TO.
                </h1>
                <h2 class="w-full text-start text-lg/snug md:text-4xl/snug text-text-secondary">
                    ...just one click away
                </h2>
            </div>


            <div class="h-1/4 w-11/12 flex justify-end">
                <router-link :to="{ path: '/trips' }" class="flex items-center justify-between px-4 animate-bounceRight"
                    aria-label="go-to-trips"><img class="-rotate-90 w-4 h-4 md:h-10 md:w-10 mr-4 "
                        src="../../assets/landing/arrow.svg" alt=""></router-link>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>