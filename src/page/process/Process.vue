<template>
	<div>
		<div class="process-header">
			<top></top>
		</div>
		<div class="process-nav">
			<ul>
				<li>商标买卖</li>
				<li @click="toRegister">商标注册</li>
				<li @click="toCopy">版权登记</li>
				<li @click="toPatent">专利申请</li>
			</ul>
		</div>
		<div>
			<div class="process-title">
				<span>商标购买流程</span>
				<span>签订协议后，15个工作日内完成公证即可使用商标</span>
			</div>
			<img src="@/assets/images/product-pro.jpg" alt="" class="product-pro">
		</div>
		<div>
			<div class="process-title">
				<span>商标注册流程</span>
				<span>全程约13个月</span>
			</div>
			<img src="@/assets/images/process1.jpg" alt="" class="product-pro">
		</div>
		<div>
			<div class="process-title">
				<span>版权登记流程</span>
			</div>
			<img src="@/assets/images/process2.jpg" alt="" class="product-pro">
		</div>
		<div>
			<div class="process-title">
				<span>专利申请流程</span>
			</div>
			<img src="@/assets/images/process3.jpg" alt="" class="product-pro">
		</div>
		<home-bottom></home-bottom>
	</div>
</template>
<script>
import HomeBottom from '@/page/home/components/Bottom.vue'
import Top from '@/page/common/Top.vue'
export default{
	name:'Copy',
	components:{
		HomeBottom,
		Top,
	},
	methods:{
		toRegister(){
			this.$router.push({
				path:'/register'
			})
		},
		toCopy(){
			this.$router.push({
				path:'/copy'
			})
		},
		toPatent(){
			this.$router.push({
				path:'/patent'
			})
		}
	}
}	
</script>
<style>
	.process-header{position: fixed;}
	.process-nav{width: 100vw;height: 14.3vw;padding-top: 11.7vw;display: flex;align-items: center;background: #EFEFEF;}
	.process-nav ul{width: 100%;height: 8vw;display: flex;justify-content: space-around;}
	.process-nav ul li{width: 25%;text-align: center;font-size: 4vw;}
	.process-nav ul li:nth-of-type(1){color: #E50011;}
	.process-title span{display: block;text-align: center;}
	.process-title span:nth-of-type(1){margin: 0 auto; width: 60%;border-bottom: 1px solid black;font-size: 5vw;line-height: 10vw;}
	.process-title span:nth-of-type(2){color: #ACACAC;font-size: .7rem;line-height: 8vw;}
	.product-pro{display: block;width: 100%;margin-top: 5vw;}
</style>