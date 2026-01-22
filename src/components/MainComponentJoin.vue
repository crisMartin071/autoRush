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
    name(value) {
        if (!value) return "Nombre requerido";
        if (value.length < 3 || value.length > 21) return "Longitud debe de ser entre 3 y 20 carácteres";
        return true;
    },
    password(value) {
        if (!value) return "Contraseña requerida";
        if (value.length < 3 || value.length > 21) return "Longitud debe de ser entre 3 y 20 carácteres";
        return true;
    },
    confirmPassword(value) {
        if (!value) return "Campo requerido";
        if (value.length < 3 || value.length > 21) return "Longitud debe de ser entre 3 y 20 carácteres";
        return true;
    },
    dni(value) {
        if (!value) return "DNI requerido";
        if (value.length != 9) return "DNI no valido";
        return true;
    },
    email(value) {
        if (!value) return "Debes de introducir un email";
        return true;
    }
};

const { handleSubmit, errors } = useForm({
    validationSchema: schema
});

const { value: name } = useField("name");
const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");
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
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
        {
            label: 'Usuarios',
            data: [10, 20, 30, 40, 50,],
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
        <div class="content">
            <div id="formBox">
            <div class="infoForm">
                <h1>Crea una cuenta</h1>
                <p>Inscribete para poder recibir notificaciones</p>
            </div>
            <div class="form">
                <form @submit.prevent="onSubmit">
                    <label>Nombre:</label>
                    <input type="text" v-model="name">
                    <span class="errors">{{ errors.name }}</span>
                    <label>Contraseña:</label>
                    <input type="password" v-model="password">
                    <span class="errors">{{ errors.password }}</span>
                    <label>Confirmar contraseña:</label>
                    <input type="password" v-model="confirmPassword">
                    <span class="errors">{{ errors.confirmPassword }}</span>
                    <label>Email:</label>
                    <input type="email" v-model="email">
                    <span class="errors">{{ errors.email }}</span>
                    <div>
                        <label>DNI:</label>
                        <input type="text" v-model="dni">
                        <span class="errors">{{ errors.dni }}</span>
                        <label>Tlf:</label>
                        <input type="text">
                    </div>
                    <div>
                        <input type="submit" value="Enviar" class="btn">
                    </div>
                </form>
            </div>
        </div>
        <div class="graphic">
            <h1>Las estadísticas nos avalan</h1>
            <p>- Cada mes incrementamos el numero de clientes en miles -</p>
            <br/>
            <div>
                <Bar :data="chartData" :options="chartOptions" />
            </div>
        </div>
        </div>
    </main>
</template>

<style>

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

#formBox{
    width: 65%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 30px;
}

#formBox h1{
    color: black;
}

#formBox label{
    color: black;
}

.infoForm{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: white;
    width: 50%;
    text-align: center;
}

.infoForm p{
    color:rgb(126, 126, 126);;
}

.form{
    background-color: white;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 380px;
}

.form form{
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    padding: 5px;
}

.form form input{
    height: 28px;
}

.form form label{
    margin-top: 5px;
}

form div{
    display: flex;
    justify-content: space-around;
    margin: 15px;
}

.form form div input{
    width: 40%;
}

.graphic{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 800px;
}

.graphic div{
    height: 400px;
    width: 80%;
}

.errors{
    color: red;
}

</style>