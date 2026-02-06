<script setup>

</script>

<template>
    <footer>
        <a href="/">
            <img id="logo" src="../../public/img/autoRush (1).png">
        </a>
        <div class="contentFooter">
            <div class="section">
                <h4>{{ $t("webMap") }}</h4>
                <ul>
                    <li>
                        <router-link to="/">{{ $t("index") }}</router-link>
                    </li>
                    <li>
                        <router-link to="/cars">{{ $t("catalog") }}</router-link>
                    </li>
                    <li>
                        <router-link to="/joinus">{{ $t("joinUs") }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="section">
                <h4>{{ $t("socialMedias") }}</h4>
                <div class="socialMedias">
                    <a href="https://www.instagram.com/">
                        <img src="../../public/img/instagram.png">
                    </a>
                    <a href="https://www.linkedin.com/in/crist%C3%B3bal-mart%C3%ADn-markiewicz-b11177342/">
                        <img src="../../public/img/social.png">
                    </a>
                    <a href="https://www.facebook.com/?locale=es_ES">
                        <img src="../../public/img/facebook.png">
                    </a>
                </div>
            </div>
            <div class="section">
                <h4>{{ $t("help") }}</h4>
                <ul class="helpInfo">
                    <li>{{ $t("helpTlf") }}: 123 45 67 89</li><br/>
                    <li>{{ $t("helpEmail") }}: autoRush@gmail.com</li><br/>
                    <li>{{ $t("address") }}</li><br/>
                </ul>
            </div>
        </div>
        <hr>
        <div class="sponsors">
            <img src="../../public/img/audi.jpg">
            <img src="../../public/img/bmw.jpg">
            <img src="../../public/img/porsche.jpg">
            <img src="../../public/img/jaguar.jpg">
            <img src="../../public/img/lexus.jpg">
        </div>
    </footer>
</template>

<style>
    .contentFooter{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .section{
        width: 20%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .contentFooter div ul li{
        list-style: none;
        margin-left: -35px;
    }

    .helpInfo{
        font-size: 14px;
    }
    
    hr{
        width: 92%;
    }

    .sponsors{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;
        flex-wrap: wrap;
    }

    .sponsors img{
        width: 120px;
        height: 110px;
    }

    .socialMedias{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
    }

    .socialMedias img{
        width: 50px;
        height: 50px;
    }

    @media (max-width: 430px) {
        .section{
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
        }

        .section ul{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .section li{
            width: 50%;
        }
    }

</style>