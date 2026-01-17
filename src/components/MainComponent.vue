<script setup>
import InitialBox from './InitialBox.vue';
import NavMenu from './navMenu.vue';

const props = defineProps({
    isOpen: Boolean
});

</script>

<template>
    <main>
        <NavMenu v-if="isOpen"></NavMenu>
        <InitialBox title="greet" img="sport-car.jpg"></InitialBox>
    </main>
</template>

<style>
    main{
        display: flex;
        flex-direction: column;
    }
</style>