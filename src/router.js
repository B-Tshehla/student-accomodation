import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'
import Message  from './components/alert.vue'
import Upload   from './components/Upload.vue'
import  SideBar from './components/SideBar.vue'
import ManageUser from './components/userManagement.vue'
import Test from './components/Test.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path:'/',component:Home},
        {path:'/login',component:Login},
        {path:'/register', component:Register},
        {path:'/profile',component:Profile},
        {path:'/alert',component:Message},
        {path:'/Upload',component:Upload},
        {path:'/SideBar',component:SideBar},
        {path:'/ManageUser',component:ManageUser},
        {path:'/Test',component:Test}
        

    ]

})