<script setup>

</script>

<template>
    <div class="navMenu">
        <nav>
            <ul>
                <li>
                    <a href="/">{{ $t("index") }}</a>
                </li>
                <li>
                    <a href="/cars">{{ $t("catalog") }}</a>
                </li>
                <li>
                    <a href="/joinus">{{ $t("joinUs") }}</a>
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
        top: 120px;
        z-index: 2;
        border-bottom-right-radius: 7px;
        
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
        margin: 4px;
    }
</style>