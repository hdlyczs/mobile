<template>
	<div>
		<div class="classify-header">
			<top></top>
			<fast></fast>
		</div>
		<div class="main">
			<div class="classify wrapper" ref="wrapper">
				<ul>
					<li v-for="(item,index) in classifyList" @click="classifyListClick(item.code,index)" :class="{active:index==num}">
						<img :src="item.imgUrl" alt="">
						<span>{{item.code}}类 {{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="smallCode">
				<div class="hot">
					<span></span>
					<span>热门产品</span>
					<span></span>
				</div>
				<div class="con">
					<ul>
						<li v-for="(item,index) in smallCode" @click="goSearch(item.pcode,item.code,index)">
							{{item.code}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Fast from '@/page/common/Fast.vue'
import Top from '@/page/common/Top.vue'
import HomeBottom from '@/page/home/components/Bottom.vue'
import BSscroll from 'better-scroll'
import axios from 'axios'
export default{
	name:'Classify',
	data(){
		return{
			num:0,
			index:0,
			classifyList:[],
			smallCode:[]
		}
	},
	components:{
		HomeBottom,
		Top,
		Fast,
	},
	methods:{
		goSearch(code,smallCode,smallIndex){
			this.$router.push({
				path:'/list',
				query:{
					index:this.index,
					smallIndex:smallIndex,
					classify:code,
					searchCode:smallCode
				}
			})
		},
		//大类点击
		classifyListClick(code,index){
			this.num = index;
			this.index = index;
			var This = this;
			axios.get('/api/tmcls/list/'+code).then((res) => {
				var data = res.data;
				if(data.restCode == 200){
					This.smallCode = data.data.rows;
					// console.log(This.smallCode)
				}
			});
		}
	},
	created(){
		var This = this;
		//取到45大类
		axios.get('/api/tmcls/list').then(function(res){
			var data = res.data;
			if(data.restCode == 200){
				This.classifyList = data.data.rows;
				console.log(data)
			}
		})
		//让01大类的小类显示
		axios.get('/api/tmcls/list/'+'01').then((res) => {
			var data = res.data;
			if(data.restCode == 200){
				This.smallCode = data.data.rows;
			}
		});
	},
	mounted(){
		var This = this;
		this.$nextTick(() => {
			if(!This.BS){
				This.scroll = new BSscroll(This.$refs.wrapper,{
					click: true
				})
			}
		})
	}
}
</script>
<style scoped>
	.classify-header{position: fixed;z-index: 999;}
	.main{width: 100vw;padding-top: 28.7vw;}
	.main .classify{box-sizing: border-box; float: left; width: 33.33vw;height: calc(100vh - 28.7vw);}
	.classify ul{}
	.classify ul li{box-sizing: border-box;width: 100%;height: 10vw;font-size: 3.5vw; border:1px solid #EFEFEF;border-bottom: none;display: flex;align-items: center;}
	.classify ul li.active{color: #E50011;}
	.classify ul li:first-child{border-top: none;}
	.classify ul li:last-child{border-bottom: 1px solid #EFEFEF;}
	.main .classify ul li img{display: block;margin: 0 2.5vw; width: 3.2vw;height: 3.2vw;}
	.main .smallCode{box-sizing: border-box;float: right;width: 66.66vw;height: 100vh; overflow-y: scroll;}
	.smallCode .hot{width: 90%;margin: 2vw auto;display: flex;align-items: center;justify-content: center;}
	.smallCode .hot span:first-child,.smallCode .hot span:last-child{display: inline-block; width: 0;height: 0;border-top: 1px solid #ACACAC;width: 13vw;}
	.smallCode .hot span:nth-of-type(2){margin: 0 2vw; font-size: .7rem;}
	.smallCode .hot span:nth-of-type(2) p{display: inline;color: #E50011;}
	.smallCode .con{margin: 0 auto; width: 55.2vw}
	.smallCode .con ul{display: flex;justify-content: space-between; ;flex-wrap: wrap;}
	.smallCode .con ul:after{content: "";width: 16vw;}
	.smallCode .con ul li{margin: 2vw 0; width: 16vw;height: 6vw;line-height: 6vw;text-align: center;font-size: .7rem; background: #EFEFEF;border-radius: 3vw;}
	.smallCode .con ul li a{color: black;}
</style>