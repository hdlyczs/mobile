<template>
	<div>
		<home-header></home-header>
		<home-banner :banner="banner"></home-banner>
		<home-nav></home-nav>
		<home-quest></home-quest>
		<home-tradesell :classifyList="classify"></home-tradesell>
		<home-tradespecial :specialList="special" :specialClassify="specialClassify"></home-tradespecial>
		<home-traderegister></home-traderegister>
		<home-copyright></home-copyright>
		<home-news :newsTitleList="newsTitle"></home-news>
		<home-bottom></home-bottom>
	</div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeBanner from './components/Banner.vue'
import HomeNav from './components/Nav.vue'
import HomeQuest from './components/Quest.vue'
import HomeTradesell from './components/Tradesell.vue'
import HomeTradespecial from './components/Tradespecial.vue'
import HomeTraderegister from './components/Traderegister.vue'
import HomeCopyright from './components/Copyright.vue'
import HomeNews from './components/News.vue'
import HomeBottom from './components/Bottom.vue'
import axios from 'axios'
export default {
	name:'Home',
	components:{
		HomeHeader:HomeHeader,
		HomeBanner:HomeBanner,
		HomeNav:HomeNav,
		HomeQuest:HomeQuest,
		HomeTradesell:HomeTradesell,
		HomeTradespecial:HomeTradespecial,
		HomeTraderegister:HomeTraderegister,
		HomeCopyright:HomeCopyright,
		HomeNews:HomeNews,
		HomeBottom:HomeBottom,
	},
	data(){
		return{
			banner:[],
			classify:[],
			special:[],
			specialClassify:[],
			newsTitle:[]
		}
	},
	methods:{
		//banner
		getBanner(){
			const This = this;
			axios.get('/api/banner').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.banner = data.data;
				}
				console.log(data)
			})
		},
		// 商标买卖
		getClassifyInfo(){
			const This = this;
			axios.get('/api/tmcls/list').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.classify = data.data.rows;
				}
				console.log(data)
			})
		},
		//特价商标
		getSpecialInfo(){
			var This = this;
			axios.get('/api/bargain/first/').then(function(res){
				var data = res.data
				if(data.restCode == 200){
					This.special = data.data.tmList.rows;
					This.specialClassify = data.data.classifyList;
				}
				console.log(data)
			})
		},
		//新闻资讯
		getNewsInfo(){
			var This = this;
			axios.post('/api/news/shouye').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.newsTitle = data.data.newsArticleClassifyList;
					console.log(data);
				}
			})
		}
		// success(res){
		// 	var data = res.data
		// 	if(data.restCode == 200){
		// 		this.special = data.data.tmList.rows;
		// 	}
		// 	console.log(data)
		// }
	},
	mounted(){
		this.getClassifyInfo(),
		this.getSpecialInfo(),
		this.getNewsInfo(),
		this.getBanner()
	}
}
</script>
<style>
	
</style>