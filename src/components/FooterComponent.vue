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
                        <a href="/">
                            {{ $t("index") }}
                        </a>
                    </li>
                    <li>
                        <a href="/cars">
                            {{ $t("catalog") }}
                        </a>
                    </li>
                    <li>
                        <a href="joinus">
                            {{ $t("joinUs") }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="section">
                <h4>{{ $t("socialMedias") }}</h4>
                <div class="socialMedias">
                    <img src="../../public/img/instagram.png">
                    <img src="../../public//img/social.png">
                    <img src="../../public//img/facebook.png">
                </div>
            </div>
            <div class="section">
                <h4>{{ $t("help") }}</h4>
                <ul class="helpInfo">
                    <li>{{ $t("helpTlf") }}: 123 45 67 89</li><br/>
                    <li>{{ $t("helpEmail") }}: autoRush@gmail.com</li><br/>
                    <li>{{ $t("address") }}: 1/2 Times Square</li><br/>
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
</style>