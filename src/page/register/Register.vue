<template>
	<div>
		<div class="register-header">
			<top></top>
		</div>
		<div class="register-input">
			<div class="submit" @click="showRegisterForm">免费查询能否注册</div>
			<div class="sham">
				<span></span>
				<span>已有<p>2149127</p>人获得查询结果</span>
				<span></span>
			</div>
		</div>
		<div>
			<div class="title">商标注册</div>
			<div class="register-con con-scope" @click="showRegisterForm">
				<div class="register-left">
					<ul>
						<li>免费查询商标</li>
						<li class="p320">7*24h 1对1专属服务</li>
						<li>行业专家提供风险评估</li>
						<li><span>注册不成功免费再注册一次</span></li>
						<li><span>省心担保注册不成功退全款</span></li>
						<a href="javascript:;">立即咨询</a>
					</ul>
				</div>
				<div class="register-right">
					<div class="right-js">
						<ul>
							<li>免费查询商标</li>
							<li>7*24h 1对1专属服务</li>
							<li>行业专家提供风险评估</li>
							<a href="javascript:;">立即咨询</a>
						</ul>
					</div>
					<div class="right-sx">
						<ul>
							<li>免费查询商标</li>
							<li>行业专家提供风险评估</li>
							<li>
								<span class="default">注册不成功免费再注册一次</span>
								<span class="p320">不成功免费再注册一次</span>
							</li>
							<a href="javascript:;">立即咨询</a>
						</ul>
					</div>
				</div>
				<div class="register-bottom">
					<ul>
						<li>行业专家提供风险评估</li>
						<li>注册不成功免费再注册一次</li>
						<div class="clear"></div>
					</ul>
					<a href="javascript:;">立即咨询</a>
				</div>
			</div>
		</div>
		<div>
			<div class="title">商标信息变更</div>
			<div class="register-info">
				<ul>
					<li v-for="(item,index) in info" v-if="index<6" @click="showPop(index)">
						<img :src="item.img" alt="">
						<span>{{item.title}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<div class="title">商标注册疑难</div>
			<div class="register-info">
				<ul>
					<li v-for="(item,index) in info" v-if="index>5" @click="showPop(index)">
						<img :src="item.img" alt="">
						<span>{{item.title}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<div class="title">商标注册流程</div>
			<img src="@/assets/images/reg-process.png" alt="" class="reg-process">
		</div>
		<home-bottom></home-bottom>
		<div class="pop-box">
			<transition-group name="infomation">
				<div class="pop" v-for="(item,index) in info" v-show="index==num" :key="item.title">
					<div class="pop-close" @click="closePop">
						<div></div>
					</div>
					<img :src="item.img" alt="">
					<span class="pop-title">{{item.title}}</span>
					<span class="pop-des">{{item.des}}</span>
					<span class="pop-submit" @click="showPopForm">免费咨询</span>
				</div>
			</transition-group>
			<transition name="infomation">
				<div class="pop form" v-show="PopForm">
					<div class="pop-close" @click="closePopForm">
						<div></div>
					</div>
					<div class="form-title">专业顾问助您排除疑难</div>
					<div class="form-quest form-input">
						<span>需求</span>
						<input type="text" placeholder="请输入您的需求，如“商标变更”" v-model="remake">
					</div>
					<div class="form-tel form-input">
						<span>电话</span>
						<input type="text" placeholder="输入您的手机号" v-model="tel">
					</div>
					<div class="form-sub" @click="submit">提交需求</div>
					<div class="form-text">已有<span>2149127</span>人得到了帮助</div>
				</div>
			</transition>
			<transition name="infomation">
				<div class="pop form" v-show="registerForm">
					<div class="pop-close" @click="closeRegisterForm">
						<div></div>
					</div>
					<div class="form-title">专业顾问助您排除疑难</div>
					<div class="form-quest form-input">
						<span>商标</span>
						<input type="text" placeholder="请输入商标名称" v-model="tmName">
					</div>
					<div class="form-tel form-input">
						<span>电话</span>
						<input type="text" placeholder="输入您的手机号" v-model="tel">
					</div>
					<div class="form-sub" @click="submit">提交需求</div>
					<div class="form-text">已有<span>2149127</span>人得到了帮助</div>
				</div>
			</transition>
		</div>
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
			info:[
				{img:require('@/assets/images/reg-sbbg.png'),title:'商标变更',des:'如公司名称或地址更改或填写错误等，须向商标局提出申请。'},
				{img:require('@/assets/images/reg-sbxz.png'),title:'商标续展',des:'希望继续保有原商标，在商标到期前12个月提出申请。'},
				{img:require('@/assets/images/reg-sbkz.png'),title:'商标宽展',des:'商标到期后6个月内希望继续保有该商标 须向商标局提出申请。'},
				{img:require('@/assets/images/reg-sbzr.png'),title:'商标转让',des:'商标转让，须向商标局提出申请。'},
				{img:require('@/assets/images/reg-sbba.png'),title:'商标许可备案',des:'商标转让，须向商标局提出申请。'},
				{img:require('@/assets/images/reg-sbzx.png'),title:'商标注销',des:'商标持有人放弃全部或部分商标权 须向商标局提出商标注销申请。'},
				{img:require('@/assets/images/reg-bhfs.png'),title:'商标驳回复审',des:'申请注册的商标被驳回后，可以在收到驳文的15日内向商标 评审委员会申请复审。'},
				{img:require('@/assets/images/reg-yydb.png'),title:'商标异议答辩',des:'注册最终关，答辩成功即拿证。'},
				{img:require('@/assets/images/reg-sqyy.png'),title:'商标异议申请',des:'异议公示期近似商标，阻止其注册成功，委会品牌权益。'},
				{img:require('@/assets/images/reg-wxxg.png'),title:'商标无效宣告',des:'宣告他人商标无效，扫清障碍'},
				{img:require('@/assets/images/reg-xzss.png'),title:'商标行政诉讼',des:'当我们对商评委的判断不服，可以向背景知产法院起诉， 改变当事人的不利裁定。'},
				{img:require('@/assets/images/reg-cssq.png'),title:'商标撤三申请',des:'撤销他人三年不使用商标，扫清障碍。'}
			],
			num:-1,
			PopForm:false,
			registerForm:false,
			tmName:'',
			tel:'',
			remake:'',
		}
	},
	methods:{
		showPop(index){
			this.num = index;
		},
		closePop(){
			this.num = -1;
		},
		showPopForm(){
			this.$data.PopForm = true;
			this.num = -1;
		},
		closePopForm(){
			this.$data.PopForm = false;
		},
		showRegisterForm(){
			this.$data.registerForm = true;
		},
		closeRegisterForm(){
			this.$data.registerForm = false;
		},
		submit(){
			var This = this;
			var telephone = this.tel;
			var tmName = this.tmName;
			var remake = this.remake;
			if(testTel(telephone)){
				var qs = require('qs')
				axios.post('/api/customer/intention/',qs.stringify({'telephone':telephone,'tmName':tmName,'remake':remake})).then(function(res){
					var data = res.data;
					if(data.restCode == 200){
						This.$data.PopForm = false;
						This.$data.registerForm = false;
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
	}
}
</script>
<style>
	.register-header{position: fixed;z-index: 999;}
	.register-con{margin: 0 auto;margin-top: 2vw; width: 90vw;display: flex;justify-content: space-between;flex-wrap:wrap;}
	.register-left{width: 45.7vw;height: 44vw;border:1px solid #EFEFEF;border-radius: 2vw; background: url(~@/assets/images/zc-db.png)no-repeat center/contain;}
	.register-left ul{width: 100%;margin-top:14vw;}
	.register-left ul li{width: 100%; text-align: center; font-size: .1rem;color: #555555;transform: scale(.9);}
	.register-left ul li span{color: red;}
	.register-left ul a{display: block;margin: 0 auto;margin-top: 2vw; width: 21.5vw;height: 5.2vw;line-height: 5.2vw; border-radius: 2.6vw; background: red;color: white;font-weight: bold; font-size: .7rem;text-align: center;}
	@media screen and (max-width: 320px) {
		.p320{display: none;}
	}
	.register-right{width: 40.7vw;}
	.register-right .right-js{width: 100%; height: 21.3vw;border:1px solid #EFEFEF;border-radius: 2vw; background: url(~@/assets/images/zc-js.png)no-repeat;background-size: 100% 100%;}
	.register-right .right-sx{margin-top: 1vw; width: 100%; height: 21.3vw;border:1px solid #EFEFEF;border-radius: 2vw; background: url(~@/assets/images/zc-sx.png)no-repeat;background-size: 100% 100%;}
	.register-right ul{width: 100%;margin-top:7vw;}
	.register-right ul li{width: 100%; text-align: left; font-size: .1rem;line-height: 3vw; color: #555555;transform: scale(.7);}
	.register-right ul li span{color: #FCD26E;}
	.register-right .right-js a{display: block;margin: 0 auto;margin-top: .5vw; width: 21.5vw;height: 5.2vw;line-height: 5.2vw; border-radius: 2.6vw; background: #42BEFF;color: white; font-size: .7rem;text-align: center;transform: scale(.7);}
	.register-right .right-sx a{display: block;margin: 0 auto;margin-top: .5vw; width: 21.5vw;height: 5.2vw;line-height: 5.2vw; border-radius: 2.6vw; background: #FCD26E;color: white; font-size: .7rem;text-align: center;transform: scale(.7);}
	.right-sx .p320{display: none;}
	@media screen and (max-width: 320px) {
		.right-sx .p320{display:block;}
		.right-sx .default{display: none;}
	}
	.register-bottom{position: relative; margin-top: 1vw; width: 100%;height: 16.6vw;border:1px solid #EFEFEF;border-radius: 2vw; background: url(~@/assets/images/zc-gj.png)no-repeat;background-size: 100% 100%;}
	.register-bottom ul{margin-top: 7vw; display: block;}
	.register-bottom ul li{width:50vw;text-align: left; font-size: .1vw;line-height: 4vw; color: #555555;transform: scale(.9);}
	.clear{clear: both;}
	@media screen and (max-width: 320px) {
		.register-bottom ul li{line-height: 5vw;}
	}
	.register-bottom a{position: absolute;bottom: 0;right: 0; display: block; width: 21.5vw;height: 5.2vw;line-height: 5.2vw; border-radius: 2.6vw; background: #42BEFF;color: white; font-size: .7rem;text-align: center;transform: scale(.8);}
	.register-input{background: #EFEFEF;padding-top: 14vw;padding-bottom: 1vw;}
	.register-input .submit{display: block;margin: 0 auto; width: 90vw; border-radius: 4.8vw;background:#E50011;text-align: center;line-height: 9.6vw;font-size: .7rem; color: white}
	.sham{width: 90%;margin: 2vw auto;display: flex;align-items: center;}
	.sham span:first-child,.sham span:last-child{display: inline-block; width: 0;height: 0;border-top: 1px solid #ACACAC;width: 13vw;}
	.sham span:nth-of-type(2){margin: 0 2vw; font-size: .7rem;}
	.sham span:nth-of-type(2) p{display: inline;color: #E50011;}
	.title{line-height: 10vw;padding:0 2vw;color: black;font-size: 4.5vw;}
	.con-scope{margin-top: 0 !important;}
	.register-info{margin: 0 auto; width: 95vw;}
	.register-info ul{display: flex;justify-content: space-between;flex-wrap:wrap;}
	.register-info ul li{width: 29.8vw;height: 29.8vw;border:1px solid #EFEFEF;border-radius: 3vw;}
	.register-info ul li:nth-of-type(4),.register-info ul li:nth-of-type(5),.register-info ul li:nth-of-type(6){margin-top: 2vw;}
	.register-info ul li img{margin: 6.6vw auto 0; display: block; width: 8.8vw;height: 9.7vw;}
	.register-info ul li span{display: block;width: 100%;text-align: center; font-size: .7rem;margin-top: 2vw;}
	.reg-process{display: block;width: 100vw;}
	.pop{position: fixed; top: 32vh;left: 10vw; width: 80vw;height: 48vw;border:1px solid #EFEFEF;border-radius: 0.5vw; box-shadow: #ACACAC 0px 0px 5px; background: white;}
	.pop .pop-close{position: absolute; width: 6.6vw;height: 6.6vw;top: -3.5vw;right: -3.5vw;border-radius: 50%;background: white;display: flex;justify-content: center;align-items: center;box-shadow: #ACACAC 0px 0px 5px;}
	.pop .pop-close div{width: 3vw;height: 3vw; background: url(~@/assets/images/reg-x.png) no-repeat;background-size: 100% 100%;}
	.pop span{display: block; width: 100%;text-align: center;}
	.pop img{margin: 8vw auto 0; display: block; width: 8.8vw;height: 9.7vw;}
	.pop .pop-title{line-height: 9vw;font-style: 3.6vw;}
	.pop .pop-des{box-sizing: border-box; font-size: .7rem;color:#ACACAC; padding:0 2vw;}
	.pop .pop-submit{margin: 4vw auto; width:20vw;line-height: 5.3vw;border-radius: 2vw; font-size: .7rem;background: #e50011;color: white;}
	.form-title{line-height: 9.6vw;text-align: center;border-bottom: .5px solid black;font-size: 3.6vw;font-weight: 100;letter-spacing: 1.5px;}
	.form-input{margin: 3vw auto; width: 80%;display: flex;justify-content: center;height: 6.3vw;}
	.form-input span{display: inline-block;width: 10vw;line-height: 6.3vw; font-size: .7rem;color: #e50011;text-align: left;}
	.form-input input{width: 55vw;height: 100%;font-size: .7rem;color: #ACACAC;text-align: center; outline: none;border:1px solid #EFEFEF;border-radius: 2.6vw;}
	.form-sub{margin: 0 auto; width: 80%;line-height: 6.3vw;background:#e50011;font-size: .7rem;color: white; text-align: center;border-radius: 2.6vw;}
	.form-text{margin-top: 2vw; font-size: .7rem;text-align: center;}
	.form-text span{color: #e50011;display: inline;}
	.infomation-enter-active, .fade-leave-active {transition: opacity .3s;}
	.infomation-enter, .infomation-leave-to{opacity: 0;}
</style>