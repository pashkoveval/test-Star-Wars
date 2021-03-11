<template>
  <div class="wrapper">
    <div class="main" v-if="API">
      <h2 class="name">Planet : {{ API.name }}</h2>
      <p class="subtitl">Planet parameters</p>
      <h3>Created at : {{ API.created }}</h3>
      <h3>Population : {{ API.population }}</h3>
      <h3>Terrain : {{ API.terrain }}</h3>
      <h3>Surface water : {{ API.surface_water }}</h3>
      <h3>Diameter : {{ API.diameter }}</h3>
      <h3>Edited at : {{ API.edited }}</h3>
      <h3>Gravity : {{ API.gravity }}</h3>
      <h3>Orbital period at : {{ API.orbital_period }}</h3>
      <h3>Rotation period at : {{ API.rotation_period }}</h3>
      <h3 class="href">
        Residents :
        <router-link class="link" :to="{ name: 'Luck' }"
          >Luke Skywalker</router-link
        >,
        <router-link class="link" :to="{ name: 'Anakin' }"
          >Anakin Skywalker</router-link
        >,
        <router-link class="link" :to="{ name: 'Shmi ' }"
          >Shmi Skywalker</router-link
        >, <router-link class="link" :to="{ name: 'C3PO' }">C-3PO</router-link>,
        <router-link class="link" :to="{ name: 'Vader' }"
          >Darth Vader</router-link
        >,
        <router-link class="link" :to="{ name: 'Lars' }">Owen Lars</router-link
        >,
        <router-link class="link" :to="{ name: 'Whitesun' }"
          >Beru Whitesun lars</router-link
        >, <router-link class="link" :to="{ name: 'R5' }">R5-D4</router-link>,
        <router-link class="link" :to="{ name: 'Biggs' }"
          >Biggs Darklighter</router-link
        >,
        <router-link class="link" :to="{ name: 'Cliegg' }"
          >Cliegg Lars</router-link
        >.
      </h3>
      <h3 class="href">
        Films :
        <router-link class="link" :to="{ name: 'NewHope' }"
          >A New Hope</router-link
        >,
        <router-link class="link" :to="{ name: 'Return' }"
          >Return of the Jedi</router-link
        >,
        <router-link class="link" :to="{ name: 'Menace' }"
          >The Phantom Menace</router-link
        >,
        <router-link class="link" :to="{ name: 'Attack' }"
          >Attack of the Clones</router-link
        >,
        <router-link class="link" :to="{ name: 'Revenge' }"
          >Revenge of the Sith</router-link
        >.
      </h3>
      <img
        class="img"
        src="https://jkhub.org/wiki/images/0/01/Tatooine.png"
        alt=""
      />
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
    this.GET_GOODS_FROM_API("https://swapi.dev/api/planets/1/").then(
      (response) => {
        this.API = response.data;
      }
    );
  },
};
</script>

<style lang="scss">
.wrapper {
  background: #202024;
  min-height: 100vh;
  overflow: hidden;
}
.main {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  color: rgb(236, 165, 58);
}
.img {
  position: absolute;
  top: 0;
  right: 0;
  width: 450px;
  z-index: -1;
  @media (max-width: 768px) {
    width: 250px;
    opacity: 0.5;
  }
}
.load {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #fff;
}
.link {
  color: #fff;
  margin: 0 5px;
  &:link {
    color: rgb(212, 122, 122);
  }
}
.href {
  color: orangered;
}
.name {
  font-size: 30px;
}
.subtitl {
  color: rgb(123, 255, 0);
  font-size: 20px;
  margin: 5px auto;
}
h3 {
  margin: 10px 5px;
}
</style>