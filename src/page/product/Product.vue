<template>
	<div>
		<div class="list-header">
			<top></top>
			<div class="list-fast">
				<div class="input-warp">
					<input type="text" placeholder="请输入您的手机号" v-model="telephone">
					<span class="submit" @click="submit">60S快速响应</span>
				</div>
			</div>
		</div>
		<img :src="this.product.imgUrl" alt="" class="product-img">
		<div>
			<div class="product-title">商标信息</div>
			<ul class="info">
				<li>
					<span class="info-title">商标名称：</span>
					<span class="info-con">{{this.product.tmName}}</span>
				</li>
				<li>
					<span class="info-title">注册号：</span>
					<span class="info-con">{{this.product.regNo}}</span>
				</li>
				<li>
					<span class="info-title">商标类型：</span>
					<span class="info-con">{{this.product.firstClsName}}</span>
				</li>
				<li>
					<span class="info-title">核定范围：</span>
					<span class="info-con">{{this.product.goods}}</span>
				</li>
				<li>
					<span class="info-title">类似群组：</span>
					<span class="info-con sp">{{this.product.secondIntCls}}</span>
				</li>
				<li>
					<template v-if="this.product.registerDate&&this.product.validityDate">
						<span class="info-title">专用期限：</span>
						<span class="info-con">{{this.product.registerDate.substring(0,10)}}至{{this.product.validityDate.substring(0,10)}}</span>
					</template>
				</li>
				<li>
					<span class="info-title">联系电话：</span>
					<span class="info-con">400-8776-278</span>
				</li>
			</ul>
		</div>
		<div>
			<div class="product-title">商标购买流程</div>
			<img src="@/assets/images/product-pro.jpg" alt="" class="product-pro">
		</div>
		<home-bottom></home-bottom>
	</div>
</template>
<script>
import Top from '@/page/common/Top.vue'
import HomeBottom from '@/page/home/components/Bottom.vue'
import axios from 'axios'
function testTel(tel){
	var phoneNum = /^1[0-9]{10}$/;
	return phoneNum.test(tel)
}
export default{
	components:{
		Top,
		HomeBottom,
	},
	data(){
		return{
			telephone:'',//用户的电话号码
			id:this.$route.params.id,//通过路由获取商标id
			product:{},//商标详情
			tmName:''//商标名字
		}
	},
	methods:{
		submit(){
			var This = this;
			var t = this.telephone;
			var tmName = this.tmName;
			if(testTel(t)){
				var qs = require('qs')
				axios.post('/api/customer/intention/',qs.stringify({'telephone':t,'tmName':tmName})).then(function(res){
					var data = res.data;
					if(data.restCode == 200){
						This.$layer.dialog({
						  	content: '询价成功，我们会尽快与您取得联系',
						  	btn: ['确定']
						})
					}
				})
			}else{
				this.$layer.toast({
					className:'icon-warn',
					content:'请输入正确的号码',
					time:2000
				})
			}
		}
	},
	created(){
		var This = this;
		var id = this.id
		var qs = require('qs')
		axios.post('/api/trademark/mobile/details/',qs.stringify({'tmId':id})).then(function(res){
			var data = res.data;
			if(data.restCode == 200){
				console.log(data)
				This.product = data.data;
				This.tmName = data.data.tmName;
			}
		})
	}
}
</script>
<style>
	.list-header{position: fixed;}
	.list-fast{width: 100vw;height:11vw;background: #D3D3D3;overflow: hidden;display: flex;align-items: center;}
	.list-fast .input-warp{margin:0 auto;width: 90vw; height: 8vw;}
	.list-fast input{float: left; height: 100%;width: 59vw;border:none;outline: none;-webkit-appearance:none;border-radius:0; border-top-left-radius: 5.3vw;border-bottom-left-radius: 5.3vw;color: #A0A0A0;padding-left: 3vw;}
	.list-fast .submit{float: left; display: inline-block; height: 100%;padding-left: 3vw; line-height: 8vw; width: 25vw;letter-spacing: 1px;color: white; font-size: .8rem;background: #DC6060;border-top-right-radius: 5.3vw;border-bottom-right-radius: 5.3vw;}
	@media screen and (max-width: 320px) {
		.list-fast .submit{letter-spacing: 0px;font-size: .1rem;}
	}
	.product-img{display: block; width: 100vw;padding-top: 22.7vw;}
	.product-title{box-sizing: border-box; margin-top: 5vw;padding-left: 2vw;  width: 100vw;line-height:8vw;font-size: 5vw;color: black;letter-spacing: 1px;}
	ul.info li{box-sizing: border-box;width: 100%;display: flex;font-size: .7rem;border-bottom: 1px solid #EFEFEF;line-height: 6vw;}
	ul.info li:nth-of-type(1){border-top: 1px solid #EFEFEF;}
	ul.info li .info-title{box-sizing: border-box; width: 27%;text-align: right;}
	ul.info li .info-con{box-sizing: border-box;flex: 1; padding-left: 5vw;}
	ul.info li .sp{overflow: hidden;}
	.product-pro{display: block;width: 100vw;}
</style>