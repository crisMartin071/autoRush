<script setup>

</script>

<template>
    <div class="navMenu">
        <nav>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/cars">Catálogo</a>
                </li>
                <li>
                    <a href="/joinus">Unete a nosotros</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
    .navMenu{
        background-color: rgba(0, 0, 0, 0.7);
        width: 30%;
        position: absolute;
        top: 98px;
        z-index: 2;
        border-bottom-right-radius: 7px;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
</style>