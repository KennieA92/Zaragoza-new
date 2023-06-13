<template>
    <section class="w-full overflow-x-hidden relative font-nunito text-lg sm:text-2xl xl:text-3xl text-primary">
        <h2 id="left_scrolling_text" class="w-[500vw] sm:w-[300vw]  md:w-[250vw] lg:w-[300vw] xl:w-[250vw] py-0 md:py-2 ">
            STAY
            <span class="font-bold">CONNECTED</span>
            WITH YOUR FELLOWS
            STAY <span class="font-bold">CONNECTED</span> WITH YOUR FELLOWS STAY <span class="font-bold">CONNECTED</span>
            WITH YOUR FELLOWS STAY <span class="font-bold">CONNECTED</span> WITH YOUR FELLOWS
        </h2>
        <h2 id="right_scrolling_text"
            class="w-[500vw] sm:w-[300vw]  md:w-[300vw] lg:w-[250vw] xl:w-[200vw] py-0 md:py-2 rotate-180 text-end">
            STAY <span class="font-bold">CONNECTED</span> WITH
            YOUR FELLOWS
            STAY
            <span class="font-bold">CONNECTED</span> WITH YOUR FELLOWS STAY
            <span class="font-bold">CONNECTED</span> WITH
            YOUR
            FELLOWS STAY <span class="font-bold">CONNECTED</span> WITH YOUR FELLOWS


        </h2>
    </section>
</template>

<script setup lang="ts">
onscroll = () => {
    // target the scrolling text elements
    const textLeft = document.querySelector('#left_scrolling_text') as HTMLElement;
    const textRight = document.querySelector('#right_scrolling_text') as HTMLElement;
    // get the scroll value
    let value = window.scrollY;
    if (textLeft && textRight) {
        // change the margin of the text elements
        textLeft.style.marginLeft = (-value * 0.5 + 'px');
        textRight.style.marginLeft = ((value - 800) * 0.5 + 'px');
    }
}

</script>

<style scoped></style>