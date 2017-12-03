<template>
  <div>
    这是第一个路由{{cd}}
    <fours></fours>
    <input type="button" @click="jiajia" value='++'>
    <input type="button" @click="jianjian" value='--'>
  </div>
</template>
<style></style>
<script>
	import {mapGetters,mapActions} from 'vuex'
	import four from './four.vue'
	export default{
		  data () {
		    return {
		      msg: 'Welcome to Your Vue.js App'
		    }
		  },
		  components:{
		  	fours:four
		  },
		  methods:mapActions([
		      "jiajia","jianjian"
		    ]),
		  computed:mapGetters([
		      "cd"
		    ])
	}
</script>