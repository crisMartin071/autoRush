<script setup>
import { ref, onMounted, computed } from "vue";

const cars = ref([]);
const filter = ref();

onMounted(async () => {
    try{
        const response = await fetch("/autoRush/data.json");
        if(!response.ok) throw new Error("Error al responder");
        cars.value = await response.json();
    }catch(error){
        console.log("Error conectando con API:" + error);
    }
});

const filterNoValid = computed(()=>{
    if(!filter.value) return false;
    const regex = /^[a-zA-Z0-9\s]+$/;
    return !regex.test(filter.value);
})

const carsFiltered = computed(()=>{

    if (!filter.value) {
        return cars.value;
    };

    const search = filter.value.toLowerCase();

    return cars.value.filter(car =>
        car.name.toLowerCase().startsWith(search) ||
        car.description.toLowerCase().startsWith(search)
    );
});

</script>

<template>
    <div class="infoDiv">
        <div id="filterDiv">
            <h1>Nuestros coches</h1>
            <form>
                <input type="text" name="filter" v-model="filter">
                <span class="errors" v-if="filterNoValid"> No se admiten caracteres especiales</span>
            </form>
        </div>
        <div class="cars">
            <div class="card" v-for="car in carsFiltered" :key="car.id">
                <img :src="'/autoRush/img/'+ car.img">
                <div class="infoCard">
                    <h1>{{ car.name }}</h1>
                    <p>{{ $t("cars."+car.name)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .infoDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #filterDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }

    .cars{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 80%;
    }

    .card{
        width: 200px;
        height: 305px;
        background-color: white;
        margin: 8px;
        border-radius: 8px;
        padding: 10px;
    }

    .card h1{
        color: black;
        font-size: 22px;
        text-align: center;
    }

    .card p{
        font-size: 12px;
        text-align: center;
    }

    .card img{
        height: 200px;
        width: 200px;
        border-radius: 8px;
    }
    
</style>