<script setup>

const props = defineProps({
    title: String,
    img: String
});

</script>

<template>
    <div class="backgroundPicture">
        <img :src="'../../public/img/'+ props.img" id="backgroundImage">
        <div class="overlay"></div>
        <div class="texto">
            <h1>{{ $t(props.title) }}</h1>
            <p>- {{ $t("slogan") }} -</p>
        </div>
    </div>
</template>
    
<style>
    .backgroundPicture{
        position: relative;
    }

    #backgroundImage{
        height: 100%;
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

    .backgroundPicture .texto h1{
        font-size: 42px;
        margin: 0px;
    }
</style>