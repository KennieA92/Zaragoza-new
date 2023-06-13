<template>
    <div
        class="min-h-[70vh] md:min-h-[50vh] mt-8 lg:mt-0 w-full lg:w-11/12 flex justify-center items-center flex-col bg-tertiary rounded-3xl font-nunito">
        <div class="w-10/12">
            <h1 class="text-2xl mb-3">SIGN IN
            </h1>
            <p class="text-xs text-black">CREATE AN ACCOUNT <span class="text-secondary cursor-pointer"
                    @click="$emit('register')">REGISTER
                    HERE!</span>
            </p>
        </div>
        <form @submit.prevent="login" class="flex w-full md:w-10/12 flex-col justify-center items-center py-2  gap-4">
            <input class="w-10/12 md:w-full text-black border-[#DCDBDD]  bg-white rounded-xl" type="text"
                placeholder="EMAIL" v-model="email" />
            <input class="w-10/12 md:w-full text-black border-[#DCDBDD]  bg-white rounded-xl" type="password"
                placeholder="PASSWORD" v-model="password" />
            <div class="flex w-10/12 md:w-full items-center">
                <router-link class="text-xs w-full" to="/">FORGOT PASSWORD?</router-link>
                <input type="submit" value="LOG IN"
                    class="w-10/12 py-1 md:w-full md:py-1 bg-accent rounded-xl font-semibold text-xl text-white border-black border-[1px] border-solid" />
            </div>
        </form>
        <div class="w-10/12 mt-6">
            <div class="w-full flex justify-center items-center overflow-hidden"><img class="w-full h-1"
                    src="../../assets/entry/longline.svg" alt="">
                <p class="px-4">Or</p><img class="w-full h-1" src="../../assets/entry/longline.svg" alt="">
            </div>
        </div>
        <div class="w-full md:w-10/12 flex justify-between">
            <button @click="signInWithGoogle"
                class="border-[1px] mx-2 py-2 w-full flex justify-center items-center rounded-xl">
                <img class="mx-2 h-4 w-4" src="../../assets/entry/google.svg" alt=""> Google
            </button>
            <button @click="signInWithFacebook"
                class="border-[1px] mx-2 py-2 w-full flex justify-center items-center rounded-xl">
                <img class="mx-2 h-4 w-4" src="../../assets/entry/facebook.svg" alt=""> Facebook
            </button>

        </div>
        <div class="w-10/12">
            <img class="w-full h-1 my-4" src="../../assets/entry/longline.svg" alt="">
            <p class="text-xs">Protected by reCAPTCHA and subject to the <a class="text-secondary" href="#">Cuboid Privacy
                    Policy and Terms of
                    Service.</a></p>
        </div>
    </div>
</template>

<script setup lang="ts">

import useUsers from "../../modules/useUsers";
const { login, email, password, signInWithGoogle, signInWithFacebook } = useUsers();

</script>

<style lang="scss" scoped></style>