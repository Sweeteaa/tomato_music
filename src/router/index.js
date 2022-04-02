import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "Layout",
        component: Layout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/mine',
                name: 'Mine',
                component: () =>
                    import ("../views/mine/Mine.vue")
            },
            {
                path: '/music',
                name: 'Music',
                component: () =>
                    import ("../views/music/Music.vue")
            }
        ]
    },
    {
        path: "/player/:id",
        name: "Player",
        component: () =>
            import ("../views/Player.vue")
    },
    {
        path: "/playlist/:userId",
        name: "PlayList",
        component: () =>
            import ("../views/PlayList.vue")
    },
    {
        path: "/complaylist/:id",
        name: "ComPlayList",
        component: () =>
            import ("../views/ComPlayList.vue")
    },
    {
        path: "/search",
        name: "Search",
        component: () =>
            import ("../views/Search.vue")
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: "active"
})

export default router