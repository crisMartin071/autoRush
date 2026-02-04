<script setup>
import InitialBox from './InitialBox.vue';
import NavMenu from './navMenu.vue';
import { useForm, useField } from "vee-validate";
import { Bar } from 'vue-chartjs';
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js';

const { t } = useI18n();

const schema = {
    name(value) {
        if (!value) return t("nameRequired");
        if (value.length < 3 || value.length > 21) return t("lengthInput");
        return true;
    },
    password(value) {
        if (!value) return t("passwordRequired");
        if (value.length < 3 || value.length > 21) return t("lengthInput");
        return true;
    },
    confirmPassword(value) {
        if (!value) return t("confirmPasswordRequired");
        if (value.length < 3 || value.length > 21) return t("lengthInput");
        return true;
    },
    dni(value) {
        if (!value) return t("dniRequired");
        if (value.length != 9) return t("dniRequired");
        return true;
    },
    email(value) {
        if (!value) return t("emailRequired");
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

const chartData = computed(() => ({
  labels: [
    t("january"),
    t("february"),
    t("march"),
    t("april"),
    t("may")
  ],
  datasets: [
    {
      label: t("users"),
      data: [10, 20, 30, 40, 50],
      backgroundColor: '#42b983'
    }
  ]
}));

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
                <h1>{{ $t("createAccount") }}</h1>
                <p>{{ $t("signUpInfo") }}</p>
            </div>
            <div class="form">
                <form @submit.prevent="onSubmit">
                    <label>{{ $t("nameLabel") }}</label>
                    <input type="text" v-model="name">
                    <span class="errors">{{ errors.name }}</span>
                    <label>{{ $t("passwordLabel") }}</label>
                    <input type="password" v-model="password">
                    <span class="errors">{{ errors.password }}</span>
                    <label>{{ $t("confirmPasswordLabel") }}</label>
                    <input type="password" v-model="confirmPassword">
                    <span class="errors">{{ errors.confirmPassword }}</span>
                    <label>{{ $t("emailLabel") }}</label>
                    <input type="email" v-model="email">
                    <span class="errors">{{ errors.email }}</span>
                    <div>
                        <label>{{ $t("dniLabel") }}</label>
                        <input type="text" v-model="dni">
                        <span class="errors">{{ errors.dni }}</span>
                        <label>{{ $t("phoneLabel") }}</label>
                        <input type="text">
                    </div>
                    <div>
                        <input type="submit" :value="t('btnSend')" class="btn">
                    </div>
                </form>
            </div>
        </div>
        <div class="graphic">
            <h1>{{ $t("statsInfo") }}</h1>
            <p>- {{ $t("statsSubtitle") }} -</p>
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

@media (max-width: 630px) {
    .graphic{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40%;
        width: 80%;
    }

    .form form{
        width: 95%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px;
        padding: 5px;
    }
}

</style>