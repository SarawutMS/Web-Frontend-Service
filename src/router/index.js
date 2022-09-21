/*import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ //'../views/AboutView.vue')
  //}
//]

//const router = createRouter({
 // history: createWebHistory(process.env.BASE_URL),
 // routes
//})

//export default router-->
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Custom from "../views/Custom.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title: "Home",
    },
  },
  {
    path: '/custom',
    name: 'Custom',
    component: Custom,
    meta:{
      title: "Custom",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;

