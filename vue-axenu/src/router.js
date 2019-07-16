import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import BlogPost from "./views/BlogPost.vue";
import Contact from "./views/Contact.vue";
import Products from "./views/Products.vue";
import Product from "./views/Product.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/blogpost/:key",
      component: BlogPost,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/products/:key",
      component: Product,
    },
  ],
});
