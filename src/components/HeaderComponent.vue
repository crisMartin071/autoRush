<script setup>
  import { ref } from "vue";
  import { useI18n } from "vue-i18n";
  
  const { locale } = useI18n();
  const lang = ref(locale.value);

  const props = defineProps({
    state: Boolean
  });
  
  const emits = defineEmits(["show"]);

  const showNavMenu = () => {
    emits("show", !props.state);
  };

  const changeLanguage = (language) => {
    locale.value = language;
    lang.value = locale.value;
  }

</script>

<template>
  <header>
    <button @click="showNavMenu" :class="{ active: props.state, disactive: !props.state}" >☰</button>
    <a href="/">
      <img id="logo" src="../../public/img/autoRush (1).png">
    </a>
    <div>
      <button v-if="lang == 'es'" @click="changeLanguage('en')" class="languages">
        <img src="../../public/img/españa.png">
      </button>
      <button v-else @click="changeLanguage('es')" class="languages">
        <img src="../../public/img/eeuu.png">
      </button>
    </div>
  </header>
</template>

<style>

  .disactive{
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 1px white solid;
    width: 50px;
    height: 35px;
    font-size: 14px;
  }

  .active{
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 1px white solid;
    width: 50px;
    height: 35px;
    font-size: 14px;
  }

  .languages{
    width: 60px;
    height: 60px;
  }

  .languages img{
    width: 45px;
    height: 30px;
    border-radius: 8px;
  }

</style>