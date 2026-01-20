<script setup>
import InitialBox from './InitialBox.vue';
import NavMenu from './navMenu.vue';
import { useForm, useField } from "vee-validate";
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

const schema = {
    name(value){
        if (!value) return "Nombre requerido";
        if (value.length < 3 || value.length > 21) return "Longitud debe de ser entre 3 y 20 carácteres";
        return true;
    },
    dni(value){
        let regex = /^[0-9]{8}[A-Z]/;
        if (!value) return "Nombre requerido";
        if(value.length != 9 || !regex.test(value)) return "DNI no valido";
        return true;
    },
    email(value){
        if(!value) return "Debes de introducir un email";
        return true;
    }
};

const { handleSubmit, errors } = useForm({
    validationSchema: schema
});

const { value: name } = useField("name");
const { value: dni } = useField("dni");
const { value: email } = useField("email");

const onSubmit = handleSubmit(() => {
    console.log("Formulary is correct")
});

const props = defineProps({
    isOpen: Boolean
});

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
  datasets: [
    {
      label: 'Ventas',
      data: [40, 20, 12, 39],
      backgroundColor: '#42b983'
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};

</script>

<template>
    <main>
        <NavMenu v-if="isOpen"></NavMenu>
        <InitialBox title="adviser" img="sport-car.jpg"></InitialBox>
        <h1>Crea una cuenta</h1>
        <p>Inscribete para poder recibir notificaciones</p>
        <div>
            <form @submit.prevent="onSubmit">
                <label>Nombre:</label>
                <input type="text" v-model="name">
                <span>{{ errors.name }}</span>
                <label>DNI:</label>
                <input type="text" v-model="dni">
                <span>{{ errors.dni }}</span>
                <label>Email:</label>
                <input type="email" v-model="email">
                <span>{{ errors.email }}</span>
                <label>Tlf:</label>
                <input type="text">
                <input type="submit" value="Enviar">
            </form>
        </div>
        <div>
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </main>
</template>

<style>
    main{
        display: flex;
        flex-direction: column;
    }

</style>