<template>
	<div>
		<div class="list-header">
			<top></top>
			<div class="list-nav">
				<ul>
					<li v-for="(item,index) in articleNav" :class="{active:index==num}" @click="nav(index)">{{item}}</li>
				</ul>
			</div>
		</div>
		<div class="list-wrap">
			<div class="article-list wrapper" ref="wrapper">
				<ul>
					<li v-for="(item,index) in list" :key="item.id">
						<router-link :to="{path:'articleDetail/'+item.id}">
							<img :src="item.titleImg" alt="">
							<div class="list-right">
								<div class="article-title">{{item.title}}</div>
								<div class="article-author">
									<span>编辑：{{item.author}}</span>
									<span>{{item.createTime.substring(0,10)}}</span>
								</div>
							</div>
						</router-link>
					</li>
					<div class="load" v-show="loading">加载中...</div>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import Top from '@/page/common/Top.vue'
import BSscroll from 'better-scroll'
import axios from 'axios'
export default{
	components:{
		Top
	},
	data(){
		return{
			startY:0,
			articleNav:['新闻资讯','商标知识','转让指南','热门专题','成功案例','求标动态'],
			num:0,
			classifyID:1,
			i:1,
			loading:false,//loading
			list:[]
		}
	},
	methods:{
		nav(index){
			this.num = index;
			this.classifyID = index+1;
		},
		loadData(){
			var This = this;
			var i = this.i
			var classifyID = this.classifyID;
			var qs = require('qs')
			axios.post('/api/news/search/',qs.stringify({'classifyID':classifyID,'pageNum':i,'pageSize':10})).then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					console.log(data)
					var length = data.data.pageList.rows.length;
					if(length==0){
						This.$layer.toast({
							className:'icon-warn',
							content:'已经没有更多了',
							time:2000
						})
						This.loading = false;
					}
					This.list = This.list.concat(data.data.pageList.rows);
					This.$nextTick(() => {
						if(!This.scroll){
							This.scroll = new BSscroll(This.$refs.wrapper,{
								click: true,
								pullUpLoad:{
									threshold: -20
								}
							})
							This.scroll.on('pullingUp',() => {
								This.loadData()
								This.scroll.finishPullUp();
								This.loading = true;
							})
							This.scroll.on('scroll',(pos) => {
								This.startY = -Math.abs(Math.round(pos.y))
							})
						}else{
							This.scroll.refresh()
						}
					})
				}
				This.i=i+1;//页数+1
			})
		}
	},
	created(){
		this.loadData();
	},
	watch:{
		classifyID:{
			handler(){
				this.i=1;//分页重置为1
				this.list = []//list重置为空
				this.loadData();
			}
		}
	},
	activated(){
		this.$nextTick(() => {
			if(this.scroll){
				this.scroll.scrollTo(0,this.startY)
			}
		})
	},
	beforeRouteEnter (to, from, next){
		next(vm => {
		    if (vm.scroll) {
		      vm.scroll.refresh()
		    }
		})
	},
}
</script>
<style scoped>
	.list-header{position: fixed;z-index: 9999;}
	.list-nav{box-sizing: border-box;width: 100vw;height: 12vw;background: #EFEFEF; display: flex;align-items: center;}
	.list-nav ul{width: 100%;height: 8vw;display: flex;justify-content: space-around;}
	.list-nav ul li{width: 15vw;line-height: 8vw;font-size: .7rem;}
	.list-nav ul li.active{color: #E50011;border-bottom: 1px solid #E50011;}
	.list-wrap{padding-top: 23.7vw;}
	.article-list{height: calc(100vh - 23.7vw);}
	.article-list ul{}
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
	.article-list ul .load{width: 100%;height: 6vw;line-height: 6vw;text-align: center;font-size: .7rem;color: #ACACAC;}
</style>