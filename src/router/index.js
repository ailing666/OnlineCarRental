import Vue from "vue";
import VueRouter from "vue-router";
import Index from '@/views/index/index.vue'

Vue.use(VueRouter);

// 解决路由地址重复的报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [{
        path: "/user",
        name: "User",
        component: () =>
          import("@/views/user/index.vue")
    }, {
      path: "/safe",
      name: "Safe",
      component: () => import("@/views/safe/index")
    },]
  },{
    path: "/index",
    name: "Index",
    component: () =>
      import("@/views/index/index.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
