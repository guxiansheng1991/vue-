<template>
  <div>
    <h1>Demo1</h1>
    <component-demo1 :name="name" v-on:num="getNum"></component-demo1>

    <!-- 因为漏掉了router-view来加载路由子组件,造成路由组价无法显示 -->
    <router-view></router-view>

    {{ pwd }}
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ComponentDemo1 from './componentDemo1'
export default {
  data () {
    return {
      name: 123
    }
  },
  computed: {
    ...mapGetters('home', ['pwd'])
  },
  components: {
    ComponentDemo1
  },
  mounted () {
    console.log('pwd', this.pwd);
  },
  methods: {
    getNum (num) {
       console.log('num', num);
    }
  }
}
</script>

<style scoped>
</style>
