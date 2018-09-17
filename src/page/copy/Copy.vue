<template>
	<div>
		<div class="copy-header">
			<top></top>
		</div>
		<div class="copy-banner">
			<img src="@/assets/images/copyimage/copy-banner.jpg" alt="">
		</div>
		<div class="copy-register">
			<div class="name-wrap">
				<span>作品名称</span>
				<input class="name" type="text" placeholder="如：logo图/动漫/设计图..." v-model="remake">
			</div>
			<div class="tel-wrap">
				<span>手机号码*</span>
				<input class="tel" type="text" placeholder="便于接受查询结果，仅官方可见" v-model="telephone">
			</div>
			<div class="submit" @click="submit">免费查询能否注册</div>
			<div class="sham">
				<span></span>
				<span>已有<p>2149127</p>人获得查询结果</span>
				<span></span>
			</div>
		</div>
		<div class="work">
			<title>哪些作品能版权登记</title>
			<img class="cut" src="@/assets/images/copyimage/cut.png" alt="">
			<ul>
				<li>
					<a href="">
						<img src="@/assets/images/copyimage/mszp.png" alt="">
						<span>美术作品</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="@/assets/images/copyimage/wzzp.png" alt="">
						<span>文字作品</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="@/assets/images/copyimage/syzp.png" alt="">
						<span>摄影作品</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="@/assets/images/copyimage/rjzp.png" alt="">
						<span>软件作品</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="@/assets/images/copyimage/yszp.png" alt="">
						<span>影视作品</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="@/assets/images/copyimage/more.png" alt="">
						<span>更多</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="who">
			<title>哪些人需要登记版权</title>
			<ul>
				<li>
					<img src="@/assets/images/copyimage/geren.png" alt="">
					<span>个人</span>
					<span>摄影师 画家 小说写手 设计师 工程师 程序员...</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/qiye.png" alt="">
					<span>企业</span>
					<span>互联网公司 影视公司 建筑公司 软件公司...</span>
				</li>
			</ul>
		</div>
		<div class="important">
			<title>版权登记的重要性</title>
			<div class="item-wrap">
				<span>宣传</span>
				<span>版权机构定期宣传你的作品</span>
			</div>
			<div class="item-wrap">
				<span>保护</span>
				<span>登记一次，终生保护，维权有据</span>
			</div>
			<div class="item-wrap">
				<span>赚钱</span>
				<span>版权转让和授权，能赚钱</span>
			</div>
			<div class="item-wrap">
				<span>荣誉</span>
				<span>国家权威证书《著作权证书》</span>
			</div>
			<div class="item-wrap">
				<span>福利</span>
				<span>享受国家税费减免优惠</span>
			</div>
		</div>
		<div class="reg">
			<title>及时登记维权有据</title>
			<img class="cut" src="@/assets/images/copyimage/cut.png" alt="">
			<ul>
				<li>
					<p>金庸VS江南</p>
					<p>江南未经金庸许可，在《此间的少年》中使用 “黄蓉郭靖”等原创性人物，设计对原著作品侵 权，被索赔百万，已庭下调解。</p>
				</li>
				<li>
					<p>腾讯VS元酷</p>
					<p>元酷公司旗下“漫画帮”未经授权传播《狐妖 小红娘》等5部漫画作品。法院认定“漫画帮” 构成侵权，腾讯获赔32.3万元。</p>
				</li>
			</ul>
			<div class="toTop" @click="toTop">免费查询</div>
		</div>
		<div class="process">
			<title>版权登记流程</title>
			<ul class="process-big">
				<li>
					<img src="@/assets/images/copyimage/process-1.png" alt="">
					<span>免费查询版权登记</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/process-2.png" alt="">
					<span>全流程托管</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/process-3.png" alt="">
					<span>领取版权证书</span>
				</li>
			</ul>
			<ul class="process-small">
				<span class="process-sin"></span>
				<li>
					<img src="@/assets/images/copyimage/tg-1.png" alt="">
					<span>给出 </br>查询结果</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/tg-2.png" alt="">
					<span>收集 </br>申请材料</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/tg-3.png" alt="">
					<span>递交 </br>版权局</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/tg-4.png" alt="">
					<span>版权局 </br>审查</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/tg-5.png" alt="">
					<span>登记进度 </br>反馈</span>
				</li>
			</ul>
		</div>
		<div class="material">
			<title>版权登记所需材料</title>
			<ul class="material-1">
				<li>
					<img src="@/assets/images/copyimage/dj-1.png" alt="">
					<span>申请书</span>
					<span>（求标网代）</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/dj-2.png" alt="">
					<span>委托书</span>
					<span>（求标网代）</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/dj-3.png" alt="">
					<span>作品说明</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/dj-4.png" alt="">
					<span>营业执照副本/身份证 复印件</span>
				</li>
			</ul>
			<div class="plus">
				<img src="@/assets/images/copyimage/dj-+.png" alt="">
			</div>
			<ul class="material-2">
				<li>
					<img src="@/assets/images/copyimage/dj-5.png" alt="">
					<span>作品图样</span>
					<span>（普通版权申请）</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/dj-6.png" alt="">
					<span>全部or部分源代码</span>
					<span>（全歼著作权申请）</span>
				</li>
			</ul>
		</div>
		<div class="advantage">
			<title>我们的优势</title>
			<ul>
				<li>
					<img src="@/assets/images/copyimage/ys-1.png" alt="">
					<span>快速申报</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/ys-2.png" alt="">
					<span>专业团队</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/ys-3.png" alt="">
					<span>信息保密</span>
				</li>
				<li>
					<img src="@/assets/images/copyimage/ys-4.png" alt="">
					<span>售后服务</span>
				</li>
			</ul>
			<div class="toTop" @click="toTop">免费查询</div>
		</div>
		<home-bottom></home-bottom>
	</div>
</template>
<script>
function testTel(tel){
	var phoneNum = /^1[0-9]{10}$/;
	return phoneNum.test(tel)
}
import HomeBottom from '@/page/home/components/Bottom.vue'
import Top from '@/page/common/Top.vue'
import axios from 'axios'
export default{
	name:'Copy',
	components:{
		HomeBottom,
		Top,
	},
	data(){
		return{
			remake:'',
			telephone:''
		}
	},
	methods:{
		submit(){
			var This = this;
			var telephone = this.telephone;
			var remake = this.remake;
			if(testTel(telephone)){
				var qs = require('qs')
				axios.post('/api/customer/intention/',qs.stringify({'telephone':telephone,'remake':remake})).then(function(res){
					var data = res.data;
					if(data.restCode == 200){
						This.$layer.dialog({
						  	content: '咨询成功，我们会尽快与您取得联系',
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
		},
		toTop(){
			$('html, body').animate({scrollTop:0}, 400);
		}
	}
}
</script>
<style>
	.copy-header{position: fixed;z-index: 999;}
	.copy-banner{width: 100vw;height: 42.6vw;padding-top: 11.7vw;}
	.copy-banner img{width: 100%;height: 100%;}
	.copy-register{box-sizing: border-box; width: 100vw;height: 46vw;padding: 0 5vw; background: #EFEFEF;overflow: hidden;}
	.name-wrap,.tel-wrap,.copy-register .submit{width: 100%;height: 9.6vw;margin: 0 auto;margin-top: 3vw; font-size: .7rem;}
	.name-wrap span,.tel-wrap span{float: left;width: 30%;height: 100%; background: url(~@/assets/images/copyimage/button-x.png) repeat-x;border-top-left-radius: 4.8vw;border-bottom-left-radius: 4.8vw;text-align: center;line-height: 9.6vw;color: white;}
	.name-wrap input,.tel-wrap input{box-sizing: border-box; float: left;width: 70%;height: 100%;border: none;outline: none;border-top-right-radius: 4.8vw;border-bottom-right-radius: 4.8vw;padding-left: 5vw; font-size: .7rem;}
	.copy-register .submit{border-radius: 4.8vw;background: url(~@/assets/images/copyimage/button-x.png) repeat-x;text-align: center;line-height: 9.6vw;color: white}
	.sham{width: 90%;margin: 2vw auto;display: flex;align-items: center;justify-content: center;}
	.sham span:first-child,.sham span:last-child{display: inline-block; width: 0;height: 0;border-top: 1px solid #ACACAC;width: 13vw;}
	.sham span:nth-of-type(2){margin: 0 2vw; font-size: .7rem;}
	.sham span:nth-of-type(2) p{display: inline;color: #E50011;}
	title{display:block; width: 100vw;height: 10.6vw;line-height: 10.6vw;color: black;text-align: center;font-size: 4.5vw;}
	.cut{display: block; margin: 0 auto; width: 90vw;}
	.work ul{margin: 0 auto; width: 90vw; border-bottom-left-radius: 1vw;border-bottom-right-radius: 1vw;box-shadow: 0 0px 2px 2px rgba(0,0,0,0.1);display: flex;flex-wrap: wrap;}
	.work ul li{width: 33.33%;}
	.work ul li a{}
	.work ul li a img{display: block;margin: 3vw auto 0; width: 10.8vw;height: 10.8vw;}
	.work ul li a span{display: block;width: 100%;text-align: center;font-size: .7rem;color: #ACACAC;margin: 3vw 0;}
	.who{padding: 2vw 0;}
	.who ul{margin: 2vw auto; width: 63.3vw;display: flex;}
	.who ul li{width: 50%;}
	.who ul li img{display: block;width: 19.2vw;margin: 0 auto;}
	.who ul li span{display: block;text-align: center;}
	.who ul li span:nth-of-type(1){font-size: 5vw;margin: 2vw auto;}
	.who ul li span:nth-of-type(2){font-size: .7rem;}
	.important .item-wrap{margin: 2vw auto; width: 74.13vw;height: 12.13vw;background: url(~@/assets/images/copyimage/important.png);background-size: 100% 100%;display: flex;}
	.item-wrap span{font-size: .7rem;line-height: 12vw;text-align: center;}
	.item-wrap span:nth-of-type(1){width: 10.13vw; color: white;margin-left: 0.2vw;}
	.item-wrap span:nth-of-type(2){flex: 1;}
	.reg ul{margin: 0 auto; width: 90vw; border-bottom-left-radius: 1vw;border-bottom-right-radius: 1vw;box-shadow: 0 0px 2px 2px rgba(0,0,0,0.1);}
	.reg ul li{width: 100%;height: 18.6vw;display: flex;align-items: center;}
	.reg ul li:first-child{border-bottom: 1px solid #EFEFEF;}
	.reg ul li p{height: 12vw;}
	.reg ul li p:first-child{width: 24.4vw;font-size: 4vw;text-align: center;line-height: 12vw; border-right: 1px solid #EFEFEF;}
	.reg ul li p:last-child{box-sizing: border-box;padding: 0 2vw; flex: 1;font-size: .7rem;}
	@media screen and (max-width: 320px) {
		.reg ul li{height: 28vw;}
		.reg ul li p:last-child{box-sizing: border-box;height: auto;}
	}
	.toTop{margin: 3vw auto; width: 75vw; border-radius: 4.8vw;background: url(~@/assets/images/copyimage/button-x.png) repeat-x;text-align: center;line-height: 9.6vw;color: white;font-size: 4vw;letter-spacing: 1px;}
	ul.process-big{width: 100vw;display: flex;}
	ul.process-big li{width: 33.33%;}
	ul.process-big li img{display: block;margin: 0 auto; width: 5.86vw;}
	ul.process-big li span{display: block;margin: 2vw auto; font-size: .7rem;text-align: center;}
	ul.process-small{position: relative;display: flex;align-items: center; width: 81vw;height: 28.9vw; margin: 3vw auto;background: white; box-shadow: 0 0px 2px 2px rgba(0,0,0,0.08);}
	ul.process-small .process-sin{border-left: 10px solid transparent;border-right: 10px solid transparent;border-bottom: 10px solid white;position: absolute;top: -10px;left: 50%;margin-left: -10px;}
	.process-sin:after {content: '';position: absolute;top: 0;left: 0;border-left: 10px solid transparent;border-right: 10px solid transparent;border-bottom: 10px solid #778899;position: absolute;margin-left: -10px;z-index: -1; filter: blur(2px);}
	.process-small li{width: 20%;}
	.process-small li img{display: block; width: 4.4vw;margin: 0 auto;}
	.process-small li span{display: block;margin: 1vw 0; font-size: .7rem;text-align: center;transform: scale(.9);}
	.material-1,.material-2{margin: 0 auto; width: 90vw;display: flex;}
	.material-1 li{width:25%;}
	.material-2 li{width: 50%;}
	.material-1 li img,.material-2 li img{display: block; margin: 0 auto; width: 5.86vw;}
	.material-1 li span,.material-2 li span{font-size: .7rem;display: block;text-align: center;}
	.material-1 li span:nth-of-type(1),.material-2 li span:nth-of-type(1){margin: 2vw auto 0;}
	.material-1 li span:nth-of-type(2),.material-2 li span:nth-of-type(2){color: #ACACAC;}
	.plus img{display: block; margin: 2vw auto; width: 5.86vw;}
	.advantage ul{margin: 2vw auto; width: 90vw;display: flex;}
	.advantage ul li{width:25%;}
	.advantage ul li img{display: block;margin: 0 auto; height: 6vw;}
	.advantage ul li span{font-size: .7rem;display: block;text-align: center;}
	.advantage ul li span:nth-of-type(1){margin: 2vw auto 0;}
	.advantage ul li span:nth-of-type(2){color: #ACACAC;}
</style>