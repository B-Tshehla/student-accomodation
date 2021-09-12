import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'
import Address from './components/Address.vue' 
import NxtKin from './components/NxtKin.vue'
import ProfilePic from './components/ProfilePic.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path:'/',component:Home},
        {path:'/login',component:Login},
        {path:'/register', component:Register},
        {path:'/profile',component:Profile},
        {path:'/Address',component:Address},
        {path:'/NxtKin',component:NxtKin},
        {path:'/ProfilePic',component:ProfilePic}
    ]

})