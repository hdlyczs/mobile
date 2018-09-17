<template>
	<div class="news-wrap">
		<div class="home-title">
			<span class="title">新闻资讯</span>
			<span class="more"><router-link :to="{path:'articleList'}">查看更多详情></router-link></span>
		</div>
		<div class="news-mod1">
			<ul class="news-nav">
				<li v-bind:class='{active:index==num1}' 
					v-on:click='tab1(index)'
					v-for="(item,index) in newsTitleList" 
					v-if="index<3">
					{{item.descp}}</li>
			</ul>
			<div class="news-content">
				<ul v-show="num1==0">
					<li v-for="(item,index) in mod1" v-if="index<4">
						<router-link :to="{path:'articleDetail/'+item.id}">
							<span class="ic"></span>
							<span class="news-title">{{item.title}}</span>
							<span class="space"></span>
							<span class="news-time">[{{item.updateTime.substr(5,6)}}]</span>
						</router-link>
					</li>
					<!-- 复制死代码 -->
					<!-- <li>
						<a href="">
							<span class="ic"></span>
							<span class="news-title">我们乐于且免费回答知识产权的任何问题</span>
							<span class="space"></span>
							<span class="news-time">[05-19]</span>
						</a>
					</li> -->
					<!-- 复制死代码结束 -->
				</ul>
				<ul v-show="num1==1">
					<li v-for="(item,index) in mod2" v-if="index<4">
						<router-link :to="{path:'articleDetail/'+item.id}">
							<span class="ic"></span>
							<span class="news-title">{{item.title}}</span>
							<span class="space"></span>
							<span class="news-time">[{{item.updateTime.substr(5,6)}}]</span>
						</router-link>
					</li>
				</ul>
				<ul v-show="num1==2">
					<li v-for="(item,index) in mod3" v-if="index<4">
						<router-link :to="{path:'articleDetail/'+item.id}">
							<span class="ic"></span>
							<span class="news-title">{{item.title}}</span>
							<span class="space"></span>
							<span class="news-time">[{{item.updateTime.substr(5,6)}}]</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="news-mod2">
			<ul class="news-nav">
				<li v-bind:class='{active:index==num2}'
					v-on:click='tab2(index)' 
					v-for="(item,index) in lastTitle" >
					{{item.descp}}</li>
			</ul>
			<div class="news-content">
				<ul v-show="num2==0">
					<li v-for="(item,index) in mod4" v-if="index<4">
						<router-link :to="{path:'articleDetail/'+item.id}">
							<span class="ic"></span>
							<span class="news-title">{{item.title}}</span>
							<span class="space"></span>
							<span class="news-time">[{{item.updateTime.substr(5,6)}}]</span>
						</router-link>
					</li>
				</ul>
				<ul v-show="num2==1">
					<li v-for="(item,index) in mod5" v-if="index<4">
						<router-link :to="{path:'articleDetail/'+item.id}">
							<span class="ic"></span>
							<span class="news-title">{{item.title}}</span>
							<span class="space"></span>
							<span class="news-time">[{{item.updateTime.substr(5,6)}}]</span>
						</router-link>
					</li>
				</ul>
				<ul v-show="num2==2">
					<li v-for="(item,index) in mod6" v-if="index<4">
						<router-link :to="{path:'articleDetail/'+item.id}">
							<span class="ic"></span>
							<span class="news-title">{{item.title}}</span>
							<span class="space"></span>
							<span class="news-time">[{{item.updateTime.substr(5,6)}}]</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name:'HomeNews',
	data(){
		return{
			num1:0,
			num2:0,
			mod1:[],
			mod2:[],
			mod3:[],
			mod4:[],
			mod5:[],
			mod6:[]
		}
	},
	props:{
		newsTitleList:Array
	},
	computed:{
		lastTitle:function(){
			return this.newsTitleList.filter((element,index,array)=> index>=array.length-3);
		}
	},
	methods:{
		tab1:function(index){
			this.num1 = index;
		},
		tab2:function(index){
			this.num2 = index;
		},
		getmod1:function(){
			var This = this;
			axios.post('/api/news/shouye?classifyID=1').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.mod1 = data.data.pageList.rows;
				}
			})
		},
		getmod2:function(){
			var This = this;
			axios.post('/api/news/shouye?classifyID=2').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.mod2 = data.data.pageList.rows;
				}
			})
		},
		getmod3:function(){
			var This = this;
			axios.post('/api/news/shouye?classifyID=3').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.mod3 = data.data.pageList.rows;
				}
			})
		},
		getmod4:function(){
			var This = this;
			axios.post('/api/news/shouye?classifyID=4').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.mod4 = data.data.pageList.rows;
				}
			})
		},
		getmod5:function(){
			var This = this;
			axios.post('/api/news/shouye?classifyID=5').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.mod5 = data.data.pageList.rows;
				}
			})
		},
		getmod6:function(){
			var This = this;
			axios.post('/api/news/shouye?classifyID=6').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.mod6 = data.data.pageList.rows;
				}
			})
		}
	},
	mounted(){
		this.getmod1(),
		this.getmod2(),
		this.getmod3(),
		this.getmod4(),
		this.getmod5(),
		this.getmod6()
	}
}
</script>
<style>
	.news-nav{margin: 2vw auto; width:80.8vw;display: flex;justify-content: space-between;}
	.news-nav li{float: left;font-size: .7rem;}
	.news-nav li.active{color: #E50011;border-bottom: 1px solid #E50011;}
	.news-content{margin:0 auto; width: 90vw;}
	.news-content ul{width: 100%;}
	.news-content ul li{width: 100%;}
	.news-content ul li a{display: block;width: 100%;padding: 2vw 0;border-bottom: 1px solid #EFEFEF; display: flex;align-items: center;}
	.news-content ul li a span{display: inline-block;}
	.news-content ul li a .ic{width: 0.5vw;height: 0.5vw;border:0.5vw solid #E50011;border-radius: 50%;}
	.news-content ul li a .news-title{width: 62vw;margin-left: 2vw; font-size: .7rem;text-overflow: ellipsis;white-space: nowrap;overflow:hidden;color: #555555;}
	.news-content ul li a .news-time{font-size: .7rem;color: #555555;}
	.news-content ul li a .space{flex: 1;}
</style>
