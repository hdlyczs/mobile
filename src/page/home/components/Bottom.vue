<template>
	<div class="bottom-wrap">
		<div class="bottom">
			<ul>
				<li>Copyright 2013-2018</li>
				<li>浙江求标网络科技有限公司 版权所有</li>
				<li>浙ICP备15027185号 求标网商标转让平台</li>
			</ul>
		</div>
		<div class="bottom-nav">
			<ul>
				<li>
					<router-link :to="{path:'/classify'}">
						<img src="~@/assets/images/bottom-flcx.png" alt="">
						<span>分类查询</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/process'}">
						<img src="~@/assets/images/bottom-lczy.png" alt="">
						<span>流程指引</span>
					</router-link>
				</li>
				<li>
					<a href="tel:400-8776-278">
						<img src="~@/assets/images/bottom-zx.png" alt="">
						<span>咨询</span>
					</a>
				</li>
				<li>
					<router-link :to="{path:'/articleList'}">
						<img src="~@/assets/images/bottom-xwzx.png" alt="">
						<span>新闻资讯</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/about'}">
						<img src="~@/assets/images/bottom-gyqb.png" alt="">
						<span>关于求标</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name:'HomeBottom'
}
</script>
<style>
	.bottom-wrap{margin-top: 2vw; width: 100vw;height: 51vw;background: #FAFAFA;overflow: hidden;}
	.bottom{width: 100%;height: 31.2vw;background: url(~@/assets/images/bottom.png) no-repeat center/contain;overflow: hidden;}
	.bottom ul{width: 100%; margin-top: 20vw;}
	.bottom ul li{width: 100%;font-size: .1rem;line-height: 3.5vw; color: #555555;text-align: center;transform: scale(.7);}
	.bottom-nav{position: fixed;bottom: 0; width: 100%;height: 19.7vw;background: white;}
	.bottom-nav ul{width: 100vw;height: 100%;display: flex;align-items: center;}
	.bottom-nav ul li{float: left;width: 20%;display: flex;justify-content: center;}
	.bottom-nav ul li a{width: 15vw;}
	.bottom-nav ul li a img{display: block;margin: 0 auto; width: 5.4vw;height: 6.1vw;}
	.bottom-nav ul li a span{display: block;margin-top: 1vw; text-align: center; color: #555555;font-size: .7rem;}
</style>
