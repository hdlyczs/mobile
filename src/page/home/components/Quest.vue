<template>
	<div class="quest-wrap">
		<p>咨询专业顾问<span>我们乐于且免费回答您的所有问题</span></p>
		<div class="input-warp">
			<input ref="tel" type="text" placeholder="请输入您的手机号" v-model="telephone">
			<span class="submit" @click="submit">60S快速响应</span>
		</div>
	</div>
</template>
<script>
function testTel(tel){
	var phoneNum = /^1[0-9]{10}$/;
	return phoneNum.test(tel)
}
import axios from 'axios'
export default {
	name:'HomeQuest',
	data(){
		return{
			telephone:''
		}
	},
	methods:{
		submit:function(){
			var This = this;
			var telephone = this.telephone;
			var qs = require('qs')
			if(testTel(telephone)){
				axios.post('/api/customer/intention',qs.stringify({'telephone':telephone})).then(function(res){
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
	}
}
$(function(){
	// alert('1')
})
</script>
<style scoped>
	.quest-wrap{width: 100vw;height: 24.4vw;background: #D3D3D3;overflow: hidden;}
	.quest-wrap p{margin-top: 2vw; padding-left: 5vw; font-size: 4vw;color: #555555;}
	.quest-wrap p span{margin-left: 18vw; font-size: .7rem;color: #A0A0A0;}
	@media screen and (max-width: 320px) {
		.quest-wrap p span{margin-left: 12vw;}
	}
	.quest-wrap .input-warp{margin:0 auto;margin-top: 2.5vw; width: 90vw; height: 10.6vw;}
	.quest-wrap input{float: left; height: 100%;width: 59vw;-webkit-appearance:none;border:none;outline: none;border-radius:0; border-top-left-radius: 5.3vw;border-bottom-left-radius: 5.3vw;color: #A0A0A0;padding-left: 3vw;}
	.quest-wrap .submit{float: left; display: inline-block; height: 100%;padding-left: 3vw; line-height: 10.6vw; width: 25vw;letter-spacing: 1px;color: white; font-size: .8rem;background: #DC6060;border-top-right-radius: 5.3vw;border-bottom-right-radius: 5.3vw;}
	@media screen and (max-width: 320px) {
		.quest-wrap .submit{letter-spacing: 0px;font-size: .1rem;}
	}
</style>