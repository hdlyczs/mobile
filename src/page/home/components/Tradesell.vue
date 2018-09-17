<template>
	<div class="sell-wrap">
		<div class="home-title">
			<img src="~@/assets/images/sbmm-t.png" alt="">
			<span class="title">商标买卖</span>
			<span class="more" @click="more"><a href="javascript:;">更多45类商标></a></span>
		</div>
		<ul class="list">
			<!-- <li class="sell-li" v-for="(item,index) in classifyList" :key="item.id" v-if="index==24||index==2||index==8||index==10">
				<a href="">
					<span class="classify">{{item.name}}</span>
					<span class="code">第{{item.code}}类</span>
					<img :src="item.imgUrl" alt="">
				</a>
			</li> -->
			<!-- 复制死代码 -->
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'25' }}">
					<span class="classify">服装鞋帽</span>
					<span class="code">第25类</span>
					<img src="~@/assets/images/cl1.png" alt="">
				</router-link>
			</li>
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'03' }}">
					<span class="classify">化妆用品</span>
					<span class="code">第03类</span>
					<img src="~@/assets/images/cl2.png" alt="">
				</router-link>
			</li>
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'09' }}">
					<span class="classify">电子产品</span>
					<span class="code">第09类</span>
					<img src="~@/assets/images/cl3.png" alt="">
				</router-link>
			</li>
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'11' }}">
					<span class="classify">家用电器</span>
					<span class="code">第11类</span>
					<img src="~@/assets/images/cl4.png" alt="">
				</router-link>
			</li>
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'43' }}">
					<span class="classify">餐饮住宿</span>
					<span class="code">第43类</span>
					<img src="~@/assets/images/cl5.png" alt="">
				</router-link>
			</li>
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'30' }}">
					<span class="classify">茶叶米面</span>
					<span class="code">第30类</span>
					<img src="~@/assets/images/cl6.png" alt="">
				</router-link>
			</li>
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'29' }}">
					<span class="classify">鱼肉果干</span>
					<span class="code">第29类</span>
					<img src="~@/assets/images/cl7.png" alt="">
				</router-link>
			</li>
			<li class="sell-li">
				<router-link :to="{path:'/list',query:{ classify:'18' }}">
					<span class="classify">皮革皮具</span>
					<span class="code">第18类</span>
					<img src="~@/assets/images/cl8.png" alt="">
				</router-link>
			</li>
			<!-- 复制死代码结束 -->
		</ul>
	</div>
</template>
<script>
export default {
	name:'HomeTradesell',
	props:{
		classifyList:Array
	},
	data(){
		return{
			
		}
	},
	methods:{
		more(){
			this.$router.push({
				path:'/classify'
			})
		}
	}
}
</script>
<style>
	.home-title{margin:0 auto;margin-top: 2vw; width: 90vw;height: 6vw;display: flex;justify-content:flex-start;align-items:center;}
	.home-title img{float: left; display: inline-block;width: 3.6vw;height: 4vw;}
	.home-title .title{margin-left: 1vw; font-size: .9rem;line-height: 4vw; color:black;}
	.home-title .more{flex: 1;text-align: right;}
	.home-title .more a{font-size: .5rem;color: #A0A0A0;}
	@media screen and (max-width: 320px) {
		.home-title .more a{margin-left: 40vw;}
	}
	.list{margin:0 auto; width: 90vw;display: flex;justify-content: space-around; flex-wrap: wrap;}
	.list:after{content: "";flex: auto;}
	.list .sell-li{width:25%;margin-top: 2vw; display: flex;justify-content: center;}
	.list .sell-li a{display: block;width: 15.2vw; height: 100%;}
	.list .sell-li .classify{display: block;width: 100%; color: black; font-size: .7rem;text-align: center;}
	.list .sell-li .code{display: block;width: 100%; color: #A0A0A0; font-size: .7rem;text-align: center;}
	.list .sell-li img{display: block;width: 100%;}
</style>