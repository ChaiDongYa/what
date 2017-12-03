<template>
  <div>
    <h3>我是第二个组件</h3>
    <threes></threes>
  </div>
</template>
<style scoped>
	h3{
		color:red;
	}
</style>
<script>
	import three from './three.vue'
	export default{
		data(){
			return{
				mssg:"1234"
			}
		},
		components:{
			threes:three
		}
	}
</script>