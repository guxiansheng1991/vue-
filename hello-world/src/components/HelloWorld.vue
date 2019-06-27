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
      this.$router.push({path: '/Demo1/Demo1Child', query: {param1: 123, param2: '哈哈哈'}});
    },
    turn2 () {
      this.$router.push({path: '/Demo2/123'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
