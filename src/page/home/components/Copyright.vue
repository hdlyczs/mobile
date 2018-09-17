<template>
	<div>
		<div class="copyright-wrap" @click="toCopy">
			<div class="home-title">
				<img src="~@/assets/images/bqdj-t.png" alt="">
				<span class="title">版权登记</span>
				<span class="more"><a href="javascript:;">查看更多详情></a></span>
			</div>
			<ul class="list">
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-bhqy.png" alt="">
						<span>保护权益</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-xczp.png" alt="">
						<span>宣传作品</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-xsfl.png" alt="">
						<span>享受福利</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-ryzz.png" alt="">
						<span>荣誉资质</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-jyfy.png" alt="">
						<span>节约费用</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-czcf.png" alt="">
						<span>创造财富</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-jjjf.png" alt="">
						<span>解决纠纷</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-djzs.png" alt="">
						<span>独家专属</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="copyright-wrap" @click="toPatent">
			<div class="home-title">
				<img src="~@/assets/images/zlsq-t.png" alt="">
				<span class="title">专利申请</span>
				<span class="more"><a href="javascript:;">查看更多详情></a></span>
			</div>
			<ul class="list">
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-djzs.png" alt="">
						<span>独家专属</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-zlsc.png" alt="">
						<span>占领市场</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-bhqy.png" alt="">
						<span>技术保护</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-ryzz.png" alt="">
						<span>荣誉资质</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-zczc.png" alt="">
						<span>政策支持</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-czcf.png" alt="">
						<span>授信贷款</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-xczp.png" alt="">
						<span>企业宣传</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="~@/assets/images/dj-szlq.png" alt="">
						<span>升职利器</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name:'Homecopyright',
	methods:{
		toCopy(){
			this.$router.push({
				path:'/copy'
			})
		},
		toPatent(){
			this.$router.push({
				path:'/patent'
			})
		}
	}
}
</script>
<style>
	.copyright-wrap ul{margin: 0 auto;width: 90vw;}
	.copyright-wrap ul li{float: left;margin-top: 2vw; width: 25%;display: flex;justify-content: center;}
	.copyright-wrap ul li a{display: block; width: 16vw;display: flex;justify-content: center;flex-wrap: wrap;}
	.copyright-wrap ul li a img{display: block;width: 100%;width: 9.5vw; height: 8.8vw;}
	.copyright-wrap ul li a span{display: block;padding: 2vw 0; width: 100%;font-size: .7rem;text-align: center;color: black;}
</style>