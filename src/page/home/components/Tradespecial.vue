<template>
	<div class="special-wrap">
		<div class="home-title">
			<img src="~@/assets/images/tjsb-t.png" alt="">
			<span class="title">特价商标</span>
			<span class="more"><router-link :to="{path:'list/'}">更多特价商标></router-link></span>
		</div>
		<ul class="list">
			<li class="special-li" v-for="(item,index) of specialList" :key="item.id" v-if="index<3">
				<router-link :to="{path:'product/'+item.tmInfoId}">
					<img :src="item.imgUrl" alt="">
					<span class="name">{{item.tmName}}</span>
					<p>
						<span class="code">第{{item.tmClassifyCode}}类</span>
						<span class="classify">{{item.tmClassifyName}}</span>
					</p>
				</router-link>
			</li>
			<li class="special-li" v-for="(item,index) of list1" :key="item.id">
				<router-link :to="{path:'product/'+item.tmInfoId}">
					<img :src="item.imgUrl" alt="">
					<span class="name">{{item.tmName}}</span>
					<p>
						<span class="code">第{{item.tmClassifyCode}}类</span>
						<span class="classify">{{item.tmClassifyName}}</span>
					</p>
				</router-link>
			</li>
			<!-- 死代码复制 -->
			<!-- <li class="special-li">
				<a href="">
					<img src="~@/assets/images/example2.png" alt="">
					<span class="name">咖啡</span>
					<p>
						<span class="code">第25类</span>
						<span class="classify">服装鞋帽</span>
					</p>
				</a>
			</li> -->
			<!-- 死代码复制结束 -->
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name:'HomeTradespecial',
	data(){
		return{
			list1:[]
		}
	},
	props:{
		specialList:Array,
		specialClassify:Array
	},
	methods:{
		getSpecialList1:function(){
			var This = this;
			// var arr = this.$props.specialClassify
			// axios.get('/api/bargain/'+arr[1].id+'/1-3/').then(function(res){
			// 	var data = res.data;
			// 	if(data.restCode == 200){
			// 		This.list1 = data.data.rows
			// 	}
			// })
			// console.log(this.$props.specialClassify)
			var qs = require('qs');
			axios.post('/api/bargain/list/',qs.stringify({
				'classifyName':'首页特价'
			})).then((res) => {
				var data = res.data;
				this.list1 = data.data.rows;
			})
		}
	},
	mounted(){

	},
	watch:{
		specialClassify:function(){
			this.getSpecialList1();
		}
	}
}
</script>
<style>
	.special-wrap .list{justify-content: space-between;}
	/*.special-wrap .list:after{content: "";flex: auto;}*/
	.list .special-li{width:29.8vw;margin-top: 2vw;}
	.list .special-li a{display: block;width: 100%;height: 100%;}
	.list .special-li img{display: block;width: 100%;}
	.list .special-li .name{display: block;width: 100%;text-align: center;color: black;font-size: .1vw;}
	.list .special-li p{width: 100%;text-align: center;}
	.list .special-li p span{color: black;font-size: .1vw;}
</style>