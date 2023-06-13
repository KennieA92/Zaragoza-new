
<template>
  <div class="bg-quaternary">
    <NavigationComponent class="sticky z-50 top-0" />
    <Suspense>
      <router-view />
    </Suspense>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from './components/Navigation/FooterComponent.vue';
import NavigationComponent from './components/Navigation/NavigationComponent.vue';

</script>
<style></style>

