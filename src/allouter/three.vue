<template>
	<div>
		<h3>我是组件三</h3>
		{{msag}}
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msag:"1234567"
			}
		}
	}
</script>
<style scoped>
	h3{
		font-size: 40px;
		color: yellow;
	}
</style>