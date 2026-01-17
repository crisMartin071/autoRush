<script setup>
import FooterComponent from '../src/components/FooterComponent.vue';
import HeaderComponent from '../src/components/HeaderComponent.vue';
import MainComponent from '../src/components/MainComponent.vue';
import { ref } from "vue";
//Se debe de poner aqui el objeto i18n para la traduccion en cada componente

const isOpen = ref(false);

const toggleButton = (event) => {
    isOpen.value = event;
}

</script>

<template>
    <HeaderComponent @show="toggleButton" :state="isOpen"></HeaderComponent>
    <MainComponent :isOpen="isOpen"></MainComponent>
    <FooterComponent></FooterComponent>
</template>