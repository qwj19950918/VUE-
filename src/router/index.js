import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect :'page1',
      component:resolve => require(['@/components/Page1'],resolve)
    },
    {
      path: '/page1',
      name: 'Page1',
      component:resolve => require(['@/components/Page1'],resolve)
    },
    {
      path:'/page2',
      name:'Page2',
      component:resolve => require(['@/components/Page2'],resolve)
    },
    {
      path: '/page3',
      name: 'Page3',
      component:resolve => require(['@/components/Page3'],resolve)
    },
    {
      path:'/page4',
      name:'Page4',
      component:resolve => require(['@/components/Page4'],resolve)
    }
  ]
})
