import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入自定义组件
import Home from "./components/tabbar/Home.vue"
import product from "./components/tabbar/product.vue"
import login from "./components/tabbar/login.vue"
import prolist from "./components/tabbar/prolist.vue"
import more from "./components/tabbar/more.vue"

Vue.use(Router)
export default new Router({
  //2:为组件配置访问路径
  routes: [
    {path:"/more",component:more},
    {path:"/prolist",component:prolist},
    {path:"/login",component:login},
    {path:"/product",component:product},
    {path:"/Home",component:Home},
    {path:'/',redirect:"/Home"},
  ]
})
