<template>
  <div class="wrapper">
    <div class="main" v-if="API">
      <h2 class="name">Title : {{ API.title }}</h2>
      <h3>
        Homeworld :
        <router-link class="link" :to="{ name: 'PageSTARWARS' }"
          >Tatooine</router-link
        >
      </h3>
      <h3>Created at : {{ API.created }}</h3>
      <h3>Edited : {{ API.edited }}</h3>
      <h3>Director : {{ API.director }}</h3>
      <h3>Episode # {{ API.episode_id }}</h3>
      <h3>Opening crawl : {{ API.opening_crawl }}</h3>
      <h3>Producer : {{ API.producer }}</h3>
      <h3>Release date : {{ API.release_date }}</h3>
      <img class="img" src="@/assets/StarWars/re.png" alt="" />
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
    loogAPI() {
      console.log(this.API);
    },
  },
  mounted() {
    this.GET_GOODS_FROM_API("http://swapi.dev/api/films/3/").then(
      (response) => {
        this.API = response.data;
      }
    );
  },
  computed: {},
  watch: {
    API() {
      this.loogAPI();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>