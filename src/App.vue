<template>
  <div>
    {{scr}}
    <router-link to="one">1</router-link>
    <router-link to="two">2</router-link>
    <router-view></router-view>
    <input type="button" @click="aa" value="++">
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:mapActions([
      "aa"
    ]),
  computed:mapGetters([
      "scr"
    ])
}
</script>

<style scoped>
    a{
      font-size: 30px;
      color: red;
      text-decoration: none;
    }
    .router-link-active{
      font-size: 50px;
      color: yellow;
    }
</style>
