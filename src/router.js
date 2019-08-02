import Vue from "vue";
import Router from "vue-router";
const Home = () => import("./views/Home.vue");
const Blog = () => import("./views/Blog.vue");
const BlogPost = () => import("./views/BlogPost.vue");
const Contact = () => import("./views/Contact.vue");
const Products = () => import("./views/Products.vue");
const Product = () => import("./views/Product.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/blogpost/:key",
      component: BlogPost
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/products/:key",
      component: Product
    }
  ]
});
