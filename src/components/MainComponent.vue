<script setup>
    
import BrandsTable from './BrandsTable.vue';
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
        <div class="brandsUsed">
            <h1>Marcas con las que trabajamos</h1>
            <BrandsTable></BrandsTable>
        </div>
    </main>
</template>

<style>
    main{
        display: flex;
        flex-direction: column;
    }

    .brandsUsed{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>