<template>
	<div>
		<top></top>
		<fast></fast>
		<div class="share-banner">
			<img src="@/assets/images/share-banner.png" alt="">
		</div>
		<div class="share-infomation">
			<div class="first">
				<dl>
					<dt><span class="iconfont">&#xe658;</span></dt>
					<dd>{{userName}}</dd>
				</dl>
				<dl>
					<dt><span class="iconfont">&#xe600;</span></dt>
					<dd>{{QQ}}</dd>
				</dl>
			</div>
			<div class="second">
				<dl>
					<dt><span class="iconfont">&#xe67a;</span></dt>
					<dd>{{telephone}}</dd>
				</dl>
				<dl>
					<dt><span class="iconfont">&#xe61e;</span></dt>
					<dd>{{wechat}}</dd>
				</dl>
			</div>
		</div>
		<div class="share-desc">
			<p>分享说明：</p>
			<div class="desc">{{desc}}</div>
		</div>
		<div class="share-list">
			<ul>
				<li v-for="item in list" :key="item.id">
					<router-link :to="{path:'product/'+item.id}">
						<img :src="item.imgUrl" alt="">
						<span class="name">第{{item.firstClsCode}}类 {{item.tmName}}</span>
						<span class="price">￥{{item.price}}</span>
					</router-link>
				</li>
			</ul>
		</div>
		<home-bottom></home-bottom>
	</div>
</template>
<script>
function testTel(tel){
	var phoneNum = /^1[0-9]{10}$/;
	return phoneNum.test(tel)
}
import Top from '@/page/common/Top.vue'
import HomeBottom from '@/page/home/components/Bottom.vue'
import Fast from '@/page/common/Fast.vue'
import axios from 'axios'
export default{
	components:{
		Top,
		HomeBottom,
		Fast
	},
	data:function(){
		return {
			userName:'',
			telephone:'',
			QQ:'',
			wechat:'',
			desc:'',
			list:[],
		}
	},
	methods:{

	},
	created:function(){
		var shareId = this.$route.query.shareId;
		var qs = require('qs');
		axios.post('/api/share/list',qs.stringify({
			'shareId':shareId
		})).then( (res) => {
			var data = res.data;
			console.log(data)
			this.userName = data.data.shareBy;
			this.telephone = data.data.telephone;
			this.QQ = data.data.qq;
			this.wechat = data.data.wechat;
			this.desc = data.data.descp;
			this.list = data.data.tmInfolist;
		})
	}
}
</script>
<style scoped>
.share-banner img{display: block; width: 100%;height: 100%;}
.share-infomation{display: flex;}
.share-infomation dl{display: flex;padding-top: 4vw;}
.share-infomation dl dt span{font-size: 18px;color:#ACACAC;}
.share-infomation dl dd{padding-left: 1vw;padding-top: .1rem; font-size: .7rem;color:#F55252;}
.share-infomation .first,.share-infomation .second{width: 50vw;padding-left: 7vw;}
.share-desc{padding:4vw 7vw;}
.share-desc p{font-size: .1rem;color:#F55252;}
.share-desc .desc{padding-top: 2vw; font-size: .1rem;color:#ACACAC;}
.share-list{padding:0vw 7vw;}
.share-list ul{display: flex;justify-content: space-between;flex-wrap: wrap;}
.share-list ul li{width: 37vw;margin-top: 1vw;}
.share-list ul li img{width: 100%;}
.share-list ul li span{display: block;}
.share-list ul li .name{font-size: .8rem;color:black;}
.share-list ul li .price{font-size: .7rem;color:#F55252;}
</style>