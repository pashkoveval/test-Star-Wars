import Vue from "vue";
import VueRouter from "vue-router";
import PageOne from "../views/PageOne.vue";
import PageToo from "../views/PageToo.vue";
import PageSTARWARS from "../views/StarWars/PageSTARWARS.vue";
import Luck from "../views/StarWars/resident/Luck.vue";
import C3PO from "../views/StarWars/resident/C3PO.vue";
import Vader from "../views/StarWars/resident/Vader.vue";
import Lars from "../views/StarWars/resident/Lars.vue";
import Whitesun from "../views/StarWars/resident/Whitesun.vue";
import R5 from "../views/StarWars/resident/R5.vue";
import Biggs from "../views/StarWars/resident/Biggs.vue";
import Anakin from "../views/StarWars/resident/Anakin.vue";
import Shmi from "../views/StarWars/resident/Shmi.vue";
import Cliegg from "../views/StarWars/resident/Cliegg.vue";
import NewHope from "../views/StarWars/films/NewHope.vue";
import Return from "../views/StarWars/films/Return.vue";
import Menace from "../views/StarWars/films/Menace.vue";
import Attack from "../views/StarWars/films/Attack.vue";
import Revenge from "../views/StarWars/films/Revenge.vue";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "PageOne",
    component: PageOne
  },
  {
    path: "/page-2",
    name: "PageToo",
    component: PageToo
  },
  {
    path: "/page-3",
    name: "PageSTARWARS",
    component: PageSTARWARS
  },
  {
    path: "/luck",
    name: "Luck",
    component: Luck,
  },
  {
    path: "/c2po",
    name: "C3PO",
    component: C3PO,
  },
  {
    path: "/Vader",
    name: "Vader",
    component: Vader,
  },
  {
    path: "/Lars",
    name: "Lars",
    component: Lars,
  },
  {
    path: "/Whitesun",
    name: "Whitesun",
    component: Whitesun,
  },
  {
    path: "/R5-D4",
    name: "R5",
    component: R5,
  },
  {
    path: "/Biggs",
    name: "Biggs",
    component: Biggs,
  },
  {
    path: "/Anakin",
    name: "Anakin",
    component: Anakin,
  },
  {
    path: "/Shmi ",
    name: "Shmi ",
    component: Shmi,
  },
  {
    path: "/Cliegg ",
    name: "Cliegg",
    component: Cliegg,
  },
  {
    path: "/A-New-Hope ",
    name: "NewHope",
    component: NewHope,
  },
  {
    path: "/Return",
    name: "Return",
    component: Return,
  },
  {
    path: "/Menace",
    name: "Menace",
    component: Menace,
  },
  {
    path: "/Attack",
    name: "Attack",
    component: Attack,
  },
  {
    path: "/Revenge",
    name: "Revenge",
    component: Revenge,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;