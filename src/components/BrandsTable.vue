<script setup>
import { ref, onMounted } from "vue";

const columns = [
    {
        label: "Posición",
        field: "id"
    },
    {
        label: "Nombre",
        field: "name"
    },
    {
        label: "Ventas",
        field: "sells"
    }
];

const rows = ref([]);

onMounted(async () => {
    try{
        const data = await fetch("/brands.json");
        if(!data.ok) throw new Error("Ha habido un error");
        rows.value = await data.json();
    }catch(error){
        console.log("Error al conectar con la API");
    }
})

</script>

<template>
    <vue-good-table :columns="columns" 
                    :rows="rows"
                    :pagination-options="{
                        enabled: true,
                        perPage: 10
                    }"
                    :search-options="{
                        enabled: true,
                    }">
    </vue-good-table>
</template>

<style>

</style>