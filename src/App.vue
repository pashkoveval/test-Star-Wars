<template>
  <div id="app">
    <keep-alive>
      <router-view class="content" />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "Vue",
  components: {},
  data() {
    return {
      serch: "",
    };
  },
  methods: {},
};
</script>
<style lang="scss">
/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  outline: none;
  scroll-behavior: smooth;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Roboto:wght@300;400;500;700&display=swap");
</style>
