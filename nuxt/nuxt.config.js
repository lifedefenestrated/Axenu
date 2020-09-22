import axios from 'axios'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Axenu AB - Mobile Apps',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Axenu are building modern apps for everyday usecases. No matter if you need a simple app to showcase your company or an advanced application with AR.'
      },
      { hid: 'og:image', property: 'og:image', content: '/Axenu-cover-meta.jpg' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'en-US'
    }
  },
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    URL: 'https://axenu.com',
    BASE_URL: 'https://cockpit.axenu.com',
    API_TOKEN: 'ad5bf77cc0fb358931a4247452fcea',
    POSTS_URL:
      'https://cockpit.axenu.com/api/collections/get/blogposts?token=ad5bf77cc0fb358931a4247452fcea',
    PRODUCTS_URL:
      'https://cockpit.axenu.com/api/collections/get/products?token=ad5bf77cc0fb358931a4247452fcea',
    UPLOADS_URL: 'https://cockpit.axenu.com/storage/uploads',
    IMAGE_URL:
      'https://cockpit.axenu.com/api/cockpit/image/?token=ad5bf77cc0fb358931a4247452fcea',
    STORAGE_URL: 'https://cockpit.axenu.com/storage/uploads/',
    PRIVACY_URL: 'https://cockpit.axenu.com/api/collections/get/privacypolicy?token=ad5bf77cc0fb358931a4247452fcea',
    TERMS_URL: 'https://cockpit.axenu.com/api/collections/get/terms?token=ad5bf77cc0fb358931a4247452fcea',

    // https://cockpit.axenu.com/storage/uploads/2019/11/20/5dd56153b7b6flinked-in-cover.png
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/firebase.js'],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa'
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          }
        ]
      }
    ]
    // [
    //   'nuxt-fontawesome',
    //   {
    //     component: 'fa',
    //     imports: [
    //       {
    //         set: '@fortawesome/free-solid-svg-icons',
    //         icons: ['faDollarSign']
    //       }
    //     ]
    //   }
    // ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {},
    generate: {
      routes: async () => {
        let { data } = await axios.post(
          process.env.POSTS_URL,
          JSON.stringify({
            filter: { published: true },
            sort: { _created: -1 },
            populate: 3
          }),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        let { data: products } = await axios.post(
          process.env.PRODUCTS_URL,
          JSON.stringify({populate: 4}),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        let { data: policies } = await axios.post(
          process.env.PRIVACY_URL,
          JSON.stringify({}),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        let { data: terms } = await axios.post(
          process.env.TERMS_URL,
          JSON.stringify({}),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        let routes = products.entries.map(product => {
          console.log(product)
          return {
            route: `products/${product.title_slug}`,
            payload: product
          }
        })

        routes += data.entries.map(post => {
          return {
            route: `blog/${post.title_slug}`,
            payload: post
          }
        })

        routes += policies.entries.map(post => {
          return {
            route: `privacy-policy/${post.title_slug}`,
            payload: post
          }
        })

        routes += terms.entries.map(post => {
          return {
            route: `terms/${post.title_slug}`,
            payload: post
          }
        })
        return routes
      }
    }
  }
}
