<template>
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
