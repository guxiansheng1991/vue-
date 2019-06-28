<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>{{ test }}</p>
    <button @click="clickMethod" :id="idText">点击</button>
    <hr>

    <!-- 条件 -->
    <label v-if="flag">显示1</label>
    <label v-else>显示2</label>
    <label v-show="flag">显示3</label>

    <!-- 循环 -->
    <br>
    <span v-for="(item, index) in arr" :key="index">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: 123,
      idText: 'demo',
      flag: false,
      arr: [1,2,3]
    }
  },
  methods:{
    clickMethod () {
      alert(123);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
