import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) //让vue使用vue-router插件


let router = new VueRouter({
  mode:"hash",
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("@/views/Home")},
    {path:"/list",component:()=>import("@/views/List"),children:[
      {path:"",redirect:"guonei"},
      //注意：二级路由path属性最前面不加 /  
      {path:"guonei",name:"gn",component:()=>import("@/views/Guonei")},
      {path:"guoji",name:"gj",component:()=>import("@/views/Guoji")},
    ]},
    {path:"/mine",component:()=>import("@/views/Mine"),beforeEnter(to,from,next){
      console.log("进入到mine组件了...")
      next()
    }},
    {path:"/detail/:id",component:()=>import("@/views/Detail")}
  ]
})

//全局路由守卫(beforeEach:全局的前置路由)
//to: Route: 即将要进入的目标 路由对象
//from: Route: 当前导航正要离开的路由
/* router.beforeEach((to,from,next)=>{
  console.log("全局前置路由守卫...")
  if(from.path==="/home"){
    alert("从首页离开了哦...")
  }
  // 一定要调用该方法来 resolve 这个钩子
  next()
}) */

//全局后置路由
// router.afterEach((to,from)=>{
//   if(to.path==="/mine"){
//     alert("进入到mine了！")
//   }
// })
export default router