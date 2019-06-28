> github https://github.com/guxiansheng1991/vue-

> 项目下的hello-world是下面文档中的例子项目


# 一、web前端技术基础
## 1. 最基础的html, css, javascript
html, css, javascript关系
类似于人体:
html为骨架
css为血肉和外貌
javascript是人的行为


html搭建起整个页面的文档结构,css为文档结构设置样式,javascript做交互行为.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>demo</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
    }
    .box1 {
      font-size: 12px;
      color: red;
    }
    .box2 .p1 {
      font-size: 20px;
      color: blue;
    }
  </style>
</head>
<body>
  <div class="box box1">
    <h1>一念起天涯咫尺</h1>
    <h1>一念灭咫尺天涯</h1>
  </div>
  <div class="box box2">
    <button onclick="changeText(event)">点击修改dom元素</button>
    <p class="p1" id="p1"></p>
  </div>
</body>
<script>
  function changeText(e) {
    var p1 = document.getElementById('p1');
    p1.innerText = Math.random();
  }
</script>
</html>
```
## 2. 框架介绍
前端目前主要存在以下几个方向,每个方向存在着不同的框架
- web:

(1) Vue.js

(2) React.js

(3) Angular

- PWA:

PWA（Progressive Web Apps）,谷歌提出的一种基于浏览器的技术,使用web前端技术开发的,但是可以将应用添加到桌面,可以离线使用,可以有推送通知等更加类似于APP的功能.

- 小程序

微信小程序,QQ小程序,百度小程序等等

- 混合APP开发

(1) React Native(Facebook)

(2) Flutter(谷歌)

(3) Hbuilder(国内企业做的)

- 桌面应用开发

Electron

- 服务端开发

Node.js

> Any application that can be written in JavaScript, will eventually be written in JavaScript.

> 任何能够用 JavaScript 实现的应用，最终都必将用 JavaScript 实现。

## 3. node.js介绍
> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
官网: http://nodejs.cn

Node.js主要应用场景如下:
1. 做服务端开发
2. 制作前后端分离开发中web前端的开发工具,如webpack等
3. 做命令行工具
4. 开发桌面应用,如 Visual Studio Code

## 4. web前端开发环境
前后端分离开发:
1. Node.js提供开发工具<br>
(1)Node.js开发工具可以直接下载 http://nodejs.cn/download/, 目前使用v10.16.0 <br>
(2)可以使用NVM版本管理工具,可以下载多个版本,各个版本之间自由切换(https://www.jianshu.com/p/d0e0935b150a)
2. npm包依赖工具
npm会随着Node.js一起安装,所以不用单独安装,链接中有详细的使用教程(https://www.jianshu.com/p/dee4a84e5961).
3. webpack打包工具
可以经过打包,将各种web前端资源打包成一个个js文件,css文件,html文件,图片等
前后端分离项目一般运行步骤:
1. npm install      (安装项目所有的依赖包)
2. npm run dev    (本地运行开发环境代码,同时Node.js启动一个本地web服务器)
3. npm run build   (本地打包线上环境代码,可以部署)

> 以上打包命令都会被定义在项目根目录下的package.json中的scripts中,否则无法使用


# 二、Vue.js基础
## 1. Vue.js基础
### (1) 模板语法
   - 文本
   - v-bind(可以缩写为符号: ':' )
   - v-on(可以缩写为符号: '@')

> Demo1.vue中 data中定义的 text属性被绑定到h1标签的内容上了.  <br>
> srcText是一个图片链接,被绑定到img标签的src属性中   <br>
> v-on指令绑定了methods中的点击事件clickMethod   <br>
### (2) 条件
   - v-if
   - v-else
   - v-show
> Demo1.vue中根据data中show属性是true/false,显示或者隐藏标签<br>
通过toggle方法切换show的值,从而完成标签的显示和隐藏<br>
v-show只会隐藏元素(修改元素的display属性),但是不会从html文档中删除标签,只是切换显示或者隐藏,所以性能高,适合频繁切换的场景<br>
v-if false时会从html文档中删除标签, 所以性能消耗大,不适合频繁切换的场景

### (3) 循环
   - v-for
> Demo1.vue中 data里面的arr数组,通过v-for指令完成循环

### (4) 事件处理
   - 原生实践绑定

> Demo1.vue中 通过v-on绑定html标签原生的相关事件,比如click,mouseover等等, 绑定的方法声明在methods中.

### (5) 组件
- 组件新建
> component1.vue组件代码段是一个.vue文件,跟一个普通组件一样的.
- 组件使用
> Demo1.vue中, (1)引入component1.vue, (2)components中引用组件, (3)页面中使用小写使用组件,两个大写则小写后用短横杠分开
- 组件间传值
> 父组件向子组件传递数据, Demo1.vue中, text是传入子组件的属性,在子组件component1.vue中通过props接收. <br>

> 子组件向父组件传递数据, component1.vue组件代码段中通过emitMethod方法emit出去一个data1事件,并传值为 '嘿嘿嘿';  Demo1.vue中,在组件使用的地方接收 v-on:data1="accept",在accept的参数中就是接收到的 '嘿嘿嘿'.

Demo1.vue
```
<template>
// Demo1.vue
  <div>
    <h1>{{text}}</h1>
    <img class="image1" v-bind:src="srcText" alt="">
    <button v-on:click="clickMethod">点击</button>
    <!-- computed -->
    <hr>
    <button @click="changeRandowNumber">点击生成随机数</button>
    <p>randomNumber:{{randomNumber}}</p>
    <p>test1:{{test1}}</p>
    <!-- watch -->
    <hr>
    <button @click="changeWatchParam">点击生成watchParam</button>
    <!-- 条件 -->
    <hr>
    <button @click="toggle">切换隐藏和显示</button>
    <p v-if="show">显示{{show}}</p>
    <p v-else>隐藏{{show}}</p>
    <p v-show="show">v-show切换{{show}}</p>

    <!-- 循环 -->
    <hr>
    <div v-for="(item, index) in arr" :key="index">{{item}}</div>

    <!-- 组件 -->
    <component1 :text="component1Text" v-on:data1="accept"></component1>
    
    <!-- 子路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Component1 from './component1'

export default {
  data () {
    return {
      text: '驴妈妈',
      srcText: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561442417122&di=e6fa319459f0ea95645b2bde6d2591a3&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8d5494eef01f3a29f863534d9725bc315d607c8e.jpg',
      randomNumber: 0,
      watchParam: 0,
      show: false,
      arr: [1, 2, 3, 4, 5, 6],
      component1Text: 234
    }
  },
  components: {
    Component1
  },
  // 计算属性
  computed: {
    test1 () {
      let res = 0
      res = this.randomNumber * 1000
      return res
    }
  },
  //
  watch: {
    watchParam (newVal, oldVal) {
      console.log('newVal', newVal)
      console.log('oldVal', oldVal)
    }
  },
  // 组件内路由守卫
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('beforeRouteEnter');
    });
  },
  // 此处不能获取dom,尚未挂载dom
  created () {

  },
  // 此处自由使用
  mounted () {
    this.init();
    console.log('demo1 this.$route', this.$route);
  },
  methods: {
    clickMethod () {
      alert('点击事件')
    },
    init () {
      console.log('init method run')
    },
    changeRandowNumber () {
      this.randomNumber = Math.random()
    },
    changeWatchParam () {
      this.watchParam = Math.random()
    },
    toggle () {
      this.show = !this.show
    },
    accept (data1) {
      console.log('data1', data1)
    }
  }
}
</script>

<style scoped>
.image1 {
  width: 100px;
  height: 100px;
}
</style>
```
component1.vue
```
// component1.vue组件
<template>
  <div>
    <h1>{{text}}</h1>
    <button @click="emitMethod">子组件传递数据到父组件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    text: {
      type: Number,
      default: 1
    }
  },
  methods: {
    emitMethod () {
      this.$emit('data1', '嘿嘿嘿')
    }
  }
}
</script>

<style scoped>
</style>
```
## 2. vue-router
https://router.vuejs.org/zh/installation.html
### (1) 单页面开发
单页面开发依赖前端路由,分以下2种实现方式:
- 哈希模式(默认)
- history模式

### (2) 路由基本使用
- 路由和子路由

首先, Demo1.vue的template中,应该声明<router-view></router-view>用来匹配子路由<br>
青葱,router/index.js, /Demo1匹配Demo1组件; /Demo1/Demo1Child匹配到Demo1Child组件,此时Demo1Child会显示在Demo1.vue的router-view中

router/index.js
```
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
```
- 路由钩子

路由钩子存在以下三种:
> 1. 全局路由钩子
> 2. 组件内部路由钩子
> 3. 路由中的钩子 <br>

> Demo1.vue中beforeRouteEnter为组件内部路由守卫,即进入路由之前触发的钩子函数

- 路由传参

路由传参数一般采用以下两种(HelloWorld.vue中turn1和turn2方法分别对应2中不同的方式):
> 1. query,即查询字符串
> 2. params, 即路由参数


HelloWorld.vue
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="turn1">页面跳转query</button>
    <button @click="turn2">页面跳转params</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    turn1 () {
      // 可以到Demo1Child.vue的mounted中打印查看this.$route中接收到的参数
      this.$router.push({path: '/Demo1/Demo1Child', query: {param1: 123, param2: '哈哈哈'}});
    },
    turn2 () {
      // 可以到Demo2.vue的mounted中打印查看this.$route中接收到的参数
      this.$router.push({path: '/Demo2/123'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

```

## 3. vuex
https://vuex.vuejs.org/zh/

vuex是vue提供的状态管理工具.主要包含以下几项:<br>
(1) state (状态)<br>
(2) getters (暴露状态的访问)<br>
(3) mutations (提交同步修改state)<br>
(4) actions (异步行为)<br>
### 模块化使用方式
> 可以将一个项目的状态树,根据项目功能模块,分模块管理状态树,使得状态管理结构清晰,使用方便.
具体使用可以看项目代码.

vuex目录如下:

![](https://user-gold-cdn.xitu.io/2019/6/25/16b8e5219f2db026?w=213&h=350&f=png&s=12885)

(1) src/store/index.js将store下的modules模块和root模块合并管理并导出<br>
(2) src/main.js需要将src/store/index.js引入,并挂载到vue实例上
(3) Demo2.vue中使用如代码所示,mapGetters应写在computed下,并声明模块home,即可在页面使用isLogin了; mapMutations和mapActions则应该在methods中声明,使用如代码所示,即可在组件内部使用.

src/store/index.js
```
import Vue from 'vue';
import Vuex from 'vuex';
import root from './root';
import home from './modules/home';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    root,
    home
  }
});

export default store;
```
src/store/root.js
```
const state = {};
const getters = {};
const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
```
src/modules/home.js
```
import api from '../../api/index';

const state = {
  isLogin: false
};
const getters = {
  isLogin: state => state.isLogin
};
const mutations = {
  changeLoginState (state, data) {
    state.isLogin = data;
  }
};
const actions = {
  login (context, params) {
    // 可做异步请求
    // setTimeout(() => {
    //   // context.state.isLogin = true;
    //   context.commit('changeLoginState', true);
    // }, 2000);

    return new Promise((resolve, reject) => {
      api.ajaxGetMethod(params).then(res => {
        if (true) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
```
src/main.js
```
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```
src/views/demo2/Demo2.vue
```
<template>
  <div>
    <h1>Demo2</h1>
    <p>{{isLogin}}</p>
    <button @click="login()">登陆</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters('home', ['isLogin'])
  },
  methods: {
    ...mapMutations('home', ['changeLoginState']),
    ...mapActions('home', ['login']),
    // async, await异步调用
    async loginMethod () {
      try {
        let res = await this.login({});
        console.log('res', res);
      } catch (error) {
        console.error('error', error);
      }
    }
  }
}
</script>

<style scoped>
</style>
```

## 4. axios
https://www.kancloud.cn/yunye/axios/234845

(1) 建议将请求统一管理,避免项目内部散乱的写<br>
(2) 建议结合vuex使用,当然也可以不结合. src/store/modules/home.js中的actions
下的login方法就是结合vuex使用的,可以在得到异步请求结果后直接修改状态<br>
(3) 也可以将src/api/index.js引入任何组件,调用方法即可发送ajax请求<br>
(4) 使用async,await(彻底解决回调地狱问题). 首先src/store/modules/home.js中actions下的login方法返回new Primise; 其次在src/views/demo2/Demo2.vue中loginMethod方法前应写标致 async ,调用login前应写await;最后应使用try...catch捕获异常

src/api/index.js
```
import axios from 'axios';

export default {
  ajaxGetMethod: params => axios.get('/xx', {params: params}).then(res => res.data),
  ajaxPostMethod: body => axios.get('/yy', body).then(res => res.data)
}
```
src/store/modules/home.js
```
import api from '../../api/index';

const state = {
  isLogin: false
};
const getters = {
  isLogin: state => state.isLogin
};
const mutations = {
  changeLoginState (state, data) {
    state.isLogin = data;
  }
};
const actions = {
  login (context, params) {
    // 可做异步请求
    // setTimeout(() => {
    //   // context.state.isLogin = true;
    //   context.commit('changeLoginState', true);
    // }, 2000);

    return new Promise((resolve, reject) => {
      api.ajaxGetMethod(params).then(res => {
        if (true) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
```
src/views/demo2/Demo2.vue
```
async loginMethod () {
      try {
        let res = await this.login({});
        console.log('res', res);
      } catch (error) {
        console.error('error', error);
      }
}
```


## 5. vue-cli
2.x 版本: https://github.com/vuejs/vue-cli/tree/v2 <br>
3.x 版本: https://cli.vuejs.org/zh/

2.x 新建项目:
vue init template-name project-name

3.x 新建项目:
vue create xxx

