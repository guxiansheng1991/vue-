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
  mounted () {
    console.log('demo2 this.$route', this.$route);
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
