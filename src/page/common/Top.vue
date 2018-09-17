<template>
	<div class="top">
		<span class="back iconfont" @click="back">&#xe697;</span>
		<span class="mode">{{msg}}</span>
		<span class="menu iconfont" @click="home">&#xe605;</span>
	</div>
</template>
<script>
	export default {
		name:'Top',
		data(){
			return{
				msg:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1) 
			},
			home(){
				this.$router.push({
					path:'/'
				})
			}
		},
		created(){
			var path = this.$route.path;
			// path = new RegExp("^[a-zA-Z]+$");
			path = path.match(/[a-zA-Z]/g).join('')
			switch(path){
				case 'copy':
					this.msg = '版权登记';
					break;
				case 'list':
					this.msg = '商标买卖';
					break;
				case 'classify':
					this.msg = '商标分类';
					break;
				case 'about':
					this.msg = '关于求标';
					break;
				case 'product':
					this.msg = '商标详情';
					break;
				case 'articleList':
					this.msg = '文章列表';
					break;
				case 'articleDetail':
					this.msg = '文章详情';
					break;
				case 'register':
					this.msg = '商标注册';
					break;
				case 'patent':
					this.msg = '专利申请';
					break;
				case 'process':
					this.msg = '流程指引';
					break;
				case 'share':
					this.msg = '商标分享';
					break;
			}
		}
	}
</script>
<style>
	.top{width: 100vw;height: 11.7vw;background: #E50011;display: flex;}
	.top span{display: inline-block;text-align: center;line-height: 11.7vw;}
	.top .back{width: 10.6vw;height: 100%;color: white;font-size: 7vw;}
	.top .mode{color: white;font-size: 5vw;letter-spacing: 1px;flex: 1;}
	.top .menu{width: 10.6vw;height: 100%;color: white;font-size: 6vw;}
</style>
