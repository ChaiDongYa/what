import  one from './one.vue'
export default {
  routes:[
    {path:"/one",component:one},
    {path:"/two",component:resolve=>require(['./two.vue'],resolve)},//路由懒加载
    {path:"*",redirect:"/one"}
  ]
}