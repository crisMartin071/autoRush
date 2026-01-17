<script setup>

</script>

<template>
    <footer>
        <img id="logo" src="../../public/autoRush (1).png">
        <div class="contentFooter">
            <div>
                <h4>Mapa web</h4>
                <ul>
                    <li>
                        <a href="/">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a>
                            Catálogo
                        </a>
                    </li>
                    <li>
                        <a>
                            Unete a nosotros
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Redes Sociales</h4>
                <div>
                    
                </div>
            </div>
            <div>
                <h4>Ayuda</h4>
                <ul class="helpInfo">
                    <li>Nº Teléfono: 123 45 67 89</li><br/>
                    <li>Correo electrónico: autoRush@gmail.com</li><br/>
                    <li>Dirección: Rincón Bernardo, 04 - Daly City, Bal / 68860</li><br/>
                </ul>
            </div>
        </div>
        <hr>
        <div class="sponsors">
            <img>
            <img>
            <img>
            <img>
            <img>
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

    .contentFooter div{
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
    }

    .sponsors img{
        width: 80px;
        height: 80px;
    }

</style>