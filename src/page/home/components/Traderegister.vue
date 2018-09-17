<template>
	<div class="register-wrap" @click="toRegister">
		<div class="home-title">
			<img src="~@/assets/images/sbzc-t.png" alt="">
			<span class="title">商标注册</span>
			<span class="more"><router-link :to="{path:'register/'}">查看详情></router-link></span>
		</div>
		<div class="register-con">
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
</template>
<script>
export default {
	name:'Hometraderegister',
	methods:{
		toRegister(){
			this.$router.push({
				path:'/register'
			})
		}
	}
}
</script>
<style>
	.register-wrap{margin-top: 4vw;}
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
</style>
