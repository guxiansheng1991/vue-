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
