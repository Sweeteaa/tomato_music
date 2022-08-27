# tomato_music

# 本项目是一款基于网易云API，仿“网易云”的音乐播放软件，主要实现了一下功能：
1. 登录和退出网易云账号
2. 音乐播放器，点击任意音乐跳转到音乐播放界面，有展示音乐名、歌手信息、专辑名和歌词，能暂停和播放音乐
3. 首页展示给用户每日歌单推荐、新歌推荐和相关音乐推荐，和轮播图展示活动。
4. 搜索功能，输入关键词搜索歌曲，有保留搜索历史记录
5. 音乐馆展示热门50位歌手和排行榜内容，点击能进入详细页面。歌手界面展示歌手信息和歌手热门歌曲。排行榜界面展示所有上榜歌曲
6. 我的界面展示用户信息，点击歌单展示用户收藏的歌曲

***

```
tomato_music
├─ .git
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  └─ common.css
│  │  └─ test.html
│  ├─ components
│  │  ├─ Bottom.vue
│  │  ├─ Carousel.vue
│  │  ├─ SearchHistory.vue
│  │  ├─ SearchResult.vue
│  │  └─ Words.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ utils
│  │  └─ request.js
│  └─ views
│     ├─ ComPlayList.vue
│     ├─ Home.vue
│     ├─ Layout.vue
│     ├─ Login.vue
│     ├─ mine
│     │  └─ Mine.vue
│     ├─ music
│     │  ├─ HotSinger.vue
│     │  ├─ Music.vue
│     │  ├─ MusicList.vue
│     │  ├─ MusicListRank.vue
│     │  ├─ MusicListView.vue
│     │  └─ SingerSongs.vue
│     ├─ Player.vue
│     ├─ PlayList.vue
│     ├─ recomand
│     │  ├─ RecomandList.vue
│     │  ├─ RecomandListDaily.vue
│     │  └─ RecomandListView.vue
│     └─ Search.vue
└─ vue.config.js

```
***

## 技术栈
```Vue 2.0 + Vue-Router + axios + ES6 + Node.js + Element-ui/Vant```
## API来源
<a href="https://neteasecloudmusicapi.vercel.app/#/?id=neteasecloudmusicapi"><img alt="NeteaseCloudMusicApi" /></a>

***

## 登录界面Login.vue
![image](https://user-images.githubusercontent.com/88074316/187017191-7620385b-273c-4254-9927-4204396cb2f2.png)
## 底部导航栏Layout.vue
![image](https://user-images.githubusercontent.com/88074316/187017224-864ed35d-18ba-4188-bbc6-c32d7c5f269d.png)
## 首页home.vue
![image](https://user-images.githubusercontent.com/88074316/187017239-00383c55-8298-484c-ba4a-67bf7ab89e3c.png)
## 顶部搜索Search.vue
![image](https://user-images.githubusercontent.com/88074316/187017256-04fb134b-ab18-4c58-b300-24347e78efcd.png)
## 中间推荐部分
- 轮播图Carousel.vue组件
![image](https://user-images.githubusercontent.com/88074316/187017281-0b9db397-a7a7-4d54-be52-cb763c9d7645.png)

- 日推歌单Recommend.vue
![image](https://user-images.githubusercontent.com/88074316/187017299-288d671c-881a-4c46-b8c5-9ee35f91de3a.png)

## 音乐馆界面Music.vue
![image](https://user-images.githubusercontent.com/88074316/187017316-87cf2dd8-17ba-4995-857c-79ae43b70a9d.png)

## 热门歌手HotSinger.vue
![image](https://user-images.githubusercontent.com/88074316/187017324-8fcb8007-9955-4101-bac8-1b3e3487a9b2.png)

## 歌手详情页面SingerSongs.vue
![image](https://user-images.githubusercontent.com/88074316/187017335-c3996abd-c061-4211-aa7f-6a438278c476.png)

## 排行榜MusicList.vue
![image](https://user-images.githubusercontent.com/88074316/187017347-530a0ba4-3ff1-4fa5-b46e-bb24cb45e360.png)

## 榜单详细界面MusicListRank.vue
![image](https://user-images.githubusercontent.com/88074316/187017365-64bcbf65-8b40-4f4f-b8f8-b10f8bd605ca.png)

## 我的界面Mine.vue
![image](https://user-images.githubusercontent.com/88074316/187017373-983fd8d3-deaa-4fb3-be80-f02e2ebfae23.png)

## 音乐播放界面Player.vue
![image](https://user-images.githubusercontent.com/88074316/187017391-7bb6495e-ae16-4db7-8456-699dc69e2ab8.png)

## 歌单界面
![image](https://user-images.githubusercontent.com/88074316/187017423-5858bffb-ea12-49b3-93a3-14e0390224f0.png)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
