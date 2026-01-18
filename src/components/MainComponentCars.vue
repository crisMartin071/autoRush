<script setup>
import Cars from './Cars.vue';
import InitialBox from './InitialBox.vue';
import NavMenu from './navMenu.vue';

const props = defineProps({
    isOpen: Boolean
});

</script>

<template>
    <main>
        <NavMenu v-if="isOpen"></NavMenu>
        <InitialBox title="catalog" img="sport-car.jpg"></InitialBox>
        <Cars></Cars>
    </main>
</template>

<style>
    main{
        display: flex;
        flex-direction: column;
    }
</style>