<template>
	<div>
		<!-- 列表页头部 -->
		<div class="list-header">
			<top></top>
			<div class="list-fast">
				<div class="input-warp">
					<input type="text" placeholder="请输入您的手机号" v-model="telephone">
					<span class="submit" @click="submit">60S快速响应</span>
				</div>
			</div>
			<div class="list-search">
				<div class="search-warp">
					<input type="search" placeholder="搜索商标" @focus="focus"  v-model="keywords" v-on:keyup.enter="search" ref="keywords">
					<span class="keywords" v-show="showKeywords" @click="clearKeywords">
						<span>{{keywords}}</span>
						<img src="@/assets/images/X.png" alt="">
					</span>
					<span v-on:click='showClassify' class="search-classify">
						商标分类
						<span class="triangle"></span>
						<span class="line"></span>
					</span>
					<span class="submit iconfont" @click="search">&#xe6de;</span>
				</div>
			</div>
			<div class="filter">
				<ul>
					<li @click="updateTime" :class="{active:updateTimeActive}">新品</li>
					<li @click="registerDate" :class="{active:registerDateActive}">下证时间</li>
				</ul>
				<span class="filter-icon" v-on:click='showFilter'>
					<span>筛选</span>
					<span class="iconfont">&#xe6d9;</span>
				</span>
			</div>
		</div>
		<!-- 列表页头部结束 -->
		<!-- 列表内容 -->
		<div class="list-con wrapper" ref="wrapper">
			<ul class="content">
				<li v-for="(item,index) in list">
					<!-- <router-link :to="{path:'product/'+item.id}"> -->
					<a href="javascript:;" @click="toProduct(item.id,item.tmName)">
						<img :src="item.imgUrl" alt="">
						<div class="con-info">
							<span class="name">{{item.tmName}}</span>
							<span class="code">第{{item.firstClsCode}}类 {{item.firstClsName}}</span>
							<span class="range">{{item.goods}}</span>
							<span class="commit" @click.stop="showInfomation()">联系卖家</span>
						</div>
					</a>
					<!-- </router-link> -->
					<div class="tel" v-show="index%10==8">
						<span>找商标太麻烦，找专业顾问快速获取</span>
						<input type="text" placeholder="请输入您的联系电话" v-model="telephone">
						<span class="submit" @click="submit">快速获取商标信息</span>
						<span>客户信息严格保密，请放心留电</span>
					</div>
				</li>
				<div class="load" v-show="loading">加载中...</div>
				<div class="noData" v-show="noData">
					<div class="notice">
						<span>很遗憾!</span>
						<span>没找到您要的商标(〒︿〒)</span>
					</div>
					<div class="noData-form">
						<span>别急！让专业顾问快速推荐！</span>
						<input type="text" placeholder="请输入您的联系电话" v-model="telephone">
						<span class="button" @click="submit">快速获取商标信息</span>
						<span>客户信息严格保密，请放心留电</span>
					</div>
				</div>
			</ul>
		</div>
		<!-- 列表内容结束 -->
		<!-- 商标分类选择框 -->
		<div class="body-wrap" v-bind:class='{classifyActive:isActive}' @click='closeClassify'>
			<div class="classify-box">
				<ul>
					<li>
						<span class="code" @click.stop="allClassify">全部分类</span>
						<span class="check" :class="{active:num==-1}"></span>
					</li>
					<li v-for="(item,index) in classifyList" :key="item.id" @click.stop='check(index,item.code)'>
						<span class="code">第{{item.code}}类 {{item.name}}</span>
						<span class="check" :class="{active:index==num}"></span>
					</li>
				</ul>
				<router-link to="/classify">
					<span class="to">最新商标分类表></span>
				</router-link>
			</div>
		</div>
		<!-- 商标分类选择框结束 -->
		<!-- 筛选框 -->
		<transition name="slide-fade">
			<div class="filter-wrap" v-if='filter'>
				<div class="filter-back" @click="filterBack"></div>
				<div class="filter-box">
					<div class="title">筛选</div>
					<!-- 商标分类 -->
					<div class="classify">
						<div class="condition-title" @click="classifyUlClike">
							<span class="name">商标分类</span>
							<span class="checked"><span v-if="this.ajaxDate.code!=''">第{{this.ajaxDate.code}}类</span> {{this.codeName}}</span>
							<span class="switch iconfont">&#xe697;</span>
						</div>
						<transition name="classifyUl">
						<div class="scroll-wrap" v-if="classifyUl">
							<ul class="classify-ul">
								<li v-for="(item,index) in classifyList" :key="item.id" @click='check(index,item.code)'>第{{item.code}}类 {{item.name}}</li>
							</ul>
						</div>
						</transition>
					</div>
					<!-- 商标分类结束 -->
					<!-- 商标小类 -->
					<div class="condition smallCode">
						<div class="condition-title" @click="showSmallCodeUl">
							<span class="name">类似群组</span>
							<span class="checked">全部</span>
							<span class="switch iconfont">&#xe697;</span>
						</div>
						<ul class="smallCode-ul showHeight" v-show="smallCodeUl">
							<li v-for="(item,index) in smallCode" :key="item.id" :class="{active:index==smallNum}" @click="checkSmallCode(index,item.code)">{{item.code}}</li>
						</ul>
					</div>
					<!-- 商标小类结束 -->
					<!-- 下证时间 -->
					<div class="condition time">
						<div class="condition-title">
							<span class="name">下证时间</span>
							<!-- <span class="checked">全部</span>
							<span class="switch iconfont">&#xe697;</span> -->
						</div>
						<ul class="">
							<li v-for="(item,index) in time" :class="{active:index==timeNum}" @click="checkTime(index)">{{item}}</li>
						</ul>
					</div>
					<!-- 下证时间结束 -->
					<!-- 组合类型 -->
					<div class="condition style">
						<div class="condition-title">
							<span class="name">组合类型</span>
							<!-- <span class="checked">全部</span>
							<span class="switch iconfont">&#xe697;</span> -->
						</div>
						<ul class="">
							<li v-for="(item,index) in style" :class="{active:index==styleNum}" @click="checkStyle(index)">{{item}}</li>
						</ul>
					</div>
					<!-- 组合类型结束 -->
					<!-- 字符长度 -->
					<div class="condition length">
						<div class="condition-title">
							<span class="name">字符长度</span>
							<!-- <span class="checked">全部</span>
							<span class="switch iconfont">&#xe697;</span> -->
						</div>
						<ul class="">
							<li v-for="(item,index) in fontLength" :class="{active:index==fontLengthNum}" @click="checkFontLength(index)">{{item}}</li>
						</ul>
					</div>
					<!-- 字符长度结束 -->
					<div class="submit-box">
						<span class="reset" @click="allClassify">重置</span>
						<span class="submit" @click="filterBack">完成</span>
					</div>
				</div>				
			</div>
		</transition>
		<!-- 筛选框结束 -->
		<!-- 用户输入电话号码框 -->
		<transition name="infomation">
			<div class="infomation" v-show="infomationActive">
				<div class="infomation-title">
					<span>提交联系电话</span>
					<span>信息严格保护，请您放心输入</span>
					<img src="@/assets/images/X.png" alt="" @click="closeInfomation">
				</div>
				<div class="infomation-con">
					<span>我对此商标感兴趣，请持有人联系我</span>
					<input type="text" placeholder="请输入您的电话号码" v-model="telephone">
					<span @click="submit">联系我</span>
				</div>
			</div>
		</transition>
		<!-- 用户输入电话号码框结束 -->
	</div>
</template>
<script>
function testTel(tel){
	var phoneNum = /^1[0-9]{10}$/;
	return phoneNum.test(tel)
}
import Top from '@/page/common/Top.vue'
import HomeBottom from '@/page/home/components/Bottom.vue'
import axios from 'axios'
import BSscroll from 'better-scroll'
export default{
	name:'List',
	components:{
		Top,
		HomeBottom,
	},
	data:function(){
		return{
			startY:0,
			noData:false,//没数据时候的开关
			keywords:'',//关键字
			telephone:'',//用户的电话号码
			tmName:'',//存放商标名
			showKeywords:false,
			updateTimeActive:false,//'新品'排序开关
			registerDateActive:false,//'下证时间'排序开关
			infomationActive:false,//弹出框开关
			loading:false,//loading
			i:1,//默认第一页			
			isActive:false,//分类列表的开关
			num:-1,//45类的index
			filter:false,//分类框开关
			classifyUl:false,//筛选框中的45大类开关
			smallCodeUl:false,//筛选框中的小类类开关
			// showHeight:false,//筛选框中小类的高度开关
			classifyList:[],//45类
			codeName:'全部分类',//大类名称
			smallCode:[],//小类
			smallNum:-1,//小类的index
			time:['满一年','满二年','满三年'],
			timeNum:-1,//下证时间的index
			style:['不限','中文','英文','中文+英文','图形','英文+图形','中文+图形','中+英+图'],
			styleNum:-1,
			fontLength:['不限','1-2字','3字','4字','5字','5字以上'],
			fontLengthNum:-1,
			ajaxDate:{
				code:'',
				smallCode:'',
				time:'',
				style:'',
				fontLength:'',
				keywords:'',
				sortLine:'',
				sort:''
			},
			list:[],//列表内容
		}
	},
	methods:{
		//分类列表框
		showClassify(){
			this.isActive = true
		},
		closeClassify(){
			this.isActive = false
		},
		//全部分类点击
		allClassify(){
			var This = this;
			this.num = -1;
			this.ajaxDate.code = ''; //将大类写入ajaxDate
			this.ajaxDate.smallCode = '' //清小类数据
			this.smallNum = -1;//清小类index
			this.smallCode = [];//将小类列表重置为空
			this.ajaxDate.time = '';//清时间数据
			this.timeNum = -1;//清时间index
			this.ajaxDate.style = '';//清组合类型数据
			this.styleNum = -1;//清组合类型index
			this.ajaxDate.fontLength = '';//清字符长度数据
			this.fontLengthNum = -1;//清风字符长度index
			this.codeName = '全部分类';
			setTimeout(function(){This.isActive = false},300)
		},
		//分类列表点击
		check(index,code){
			var This = this;
			this.ajaxDate.smallCode = '';//清小类数据
			this.smallNum = -1;//清小类index
			this.ajaxDate.time = '';//清时间数据
			this.timeNum = -1;//清时间index
			this.ajaxDate.style = '';//清组合类型数据
			this.styleNum = -1;//清组合类型index
			this.ajaxDate.fontLength = '';//清字符长度数据
			this.fontLengthNum = -1;//清风字符长度index
			this.classifyUl = false;//将筛选框中的列表隐藏
			this.num = index;
			setTimeout(function(){This.isActive = false},300)
			this.ajaxDate.code = code;
			// console.log(this.ajaxDate.code)
			axios.get('/api/tmcls/list/'+code).then((res) => {
				var data = res.data;
				if(data.restCode == 200){
					This.smallCode = data.data.rows;
					// console.log(This.smallCode)
				}
			});
			axios.get('/api/tmcls/code?code='+code).then((res) => {
				var data = res.data;
				if(data.restCode == 200){
					This.codeName = data.data.name;
					// console.log(This.codeName)
				}
			})
		},
		//小类点击
		checkSmallCode(index,smallCode){
			this.ajaxDate.smallCode = smallCode;
			this.smallNum = index;
			var This = this;
			setTimeout(function(){This.smallCodeUl = false;},300)
		},
		//下证时间点击
		checkTime(index){
			this.ajaxDate.time = index+1;
			this.timeNum = index;
		},
		//组合类型点击
		checkStyle(index){
			this.styleNum = index;
			if(index==0){
				this.ajaxDate.style = '';
			}else{
				this.ajaxDate.style = index;
			}
		},
		//字符长度点击
		checkFontLength(index){
			this.fontLengthNum = index;
			if(index==0){
				this.ajaxDate.fontLength = '';
			}else{
				this.ajaxDate.fontLength = index+1;
			}
		},
		//筛选框样式
		showFilter(){
			this.filter = true
		},
		filterBack(){
			this.filter = false;
			this.classifyUl = false;
		},
		//筛选框中的45类列表开关 =>title
		classifyUlClike(){
			this.classifyUl = true;
		},
		//筛选框中小类的开关 =>title
		showSmallCodeUl(){
			this.smallCodeUl = true;
		},
		//筛选框中小类的开关 =>title
		// smallCodeClick(){
		// 	this.showHeight = true;
		// },
		//调取45类
		getClassifyList(){
			var This = this;
			axios.get('/api/tmcls/list').then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					This.classifyList = data.data.rows;
					// console.log(data)
				}
			})
		},
		//关键字搜索
		search(){
			this.ajaxDate.keywords = this.keywords;
		},
		//删除关键字
		clearKeywords(){
			this.ajaxDate.keywords = '';
			this.keywords = '';
			this.showKeywords = false;
			this.$refs.keywords.placeholder = '搜索商标';
		},
		focus(){
			this.$refs.keywords.placeholder = '';
			this.showKeywords = true;
		},
		//新品排序
		updateTime(){
			if(this.updateTimeActive == false){
				this.updateTimeActive = true;
				this.registerDateActive = false;//关掉旁边的active
				this.ajaxDate.sortLine = 'updateTime';
				this.ajaxDate.sort = 'asc';
			}else{
				this.updateTimeActive = false;
				this.ajaxDate.sortLine = '';
				this.ajaxDate.sort = '';
			}
		},
		//下证时间排序
		registerDate(){
			if(this.registerDateActive == false){
				this.registerDateActive = true;
				this.updateTimeActive = false;//关掉旁边的active
				this.ajaxDate.sortLine = 'registerDate';
				this.ajaxDate.sort = 'asc';
			}else{
				this.registerDateActive = false;
				this.ajaxDate.sortLine = '';
				this.ajaxDate.sort = '';
			}
		},
		//弹出框
		showInfomation(){
			this.infomationActive = true;
		},
		//关闭弹出框
		closeInfomation(){
			this.infomationActive = false;
		},
		toProduct(id,name){
			this.tmName = name;
			this.$router.push({
				path:'product/'+id,
			})
		},
		//提交电话号码
		submit(){
			this.infomationActive = false;//关闭弹出框
			var This = this;
			var tmName = this.tmName
			var t = this.telephone;
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
		},
		//发送ajax
		sendAjax(){
			var This = this;
			var i = this.i
			// console.log(i)
			var code = this.ajaxDate.code;//大类
			var smallCode = this.ajaxDate.smallCode;//小类
			var time = this.ajaxDate.time;//下证时间
			var style = this.ajaxDate.style;//组合类型
			var fontLength = this.ajaxDate.fontLength;//字符长度
			var keywords = this.ajaxDate.keywords;//关键字
			var sortLine =  this.ajaxDate.sortLine;//排序方法
			var sort = this.ajaxDate.sort;//排序方式
			var This = this;
			var qs = require('qs')
			axios.post('/api/trademark/',qs.stringify({'firstClsCode':code,'secondClsList':smallCode,'registerYears':time,'tmNameType':style,'tmNameCount':fontLength,'search':keywords,'sortLine':sortLine,'sort':sort,'pageNum':i,'pageSize':6})).then(function(res){
				var data = res.data;
				if(data.restCode == 200){
					// console.log(data)
					// This.list = data.data.result.rows.concat(This.list);
					var length = data.data.result.rows.length;
					if(length==0){
						This.$layer.toast({
							className:'icon-warn',
							content:'已经没有更多了',
							time:2000
						})
						This.loading = false;
						This.noData = true;
					}
					This.list = This.list.concat(data.data.result.rows)
					This.$nextTick(() => {
						if(!This.scroll){
							This.scroll = new BSscroll(This.$refs.wrapper,{
								click: true,
								probeType: 3,
								pullUpLoad:{
									threshold: -20
								}
							})
							This.scroll.on('pullingUp',() => {
								// This.i=i+1;
								This.loadData()
								This.scroll.finishPullUp();
								This.loading = true;
							})
							// This.scroll.scrollTo(0,This.startY)
							This.scroll.on('scroll',(pos) => {
								This.startY = -Math.abs(Math.round(pos.y))
							})
						}else{
							This.scroll.refresh()
						}
					})
				}
				This.i=i+1;//页数+1
			})
		},
		loadData(){
			this.sendAjax()
		},
	},
	created(){
		// if(this.$route.query.classify){
		// // classify页面进入
		// 	this.ajaxDate.smallCode = this.$route.query.searchCode;
		// 	this.check(this.$route.query.index,this.$route.query.classify);
		// 	this.smallNum = this.$route.query.smallIndex;
		// // classify页面进入结束
		// }else{
		// // 首页顶部搜索栏进入
		// 	this.showKeywords = true;
		// 	this.keywords = this.$route.query.keywords;
		// 	this.search()
		// // 首页顶部搜索栏进入结束
		// }
		// // this.loadData();
	},
	mounted(){
		this.getClassifyList();
	},
	watch:{
		ajaxDate:{
			// immediate:true,
			handler(){
				this.i=1;//分页重置为1
				this.list = []//list重置为空
				this.noData = false;//无数据置为空
				this.$nextTick(() => {
					this.loadData();//条件改变后重新加载
				})
			},
			deep:true
		},
		// $route(to,from){
		// 	var This = this;
		// 	if(this.scroll){
		// 		This.scroll.scrollTop(0,This.startY)
		// 	}
		// }
	},
	beforeRouteEnter (to, from, next){
		if(from.name == 'Product'){
			to.meta.isBack = true;
		}
		next(vm => {
		    if (vm.scroll) {
		      vm.scroll.refresh()
		    }
		})
	},
	activated(){
		// alert(this.startY)
		this.$nextTick(() => {
			if(this.scroll){
				this.scroll.scrollTo(0,this.startY)
			}
		})
		if(!this.$route.meta.isBack){
			// this.loadData();
			if(this.$route.query.classify){
			// classify页面进入
				this.ajaxDate.smallCode = this.$route.query.searchCode;
				this.check(this.$route.query.index,this.$route.query.classify);
				this.smallNum = this.$route.query.smallIndex;
			// classify页面进入结束
			}else{
			// 首页顶部搜索栏进入
				this.showKeywords = true;
				this.keywords = this.$route.query.keywords;
				this.search()
			// 首页顶部搜索栏进入结束
			}
		}
		this.$route.meta.isBack=false
	}
}
</script>
<style scoped>
	.list-header{position: fixed;z-index: 1; background: white;}
	.list-fast{width: 100vw;height:11vw;background: #D3D3D3;overflow: hidden;display: flex;align-items: center;}
	.list-fast .input-warp{margin:0 auto;width: 90vw; height: 8vw;}
	.list-fast input{float: left; height: 100%;width: 59vw;border:none;outline: none;-webkit-appearance:none;border-radius:0; border-top-left-radius: 5.3vw;border-bottom-left-radius: 5.3vw;color: #A0A0A0;padding-left: 3vw;}
	.list-fast .submit{float: left; display: inline-block; height: 100%;padding-left: 3vw; line-height: 8vw; width: 25vw;letter-spacing: 1px;color: white; font-size: .8rem;background: #DC6060;border-top-right-radius: 5.3vw;border-bottom-right-radius: 5.3vw;}
	@media screen and (max-width: 320px) {
		.list-fast .submit{letter-spacing: 0px;font-size: .1rem;}
	}
	.list-search{width: 100vw;height:11vw;background: white;overflow: hidden;display: flex;align-items: center;}
	.list-search .search-warp{margin:0 auto;width: 90vw; height: 8vw;display: flex;position: relative;}
	.list-search .search-warp input{height: 100%;width: 55vw;border:none;outline: none;-webkit-appearance:none;border-radius:0; border-top-left-radius: 5.3vw;border-bottom-left-radius: 5.3vw;color: #EFEFEF;padding-left: 3vw;background: #EFEFEF;}
	.list-search .search-warp .keywords{position: absolute;top: 1vw;left: 5vw; height: 6vw;line-height: 6vw; font-size: .7rem;background: rgba(0,0,0,0.3);padding: 0 2vw;border-radius: 3px;}
	.list-search .search-warp .keywords img{display: inline-block;height: 3vw;width: 3vw;}
	.list-search .search-classify{flex: 1; width: 22vw; height: 8vw;line-height: 8vw; font-size: .7rem;color: #E50011;background: #EFEFEF;display: flex;align-items: center;}
	.list-search .search-classify .triangle{display: inline-block;margin: 1vw 2vw 0; width: 0;height: 0;border-width: 4px;border-top: 5px; border-style: solid;border-color: #E50011 transparent transparent transparent;}
	.list-search .search-classify .line{display: inline-block; width: 1px;height: 6vw;background: #CACACA;}
	.list-search .search-warp .submit{box-sizing: border-box; display: inline-block; height: 100%;padding-left: 2vw;width: 13vw; border-top-right-radius: 5.3vw;border-bottom-right-radius: 5.3vw;background: #EFEFEF;color: #E50011;font-size: 7vw;}
	.filter{box-sizing: border-box;display: flex; width:100vw;height: 11.7vw;border-top: 1px solid #EFEFEF;border-bottom: 1px solid #EFEFEF;background: white;}
	.filter ul{width: 76.5%;height: 100%;display: flex;justify-content: center;}
	.filter ul li{width: 21.6vw;text-align: center;line-height: 10.8vw;font-size: .7rem;}
	.filter ul li.active{color: #E50011;}
	.filter-icon{box-sizing: border-box;width: 23.5%;color: #E50011;font-size: .7rem;line-height: 10.8vw;text-align: center;border-left: 1px solid #EFEFEF;display: flex;justify-content: center;}
	.filter-icon>span:nth-of-type(2){font-size: 8vw;line-height: 11.7vw;}
	.list-con{box-sizing: border-box;position: absolute;top: 45.4vw; height: calc(100vh - 45.4vw);overflow: hidden;}
	.list-con ul li{box-sizing: border-box;border-bottom: 1px solid #EFEFEF;}
	.list-con ul li a{box-sizing: border-box;padding: 3.3vw 3.3vw;display: flex;width: 100%;height: 100%;height: 33vw;}
	.list-con ul li a img{width: 26.2vw; height: 100%;border-radius: 2vw;}
	.list-con ul li a div{flex: 1;box-sizing: border-box; font-size: .7rem;color: #ACACAC;padding-left: 3.3vw;display: flex;flex-direction: column; align-content:space-between;}
	.list-con ul li a div span{display: block;width: 100%;}
	.list-con ul li a span.name{font-size: 3.6vw;letter-spacing: .8px; color: black;}
	.list-con ul li a span.code{margin: 1vw 0;}
	.list-con ul li a span.range{height: 10vw; overflow: hidden;line-height: 5vw;}
	.list-con ul li a span.commit{box-sizing: border-box;align-self:flex-end;width: 18vw;border:1px solid #E50011;text-align: center;border-radius: 1vw;line-height: 5vw;color: #E50011;padding-bottom: 1px;}
	@media screen and (max-width: 360px) {
		.list-con ul li a span.range{height: 10vw; overflow: hidden;line-height: 8vw;text-overflow:ellipsis;}
	}
	.list-con ul li .tel{width: 100%;height: 44.6vw;padding: 0 0; background: #EFEFEF;}
	.list-con ul li .tel span:nth-of-type(1){display: block; line-height: 10.5vw;text-align: center;color: #E50011;letter-spacing: 1px;}
	.list-con ul li .tel input:nth-of-type(1){display: block;width: 90vw;margin: 0 auto; height: 10vw;line-height: 10vw;border-radius:5vw;outline: none;border:none;text-align: center;letter-spacing: 1px;}
	.list-con ul li .tel .submit{display: block;width: 90vw;margin: 3vw auto 0; height: 10vw;line-height: 10vw;border-radius:5vw;background: #E50011;color: white;font-size: 3.5vw;text-align: center;letter-spacing: 1px;}
	.list-con ul li .tel span:nth-of-type(3){display: block; line-height: 10.5vw;text-align: center;color: #ACACAC;font-size: 3.5vw}
	.list-con ul .noData{width: 100vw;}
	.list-con ul .noData .notice{padding-top: 10vw;padding-bottom: 5vw;border-bottom: 1px solid #EFEFEF;}
	.list-con ul .noData .notice span{display: block;width: 100%;font-size: 4vw;color: black;text-align: center;}
	.list-con ul .noData .noData-form{padding-top: 5vw;padding-bottom: 8vw;}
	.list-con ul .noData .noData-form span{display: block;text-align: center;}
	.list-con ul .noData .noData-form span:nth-of-type(1){width: 100%;color: #E50011;font-size: 4vw;}
	.list-con ul .noData .noData-form input{display: block;margin: 3vw auto; width: 70vw;height: 10vw;outline: none;border:1px solid #EFEFEF;text-align: center;border-radius: 5vw;font-size: .7rem;}
	.list-con ul .noData .noData-form span:nth-of-type(2){margin: 0vw auto; width: 70vw;line-height: 10vw;border-radius: 5vw;font-size: .7rem;background: #E50011;color: white;}
	.list-con ul .noData .noData-form span:nth-of-type(3){margin-top: 3vw; font-size: .7rem;color: #ACACAC;}
	.list-con ul .load{width: 100%;height: 6vw;line-height: 6vw;text-align: center;font-size: .7rem;color: #ACACAC;}
	.body-wrap{display: none;z-index: 2; position: fixed;justify-content: center;align-items: center; width: 100vw;height: 100vh;top: 0;background:rgba(0,0,0,.4);}
	.classifyActive{display: flex;}
	.classify-box{box-sizing:border-box; padding: 4vw 10.6vw; width: 62vw;height: 106vw;border-radius: 2vw; box-shadow: 0px 0px 2px 2px #666; background: white;}
	.classify-box ul{width: 100%;height: 90.6vw;overflow-y: scroll;}
	.classify-box ul li{width: 100%;height:9.3vw;border-bottom: 1px solid #EFEFEF;display: flex;justify-content: flex-end;align-items: center;}
	.classify-box ul li .code{line-height:9.3vw;flex: 1;text-align: left;letter-spacing: .5px;font-size: 3.5vw;}
	.classify-box ul li .check{box-sizing: border-box; width: 3vw;height: 3vw; margin-right: 3vw; padding: 1vw; border-radius: 50%;border:.5px solid black;}
	.classify-box ul li .active{background: #E50011;border:none;}
	.classify-box .to{display: block; width: 100%;text-align: center; line-height: 8vw;font-size: .7rem;color: #E50011;}
	.filter-wrap{z-index: 2; box-sizing: border-box;width: 100vw;position: fixed;top: 0;right: 0; display: flex;}
	.filter-back{flex: 1;}
	.filter-box{box-sizing: border-box;justify-content: center;align-items: center; width: 75vw;height: 100vh;padding: 0 3vw;border-left:1px solid #DCDCDC; background: white;position: relative;}
	/*筛选框进出动画*/
	.slide-fade-enter-active{transition: all .3s ease;}
	.slide-fade-leave-active{transition: all .5s ease;}
	.slide-fade-enter{transform: translateX(100vw);}
	.slide-fade-leave-to{transform: translateX(100vw);}
	/*筛选框进出动画结束*/
	.filter-box .title{width: 100%;line-height: 10.5vw;border-bottom: 1px solid #EFEFEF;text-align: center;font-size: 5vw;letter-spacing: 1px;}
	.filter-box .condition{padding-bottom: 2vw; border-bottom: 1px solid #EFEFEF;}
	/*.filter-box .classify{border-bottom: none;padding-bottom: 0;}*/
	.filter-box .condition-title{display: flex; line-height: 10vw;font-size: 4vw;justify-content: space-between;}
	.filter-box .condition-title .checked{font-size: .7rem;color: #5EAFE3;flex: 1;text-align: right;}
	.filter-box .condition-title .switch{transform:rotate(180deg);}
	.classify .scroll-wrap{box-sizing: border-box;height: 100vh;padding-bottom: 33.5vw;overflow-y: scroll;}
	/*筛选框中45类列表进出动画*/
	.classifyUl-enter-active{transition: all .3s ease;}
	.classifyUl-leave-active{transition: all .3s ease;}
	.classifyUl-enter{transform: translateX(100vw);}
	.classifyUl-leave-to{transform: translateX(100vw);}
	/*筛选框中45类列表进出动画结束*/
	.classify .classify-ul{font-size: 3.6vw;line-height: 10.5vw;}
	.classify .classify-ul li{box-sizing: border-box; width: 100%;border-bottom: 1px solid #EFEFEF;}
	.showHeight{height: auto;max-height: 48vw;overflow-y: scroll;}
	.filter-box .condition ul{display: flex;justify-content: space-between;flex-wrap: wrap;}
	.filter-box .condition ul li{margin-top: 2vw; width: 20vw;line-height: 6vw;border-radius: 1vw; background: #EFEFEF;text-align: center;font-size: .7rem;}
	.filter-box .condition ul li.active{background: #E50011;color: white;}
	/*.filter-box .condition ul:after{content: "";flex: auto;}*/
	.filter-box .condition ul:after{content: "";width: 20vw;}
	.filter-box .submit-box{position: absolute;bottom: 0;left: 0;display: flex; width: 100%;height: 13vw;border-top: 1px solid #EFEFEF;}
	.filter-box .submit-box span{width: 50%;line-height: 13vw;font-size: 4vw;text-align: center;letter-spacing: 1px;background: white; }
	.filter-box .submit-box .submit{background: #E50011;color:white;}
	/*弹出框*/
	.infomation{position: fixed;z-index: 2; top: 40vh;left: 12vw; width: 76vw;height: 45vw;box-shadow: #ACACAC 0px 0px 8px;border-radius: 2vw;background: white;}
	.infomation span{display: block;text-align: center;}
	.infomation .infomation-title{height: 12vw;background: #EFEFEF;position: relative;}
	.infomation .infomation-title span:nth-of-type(1){line-height: 7vw;font-size: 4vw;color: black;}
	.infomation .infomation-title span:nth-of-type(2){line-height: 4vw;font-size: .7rem;color: #E50011;}
	.infomation .infomation-title img{position: absolute;top: 2vw;right: 2vw;}
	.infomation .infomation-con{background: white;}
	.infomation .infomation-con span:nth-of-type(1){line-height: 10vw;font-size: 3.6vw;color: black;}
	.infomation .infomation-con input{display: block;margin: 0 auto; width: 55vw;height: 8vw;outline: none;border:1px solid #EFEFEF;text-align: center;border-radius: 4vw;font-size: .7rem;}
	.infomation .infomation-con span:nth-of-type(2){margin: 3vw auto; width: 55vw;line-height: 8vw;border-radius: 4vw;font-size: .7rem;background: #E50011;color: white;}
	.infomation-enter-active, .fade-leave-active {transition: opacity .5s;}
	.infomation-enter, .infomation-leave-to{opacity: 0;}
</style>