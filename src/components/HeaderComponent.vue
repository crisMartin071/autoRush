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
    <button @click="showNavMenu">☰</button>
    <img id="logo" src="../../public/img/autoRush (1).png">
    <div>
      <button v-if="lang == 'es'" @click="changeLanguage('en')">
        eeeee
      </button>
      <button v-else @click="changeLanguage('es')">
        aaaaa
      </button>
    </div>
  </header>
</template>

<style>

  select{
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 5px;
    height: 25px;
    width: 45px;
  }

  button{
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 1px white solid
  }

</style>