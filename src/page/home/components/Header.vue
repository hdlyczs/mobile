<template>
	<div class="search">
		<div class="logo"></div>
		<div class="search-icon">
			<div class="iconfont icon-size">&#xe62d;</div>
		</div>
		<input type="search" class="search-input" placeholder="商标名/注册号/关键词" v-model="keywords" v-on:keyup.enter="search">
	</div>
</template>
<script>
export default {
	name:'HomeHeader',
	data(){
		return{
			keywords:''
		}
	},
	methods:{
		search(){
			this.$router.push({
				path:'/list',
				query:{
					keywords:this.keywords
				}
			})
		}
	}
}
</script>
<style>
	.search{position: fixed;z-index: 999; width: 100vw;height: 11.3vw;display: flex;align-items: center;font-size: 0vw; background: red;}
	.logo{float: left; margin-left: 3vw;width: 20.4vw;height: 100%; background: url(~@/assets/images/logo.png) no-repeat center/contain;}
	.search-icon{float: left; margin-left: 3vw;width: 7vw;height: 7vw;display: flex;justify-content:flex-end; align-items: center;border-top-left-radius: 1vw;border-bottom-left-radius: 1vw;background: #fff;}
	.icon-size{text-align: center;font-size: 3vw;color: red;margin-right: 2px;}
	.search-input{float: left;padding-left: 1vw; width: 61vw; height: 7vw; outline: none;border: none;-webkit-appearance:none;border-radius:0; border-top-right-radius: 1vw;border-bottom-right-radius: 1vw;font-size: .7rem;}
</style>