<template>
	<div>
		<div class="copy-header">
			<top></top>
		</div>
		<div class="copy-banner">
			<img src="@/assets/images/copyimage/patent-banner.png" alt="">
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
		<div>
			<div class="patent-title">
				<span>这些都能申请专利</span>
				<span>一种设计/一种改进/一种创新/无处不在</span>
			</div>
			<div class="exm">
				<ul>
				
					<li>
						<img src="@/assets/images/exm1.jpg" alt="">
						<div class="exm-info">
							<div class="exm-title">
								<span class="big">有型产品</span>
								<span class="small">如苹果手机外形</span>
							</div>
							<ul>
								<li>一支笔的形状</li>
								<li>服装的图案</li>
								<li>包装的新色彩</li>
							</ul>
						</div>
					</li>
					<li>
						<img src="@/assets/images/exm2.jpg" alt="">
						<div class="exm-info">
							<div class="exm-title">
								<span class="big">有型产品</span>
								<span class="small">如易拉啤酒瓶盖</span>
							</div>
							<ul>
								<li>新功能笔</li>
								<li>光学鼠标</li>
								<li>多功能台灯</li>
								<li>......</li>
							</ul>
						</div>
					</li>
					<li>
						<img src="@/assets/images/exm3.jpg" alt="">
						<div class="exm-info">
							<div class="exm-title">
								<span class="big">有型产品</span>
								<span class="big" style="margin-left:18vw">无型产品</span>
							</div>
							<ul>
								<li>电子元件</li>
								<li>检查方法</li>
								<li>机械设备</li>
								<li>分析方法</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="toTop" @click="toTop">免费查询</div>
		<div>
			<div class="patent-title">
				<span>每个人都能申请专利</span>
				<span>个人/公司/组织。只要创新，均可申请</span>
			</div>
			<img src="@/assets/images/patent1.jpg" alt="" class="patent">
		</div>
		<div>
			<div class="patent-title">
				<span>专利申请的作用</span>
				<span>先保护/后变现，为人生加分</span>
			</div>
			<div class="important">
				<div class="item-wrap">
					<span>保护</span>
					<span>独家占有市场 ，杜绝侵权</span>
				</div>
				<div class="item-wrap">
					<span>赚钱</span>
					<span>专利可转让可授权纯利润/无风险</span>
				</div>
				<div class="item-wrap">
					<span>补贴</span>
					<span>100万级政策奖励 ，15%税费减免</span>
				</div>
				<div class="item-wrap">
					<span>福利</span>
					<span>升学考研/留学出国加分镀金利器</span>
				</div>
			</div>
		</div>
		<div>
			<div class="patent-title">
				<span>版权登记流程</span>
				<span>一个需求，全流程托管一站式服务</span>
			</div>
			<img src="@/assets/images/patent2.jpg" alt="" class="patent">
		</div>
		<div>
			<div class="patent-title">
				<span>求标网承诺</span>
			</div>
			<div class="advantage">
				<title>我们的优势</title>
				<ul>
					<li>
						<img src="@/assets/images/copyimage/ys-4.png" alt="">
						<span>无额外消费</span>
					</li>
					<li>
						<img src="@/assets/images/copyimage/ys-1.png" alt="">
						<span>托管式服务</span>
					</li>
					<li>
						<img src="@/assets/images/copyimage/ys-2.png" alt="">
						<span>专业团队</span>
					</li>
					<li>
						<img src="@/assets/images/copyimage/ys-3.png" alt="">
						<span>保密协议</span>
					</li>
				</ul>
				<div class="toTop" @click="toTop">免费查询</div>
			</div>
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
	.toTop{margin: 3vw auto; width: 75vw; border-radius: 4.8vw;background: url(~@/assets/images/copyimage/button-x.png) repeat-x;text-align: center;line-height: 9.6vw;color: white;font-size: 4vw;letter-spacing: 1px;}
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
	.patent-title{box-sizing: border-box;width:100vw;padding-left: 5vw;margin-top: 3.5vw;}
	.patent-title span{display: block;width: 100%;}
	.patent-title span:nth-of-type(1){font-size: 4.8vw;line-height: 5.5vw;}
	.patent-title span:nth-of-type(2){font-size: .7rem;}
	.exm>ul>li{box-sizing: border-box;margin: 3.5vw auto 0; width: 90vw;height: 26.6vw;padding: 2.6vw; box-shadow: #ACACAC 0px 0px 5px;display: flex;justify-content: space-between;}
	.exm>ul>li img{display: block;width: 21.3vw;height: 21.3vw;}
	.exm>ul>li .exm-info{width: 61vw;height: 100%;}
	.exm-info .exm-title{width: 100%;height: 7vw;border-bottom: 1px solid black;}
	.exm-info .exm-title .big{font-size: 4vw;}
	.exm-info .exm-title .small{font-size: .7rem;color: #ACACAC;}
	.exm-info ul{width: 100%;display: flex;justify-content: space-between;flex-wrap: wrap;}
	.exm-info ul li{font-size: .7rem;width: 25vw;line-height: 7vw;transform:scale(0.9)}
	.patent{display: block;width: 100%;}
	.important .item-wrap{margin: 2vw auto; width: 74.13vw;height: 12.13vw;background: url(~@/assets/images/copyimage/important.png);background-size: 100% 100%;display: flex;}
	.item-wrap span{font-size: .7rem;line-height: 12vw;text-align: center;}
	.item-wrap span:nth-of-type(1){width: 10.13vw; color: white;margin-left: 0.2vw;}
	.item-wrap span:nth-of-type(2){flex: 1;}
	.advantage ul{margin: 2vw auto; width: 90vw;display: flex;}
	.advantage ul li{width:25%;}
	.advantage ul li img{display: block;margin: 0 auto; height: 6vw;}
	.advantage ul li span{font-size: .7rem;display: block;text-align: center;}
	.advantage ul li span:nth-of-type(1){margin: 2vw auto 0;}
	.advantage ul li span:nth-of-type(2){color: #ACACAC;}
</style>