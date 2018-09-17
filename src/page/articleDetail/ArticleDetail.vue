<template>
	<div>
		<div class="list-header">
			<top></top>
		</div>
		<div class="detail-title">{{this.article.title}}</div>
		<div class="details-author">
			<span>编辑：{{this.article.author}}</span>
			<span v-if="this.article.createTime">{{this.article.createTime.substring(0,10)}}</span>
			<span>来源：{{this.article.source}}</span>
		</div>
		<div class="details-con" v-html="this.article.content"></div>
		<div class="product-title">商标信息</div>
		<div class="list-wrap">
			<div class="article-list">
				<ul>
					<template v-if="this.lastArticle">
						<li @click="toDetail()">
							<a href="javascript:void(0)">
								<img :src="this.lastArticle.titleImg" alt="">
								<div class="list-right">
									<div class="article-title">{{this.lastArticle.title}}</div>
									<div class="article-author">
										<span>编辑：{{this.lastArticle.author}}</span>
										<span v-if="this.lastArticle.createTime">{{this.lastArticle.createTime.substring(0,10)}}</span>
									</div>
								</div>
							</a>
						</li>
					</template>
					<template v-if="this.nextArticle">
						<li @click="toDetail()">
							<a href="javascript:void(0)">
								<img :src="this.nextArticle.titleImg" alt="">
								<div class="list-right">
									<div class="article-title">{{this.nextArticle.title}}</div>
									<div class="article-author">
										<span>编辑：{{this.nextArticle.author}}</span>
										<span v-if="this.nextArticle.createTime">{{this.nextArticle.createTime.substring(0,10)}}</span>
									</div>
								</div>
							</a>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import Top from '@/page/common/Top.vue'
import axios from 'axios'
export default{
	components:{
		Top,
	},
	data(){
		return{
			id:this.$route.params.id,//通过路由获取文章id
			article:{},
			lastArticle:{},
			nextArticle:{}			
		}
	},
	methods:{
		toDetail(){
			this.id = this.lastArticle.id;
		}
	},
	created(){
		var This = this;
		var id = this.id
		var qs = require('qs')
		axios.post('/api/news/mobile/details/',qs.stringify({'id':id,'pageNum':1,'pageSize':3})).then(function(res){
			var data = res.data;
			if(data.restCode == 200){
				console.log(data)
				This.article = data.data.article;
				This.lastArticle = data.data.lastArticle;
				This.nextArticle = data.data.nextArticle;
			}
		})
	},
	updated(){
		window.scroll(0, 0);
	},
	watch:{
		id(){
			this.$layer.loading('加载中...')
			var This = this;
			var id = this.id
			var qs = require('qs')
			axios.post('/api/news/mobile/details/',qs.stringify({'id':id,'pageNum':1,'pageSize':3})).then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.$layer.close()
					console.log(data)
					This.article = data.data.article;
					This.lastArticle = data.data.lastArticle;
					This.nextArticle = data.data.nextArticle;
				}
			})
		}
	}
}
</script>
<style>
	.list-header{position: fixed;}
	.detail-title{padding-top: 11.7vw;line-height: 10vw;color: black;text-align: center;font-size: 4vw;}
	.details-author{margin: 0 auto; width: 90vw;display: flex;justify-content: space-between;}
	.details-author{font-size: .7rem;color: #ACACAC;}
	.details-con{box-sizing: border-box; width: 100vw;padding: 2vw 5vw;font-size: .7rem;line-height: 6vw;}
	.details-con p{text-indent: 2em;}
	.details-con img{display: block; width: 100%;}
	.product-title{box-sizing: border-box; margin-top: 5vw;padding-left: 2vw;  width: 100vw;line-height:8vw;font-size: 5vw;color: black;letter-spacing: 1px;}
	.article-list ul li{box-sizing: border-box; width: 100vw;height: 26.6vw; padding: 4vw 3.2vw;}
	.article-list ul li a{display: block; width: 100%;height: 100%;display: flex;}
	.article-list ul li:nth-of-type(2n){background: #EFEFEF;}
	.article-list ul li img{width: 26.6vw;height: 100%;background: #BC6666;}
	.article-list ul li .list-right{box-sizing:border-box; width: 66.6vw;font-size: .7rem;padding-left: 3vw;}
	.article-list ul li .list-right .article-title{line-height: 5vw; height: 10vw;overflow: hidden;color: black;}
	.article-list ul li .list-right .article-author{margin-top: 4.8vw;color: #ACACAC;display: flex;justify-content: space-between;}
	@media screen and (max-width: 320px) {
		.article-list ul li .list-right .article-author{margin-top: 4vw;}
	}
</style>