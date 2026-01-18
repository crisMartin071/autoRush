<script setup>
import { ref, onMounted } from "vue";

const cars = ref([]);

onMounted(async () => {
    try{
        const response = await fetch("/data.json");
        if(!response.ok) throw new Error("Error al responder");
        cars.value = await response.json();
    }catch(error){
        console.log("Error conectando con API:" + error);
    }
});

</script>

<template>
    <div class="infoDiv">
        <div id="filterDiv">
            <h1>Nuestros coches</h1>
            <form>
                <input type="text" name="filter">
            </form>
        </div>
        <div class="cars">
            <div class="card" v-for="car in cars" :key="car.id">
                <img src="../../public/img/bmw.jpg">
                <div class="infoCard">
                    <h1>{{ car.name }}</h1>
                    <p>{{ car.description }}</p>
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
        height: 300px;
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