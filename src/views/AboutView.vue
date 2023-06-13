<template>
    <div class="w-full flex justify-center items-center h-[80vh] font-nunito">
        <div class="w-10/12 h-[70vh] flex bg-primary rounded-bl-[2.5rem] rounded-tr-[2.5rem]">
            <div class="bg-secondary w-2/12 h-[70vh] rounded-r-[2.5rem] rounded-bl-[2.5rem] flex justify-end items-center">
                <div class="h-[80%] w-full flex flex-wrap justify-center content-between">
                    <div class="w-10/12 h-24 flex justify-between items-center"> <img
                            class="w-16 h-16 rounded-full bg-gray-400 border-white border-4" :src="userImageUrl" alt="">
                        <p class="text-xl font-bold text-white">AHMED</p> <img class="w-6 h-6"
                            src="../assets/about/notification.svg">
                    </div>
                    <div class="w-8/12 flex flex-wrap justify-center text-white text-xl">
                        <p class="w-full h-10 font-bold">MY INFO</p>
                        <p class="w-full h-10">MY PHOTOS</p>
                        <p class="w-full h-10">LIKED</p>
                        <p class="w-full h-10">BIN</p>
                    </div>
                </div>
            </div>
            <div class="bg-primary w-10/12 h-[70vh] rounded-tr-[2.5rem] flex justify-center items-center">
                <div class="h-[80%] w-11/12 flex flex-wrap content-between pt-8">
                    <p class="text-xl font-bold w-full">GENERAL</p>
                    <div class="w-full h-2/3 py-2 flex flex-wrap gap-6">
                        <div class="w-[11%] h-full justify-center items-center relative">
                            <div class="h-[50%] w-full absolute flex justify-center"><img
                                    class="bg-white w-full h-full object-cover rounded-3xl border-white border-4"
                                    :src="userImageUrl" alt="">
                                <div class="absolute -bottom-5 w-10 h-10 bg-quaternary rounded-full p-2"><label
                                        for="fileUploader"
                                        class="flex justify-center items-center text-white gap-2 rounded-full relative">
                                        <input id="fileUploader" class="opacity-0 absolute w-full h-full rounded-full"
                                            @change="uploadFile" type="file" multiple
                                            accept=".heic,  image/heic, image/*, video/*" />
                                        <img class=" w-full h-full" src="../assets/about/camera.svg" alt="">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="w-6/12">
                            <div class="w-full flex flex-wrap gap-4 font-semibold">
                                <div class="w-full flex gap-4">
                                    <div class="w-1/2">
                                        <label for="name" class="text-accent">FIRST NAME</label>
                                        <input name="name"
                                            class="border-[#DCDBDD]  bg-white rounded-xl focus:ring-0 ring-secondary w-full text-xs py-3"
                                            type="text" placeholder="NAME" v-model="name" />
                                    </div>
                                    <div class="w-1/2">
                                        <label for="sur-name" class="text-accent">LAST NAME</label>
                                        <input name="sur-name"
                                            class="border-[#DCDBDD] text-xs py-3 bg-white rounded-xl focus:ring-0 ring-secondary w-full"
                                            type="text" placeholder="LAST NAME" v-model="surname" />
                                    </div>
                                </div>
                                <div class="w-full flex gap-4">
                                    <div class="w-1/2">
                                        <label for="email" class="text-accent">EMAIL</label>
                                        <input name="email"
                                            class="border-[#DCDBDD] text-xs py-3 bg-white rounded-xl focus:ring-0 ring-secondary w-full"
                                            type="text" placeholder="LEONARDA.FERARRI@GMAIL.COM" v-model="email" />
                                    </div>
                                    <div class="w-1/2">
                                        <label for="phone" class="text-accent">PHONE NUMBER</label>
                                        <input name="phone"
                                            class="border-[#DCDBDD] text-xs py-3 bg-white rounded-xl focus:ring-0 ring-secondary w-full"
                                            type="number" placeholder="+34 345 678 923" v-model="phone" />
                                    </div>
                                </div>
                                <div class="w-full flex gap-4">
                                    <div class="w-1/2">
                                        <label for="username" class="text-accent">USERNAME</label>
                                        <input name="username"
                                            class="border-[#DCDBDD] text-xs py-3 bg-white rounded-xl focus:ring-0 ring-secondary w-full"
                                            type="text" placeholder="LEA23" v-model="username" />
                                    </div>
                                </div>
                                <div class="w-full flex gap-4">
                                    <div class="w-1/2 relative">
                                        <label for="password" class="text-accent">PASSWORD</label>
                                        <input name="password"
                                            class="border-[#DCDBDD] bg-white rounded-xl focus:ring-0 ring-secondary w-full"
                                            type="text" placeholder="************" v-model="password" />
                                        <img class="absolute right-4 bottom-4" src="../assets/about/eye.svg" alt="">
                                    </div>
                                    <div class="w-1/2 relative">
                                        <label for="repeatpassword" class="text-accent">CONFIRM PASSWORD</label>
                                        <input name="repeatpassword"
                                            class="border-[#DCDBDD] bg-white rounded-xl focus:ring-0 ring-secondary w-full"
                                            type="text" placeholder="************" v-model="repeatpassword" />
                                        <img class="absolute right-4 bottom-4" src="../assets/about/eye.svg" alt="">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="w-full h-30 flex flex-wrap place-items-center">
                        <div class="shadow-lg rounded-3xl h-20 px-4 bg-accent w-4/12 relative overflow-hidden">
                            <a href="#" class="w-full h-full flex flex-wrap content-center">
                                <div class="flex items-center justify-between ">
                                    <p class="text-gray-300 text-sm">
                                        {{ userTripImages.length }}/10 YOUR POINTS COLLECTED
                                    </p>
                                </div>
                                <div class="w-full h-4 bg-blue-200 rounded-full">
                                    <div class="h-full text-center text-xs text-white bg-secondary rounded-full"
                                        :class="{ 'w-[0]': userTripImages.length === 0, 'w-[10%]': userTripImages.length === 1, 'w-[20%]': userTripImages.length === 2, 'w-[30%]': userTripImages.length === 3, 'w-[40%]': userTripImages.length === 4, 'w-[50%]': userTripImages.length === 5, 'w-[60%]': userTripImages.length === 6, 'w-[70%]': userTripImages.length === 7, 'w-[80%]': userTripImages.length === 8, 'w-[90%]': userTripImages.length === 9, 'w-[100%]': userTripImages.length === 10 }">
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import useUserGallery from '../modules/useUserGallery';
import useTripGallery from '../modules/useTripGallery';
import { ref, onMounted } from 'vue';
const { uploadFile, getUserImagesData, userImages, userImage } = useUserGallery();
const { getTripGalleryImageCount, userTripImages } = useTripGallery();
const userImageUrl = ref('');

onMounted(() => {
    getUserImagesData();
    setTimeout(() => {
        userImageUrl.value = userImages.value[0].imageUrl;
    }, 1000);
})
getTripGalleryImageCount();
console.log(userImages);
</script>

<style scoped></style>