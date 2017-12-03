<template>
	<div>
		<h3 @click="tiao">我是组件四</h3>
		{{msage}}
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msage:"我是组件四的下面"
			}
		},
		methods:{
			tiao(){
				this.$router.push({path:'two'})
			}
		}
	}
</script>
<style scoped>
	h3{
		color:red;
	}
</style>