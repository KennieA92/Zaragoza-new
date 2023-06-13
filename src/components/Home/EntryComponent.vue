<template>
    <section id="entry" class="py-8 w-full min-h-[85vh] flex justify-center">
        <div
            class="flex flex-col md:h-full lg:flex-row md:items-center md:content-center md:justify-center w-10/12 bg-gradient-to-b lg:bg-gradient-to-r from-secondary from-80% to-80% to-primary rounded-r-3xl rounded-b-3xl">
            <div class=" gap-14 md:gap-0 flex lg:flex-row flex-col items-center justify-between content-between ">
                <div class="gap-14 md:gap-0 w-10/12 h-full lg:w-7/12 flex flex-wrap justify-center content-between">
                    <div class="w-full md:h-2/3 md:w-10/12 py-4">
                        <div class="flex items-center md:py-4 md:pt-0 pt-12"><img class="w-14 h-[2px] object-cover"
                                src="../../assets/entry/line.svg" alt="">
                            <p class="px-2 text-2xl">JOIN US.</p>
                        </div>
                        <div class="w-full py-4">
                            <h1 class="text-4xl md:text-7xl text-primary font-nunito font-bold">
                                SIGN UP <span class="md:hidden">BELOW </span> TO AVOID MISSING OUT
                            </h1>
                        </div>
                        <div class="w-full md:w-3/5 ">
                            <p class="text-white opacity-50 text-xl">
                                Happy Erasmus Zaragoza is a student Association focused on helping new Erasmus students to
                                feel
                                comfortable in Zaragoza. We organize different activities, such as trips, parties, courses
                                and
                                travels.
                            </p>
                        </div>
                    </div>
                    <div
                        class="w-full md:w-10/12 py-8 bg-white bg-opacity-20 rounded-3xl flex flex-col md:flex-row items-center justify-around text-white">
                        <div class="w-10/12 md:w-3/12 py-4 md:py-0 relative flex flex-wrap ">
                            <div class="w-6 h-6 absolute top-3 md:-top-1 -left-2 rounded-lg bg-primary opacity-40 z-0">
                            </div>
                            <h2 class="text-center md:text-start text-2xl z-10 font-bold">TRIPS</h2>
                            <p class="pb-2 md:pb-0 md:border-b-0 "> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. </p>
                        </div>
                        <div class="w-10/12 md:w-3/12 py-4 md:py-0 relative flex flex-wrap">
                            <div class="w-6 h-6 absolute top-3 md:-top-1 -left-2 rounded-lg bg-primary opacity-40 z-0">
                            </div>
                            <h2 class="text-center md:text-start text-2xl z-10 font-bold">EVENTS</h2>
                            <p class="pb-2 md:pb-0 md:border-b-0 "> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. </p>
                        </div>
                        <div class="w-10/12 md:w-3/12 py-4 md:py-0 relative flex flex-wrap">
                            <div class="w-6 h-6 absolute top-3 md:-top-1 -left-2 rounded-lg bg-primary opacity-40  z-0">
                            </div>
                            <h2 class="text-center md:text-start text-2xl z-10 font-bold">OTHER EVENTS</h2>
                            <p class="pb-2 md:pb-0 md:border-b-0 "> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. </p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-5/12 h-full flex justify-center items-center  z-[1] relative">
                    <div
                        class="absolute hidden lg:block bg-black md:ml-14 bottom-40 rounded-3xl w-8/12 h-[76%] rotate-6 bg-gradient-to-b from-[#2C6E49] to-primary z-0">
                    </div>
                    <div
                        class="w-full h-full lg:w-8/12 bg-gradient-to-b from-primary to-secondary rounded-3xl p-4 lg:pt-8 md:p-0 z-10">
                        <RegisterComponent v-if="isRegister || isLoggedIn" @register="isRegister = false" />
                        <LoginComponent v-else @register="isRegister = true" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RegisterComponent from '../../components/Login/RegisterComponent.vue';
import LoginComponent from '../../components/Login/LoginComponent.vue';
import useUsers from '../../modules/useUsers';
const isLoading = ref(true);
const { isUserLoggedIn, isLoggedIn } = useUsers();

const isRegister = ref(false);
onMounted(() => {
    // Check if user is logged in
    isUserLoggedIn().then(() => {
        // originally it was working to manage our loading screen. Left it here in case we need it
        setTimeout(() => {
            isLoading.value = false;

        }, 3000);
    });



});
</script>


<style scoped></style>