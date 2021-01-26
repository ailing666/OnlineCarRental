import Vue from "vue";
import VueRouter from "vue-router";
import Index from '@/views/index/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [{
        path: "/user",
        name: "User",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/user/index.vue")
    }]
  },{
    path: "/index",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index/index.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
