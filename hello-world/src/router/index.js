import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/views/demo1/Demo1'
import Demo1Child from '@/views/demo1/Demo1Child'
import Demo2 from '@/views/demo2/Demo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Demo1',
      name: 'Demo1',
      component: Demo1,
      children: [
        {
          path: 'Demo1Child',
          name: 'Demo1Child',
          component: Demo1Child
        }
      ]
    },
    {
      path: '/Demo2/:id',
      name: 'Demo2',
      component: Demo2
    }
  ]
})
