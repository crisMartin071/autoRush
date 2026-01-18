<script setup>
import { useI18n } from "vue-i18n";
//Cambiar y hacer que herede del padre
const { t } = useI18n();

const props = defineProps({
    title: String,
    img: String
});

</script>

<template>
    <div class="backgroundPicture">
        <img :src="'../../public/img/'+ props.img">
        <div class="overlay"></div>
        <div class="texto">
            <h1>{{ t(props.title) }}</h1>
            <p>- -</p>
        </div>
    </div>
</template>
    
<style>
    .backgroundPicture{
        position: relative;
    }

    img{
        width: 100%;
    }

    .backgroundPicture .overlay{
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .backgroundPicture .texto {
        color: white;
        position: absolute;
        bottom: 6%;
        left: 5%;
        z-index: 2;
    }
</style>