<template>
  <div class="wrapper">
    <div class="main" v-if="API">
      <h2 class="name">Person : {{ API.name }}</h2>
      <p class="subtitl">physical characteristics :</p>
      <h3>
        Homeworld :
        <router-link class="link" :to="{ name: 'PageSTARWARS' }"
          >Tatooine</router-link
        >
      </h3>
      <h3>B-Day at : {{ API.created }}</h3>
      <h3>Edited : {{ API.edited }}</h3>
      <h3>Gender : {{ API.gender }}</h3>
      <h3>Eye color : {{ API.eye_color }}</h3>
      <h3>Hair color : {{ API.hair_color }}</h3>
      <h3>Skin color : {{ API.skin_color }}</h3>
      <h3>Mass : {{ API.mass }}</h3>
      <h3>Height : {{ API.height }}</h3>
      <h3>И МНОГОЕ ДРУГОЕ ЧУДЕСНОЕ ОН СДЕЛАЛ И УМЕЕТ</h3>
      <img class="img" src="@/assets/StarWars/Cliegg.jpg" alt="" />
    </div>
    <div class="load" v-if="!API">
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      API: {},
    };
  },
  methods: {
    ...mapActions(["GET_GOODS_FROM_API"]),
  },
  mounted() {
    this.GET_GOODS_FROM_API("http://swapi.dev/api/vehicles/44/").then(
      (response) => {
        this.API = response.data;
      }
    );
  },
};
</script>

<style lang="scss" scoped>
</style>