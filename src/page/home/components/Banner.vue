<template>
	<div class="banner-wrap">
		<div class="banner">
			<swiper :options="swiperOption"  ref="mySwiper">
				<!-- 这部分放你要渲染的那些内容 -->
				<swiper-slide v-for="(item,index) in banner" :key="item.id">
					<img :src="item.mobileImgUrl" alt="">
				</swiper-slide>
				<!-- 这是轮播的小圆点 -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="cloth"></div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
export default {
	name:'HomeBanner',
	props:{
		banner:Array
	},
	components:{
		swiper,
		swiperSlide
	},
	data(){
		return{
			swiperOption: {
				pagination:{
					el:'.swiper-pagination'
				},
				autoplay:{
					delay:3000,
					stopOnLastSlide:false,
					disableOnInteraction:true,
				},
				// loop : true,  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            // notNextTick: true,  
	            // // pagination: '.swiper-pagination',  
	            // slidesPerView: 'auto',  
	            // centeredSlides: true,  
	            // paginationClickable: true,  
	            // spaceBetween: 30,  
             //    onSlideChangeEnd: swiper => {  
             //        //这个位置放swiper的回调方法  
             //        this.page = swiper.realIndex+1;  
             //        this.index = swiper.realIndex;  
             //    }  
            }
		}
	},
	computed:{
		swiper() {  
          return this.$refs.mySwiper.swiper;  
        }
	},
	mounted () {  
        //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
        // this.swiper.slideTo(1, 1000, false);  
    }
}
</script>
<style>
	.banner-wrap{position: relative;padding-top: 11.3vw;width: 100vw;height: 53vw;z-index: 1; background: skyblue;}
	.cloth{position: absolute;bottom: -1px; width: 0;height: 0;border-left: 100vw solid transparent;border-bottom: 32vw solid white;z-index: -100;}
	.banner{width: 100vw;height: 50vw;margin-top: 2vw;}
	.banner img{display: block;width: 100%;height: 100%;}
</style>
