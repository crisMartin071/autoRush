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
        <div id="presentationBox">
            <div>
                <h2>{{ $t("titleHistory") }}</h2>
                <p>{{ $t("history") }}</p>
            </div>
            <div>
                <img src="../../public/img/car.jpg">
            </div>
        </div>
        <div class="brandsUsed">
            <h2>{{ $t("tilteBrands") }}</h2>
            <BrandsTable></BrandsTable>
        </div>
        <div class="joinUsBox">
            <img src="../../public/img/auditoria.jpg" id="img1">
            <img src="../../public/img/mecanicos.jpg" id="img2">
            <div id="overlayJoinUs"></div>
            <div>
                <a href="joinus">
                    <button>{{ $t("btnJoinUs") }}</button>
                </a>
            </div>
        </div>
    </main>
</template>

<style>
    #presentationBox{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 90%;
        margin-top: 80px;
        gap: 100px;
        padding-left: 100px;
        margin-bottom: 100px;
    }

    #presentationBox p{
        font-size: 14px;
        width: 420px;
        text-align: justify;
    }
    
    #presentationBox img{
        width: 500px;
        height: 300px;
        border-radius: 8px;
    }

    .joinUsBox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 500px;
        margin-top: 100px;
        position: relative;
    }

    .joinUsBox img {
        width: 50%;
        height: 100%;
        object-fit: cover;
    }

    .joinUsBox #img1 {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .joinUsBox #img2 {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .joinUsBox #overlayJoinUs {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        z-index: 1;
    }

    .joinUsBox a {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    .joinUsBox button {
        background-color: white;
        color: black;
        border-radius: 4px;
        height: 50px;
        width: 150px;
        font-size: 15px;
        border: none;
        cursor: pointer;
    }

    .brandsUsed{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    @media (max-width: 1100px) {
        #presentationBox{
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 90%;
            margin-top: 80px;
            gap: 100px;
            padding-left: 50px;
            margin-bottom: 100px;
        }
        
        #presentationBox img{
            width: 300px;
            height: 200px;
            border-radius: 8px;
        }
    }

    @media (max-width: 900px) {
        #presentationBox{
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 90%;
            margin-top: 80px;
            gap: 100px;
            padding-left: 50px;
            margin-bottom: 100px;
        }
        
        #presentationBox img{
            display: none;
        }
    }

    @media (max-width: 400px) {
        #presentationBox p{
            font-size: 14px;
            width: 320px;
            text-align: justify;
        }
    }
    
</style>