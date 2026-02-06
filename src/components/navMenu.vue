<script setup>

</script>

<template>
    <div class="navMenu">
        <nav>
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
        border-bottom-left-radius: 7px;
        margin-left: -15px;
        
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
        margin: 4px;
    }
</style>