<template>
    <section id="#newsletter" class="pb-8 w-full h-full flex justify-center">
        <div
            class="w-10/12 h-[35vh]
             bg-secondary flex justify-center items-center content-center rounded-tr-3xl rounded-bl-3xl rounded-br-3xl relative">
            <div class=" w-11/12 lg:w-11/12 2xl:w-11/12 flex flex-wrap">
                <h1
                    class=" w-full text-start text-2xl/snug md:text-5xl/none lg:text-6xl/none 2xl:text-7xl/none font-nunito text-text-secondary">
                    <span class="font-extrabold">NEVER</span> MISS A <span class="font-extrabold">MOMENT</span>
                </h1>
                <h2 class="w-full text-start text-lg/none md:text-4xl/none text-text-secondary">
                    ...subscribe to our weekly newsletter.
                </h2>
                <form
                    action="https://gmail.us14.list-manage.com/subscribe/post?u=e6613a5cf963b9588e538fb6f&amp;id=cafafab6dc&amp;f_id=0003ebe0f0"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                    class="validate flex flex-wrap lg:flex-nowrap w-full lg:w-4/12 justify-center items-center my-4 gap-2"
                    target=" _blank" novalidate>
                    <div class="w-full lg:w-9/12 flex justify-center items-center">
                        <input
                            class="w-full rounded-3xl bg-secondary border-accent placeholder:text-accent focus:ring-primary focus:border-primary"
                            type="email" name="EMAIL" id="mce-EMAIL" placeholder="WRITE YOUR EMAIL" />
                    </div>
                    <div
                        class="w-full lg:w-4/12 xl:w-3/12 flex justify-center items-center  bg-accent text-xs  text-white rounded-3xl">
                        <input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe"
                            class="p-3 w-full cursor-pointer focus:outline-none" />
                    </div>
                </form>

            </div>
        </div>


    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>