<template>
	<div class="nav-wrap">
		<ul>
			<li @click="toList">
				<img src="~@/assets/images/sbmm.png" alt="">
				<span>商标买卖</span>
			</li>
			<li @click="toList">
				<img src="~@/assets/images/tjsb.png" alt="">
				<span>特价商标</span>
			</li>
			<li @click="toRegister">
				<img src="~@/assets/images/sbzc.png" alt="">
				<span>商标注册</span>
			</li>
			<li @click="toCopy">
				<img src="~@/assets/images/bqdj.png" alt="">
				<span>版权登记</span>
			</li>
			<li @click="toPatent">
				<img src="~@/assets/images/zlsq.png" alt="">
				<span>专利申请</span>
			</li>
		</ul>
		<div class="hot-news">
			<p @click="toArticle(news[0].id)">
				<span><span class="red">求标</span>热点：</span>
				<span v-if="news[0]">【快报】{{news[0].title}}</span>
			</p>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name:'HomeNav',
	data(){
		return{
			news:[],
		}
	},
	methods:{
		toList(){
			this.$router.push({
				path:'/list'
			})
		},
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
		},
		toArticle(id){
			this.$router.push({
				path:'/articleDetail/'+id
			})
		}
	},
	mounted(){
		var This = this;
		var qs = require('qs')
		axios.post('/api/news/shouye',qs.stringify({'classifyID':6})).then(function(res){
			var data = res.data;
			if(data.restCode == 200){
				This.news = data.data.pageList.rows;
			}
		})
	}
}
</script>
<style>
	.nav-wrap{width: 100vw;height: 32.1vw;margin-top: 3.2vw;}
	.nav-wrap ul{width: 100%;display: flex;justify-content:space-around;}
	.nav-wrap ul li{width: 15vw;}
	.nav-wrap ul li img{display: block;margin-left: 1.65vw; width: 11.7vw;height: 11.7vw;}
	.nav-wrap ul li span{width: 100%; margin-top: 2vw; display: block;font-size: .7rem;transform: scale(0.9); text-align: center; color: #555555;}
	.hot-news{margin:0 auto;margin-top: 2.6vw; width: 90vw;height: 8vw;border: 1px solid #EFEFEF;border-radius: 3vw;padding-left: 2vw; display: flex;align-items:center;}
	.hot-news p{font-size: .7rem;color: #555555;line-height: 16px; text-overflow: ellipsis;white-space: nowrap;overflow:hidden;}
	.hot-news p .red{color: red;}
</style>