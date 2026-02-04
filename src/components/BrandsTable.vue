<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const columns = computed(() => [
    { 
        label: t("columnPosition"), field: "id" 
    },
    { 
        label: t("columnName"), field: "name" 
    },
    { 
        label: t("columnSales"), field: "sells" 
    }
]);

const rows = ref([]);

onMounted(async () => {
    try {
        const data = await fetch("/brands.json");
        if (!data.ok) throw new Error("Ha habido un error");
        rows.value = await data.json();
    } catch (error) {
        console.log("Error al conectar con la API");
    }
})

</script>

<template>
    <vue-good-table :columns="columns" :rows="rows" :pagination-options="{
        enabled: true,
        perPage: 5
    }" :search-options="{
                        enabled: true,
                    }">
    </vue-good-table>
</template>

<style>
    .vgt-inner-wrap {
        border: 8px solid #ddd;
        width: 800px;
    }

    @media (max-width: 1100px) {
        .vgt-inner-wrap {
            border: 8px solid #ddd;
            width:95%;
        }
    }
</style>