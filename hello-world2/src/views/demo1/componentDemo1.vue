<template>
  <div>
    <h1>component1</h1>
    <p>子组件name: {{name}}</p>
    <button @click="emitMethod">emit事件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    name: {
      type: Number,   // String, Boolean, Array, Object
      default: 0
    }
  },
  methods: {
    emitMethod () {
      this.$emit('num', 111);
    }
  }
}
</script>

<style scoped>
</style>
