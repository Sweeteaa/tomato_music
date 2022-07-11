import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

const routes = [{
        //登录
        path: "/",
        name: "Login",
        component: () =>
            import ("../views/Login.vue")
    },
    {
        //底栏
        path: "/layout",
        name: "Layout",
        component: Layout,
        children: [{
                //首页
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                // 我的
                path: '/mine',
                name: 'Mine',
                component: () =>
                    import ("../views/mine/Mine.vue")
            },
            {
                // 音乐馆
                path: '/music',
                name: 'Music',
                component: () =>
                    import ("../views/music/Music.vue")
            }
        ]
    },
    {
        // 音乐播放
        path: "/player/:id",
        name: "Player",
        component: () =>
            import ("../views/Player.vue")
    },
    {
        // 用户收藏歌单
        path: "/playlist/:userId",
        name: "PlayList",
        component: () =>
            import ("../views/PlayList.vue")
    },
    {
        // 歌单
        path: "/complaylist/:id",
        name: "ComPlayList",
        component: () =>
            import ("../views/ComPlayList.vue")
    },
    {
        // 搜索
        path: "/search",
        name: "Search",
        component: () =>
            import ("../views/Search.vue")
    },
    {
        // 歌手信息
        path: "/singer/:id/:name/:fansCount",
        name: "SingerSongs",
        component: () =>
            import ("../views/music/SingerSongs.vue")
    },
    {
        // 排行榜
        path: "/rank/:id",
        name: "MusicListRank",
        component: () =>
            import ("../views/music/MusicListRank.vue")
    }
]

const router = new VueRouter({
    mode: 'hash', //hash模式
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: "active"
})

export default router