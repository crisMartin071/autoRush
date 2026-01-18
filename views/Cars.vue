<script setup>
import FooterComponent from '../src/components/FooterComponent.vue';
import HeaderComponent from '../src/components/HeaderComponent.vue';
import MainComponentCars from '../src/components/MainComponentCars.vue';
import { ref } from "vue";

const isOpen = ref(false);

const toggleButton = (event) => {
    isOpen.value = event;
}

</script>

<template>
    <HeaderComponent @show="toggleButton" :state="isOpen"></HeaderComponent>
    <MainComponentCars :isOpen="isOpen"></MainComponentCars>
    <FooterComponent></FooterComponent>
</template>