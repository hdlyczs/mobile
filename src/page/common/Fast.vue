<template>
	<div class="fast">
		<div class="input-warp">
			<input type="text" placeholder="请输入您的手机号" v-model="telephone">
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
export default{
	name:'fast',
	data(){
		return{
			telephone:'',
		}
	},
	methods:{
		submit(){
			var This = this;
			var t = this.telephone;
			if(testTel(t)){
				var qs = require('qs')
				axios.post('/api/customer/intention/',qs.stringify({'telephone':t})).then(function(res){
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
</script>
<style>
	.fast{width: 100vw;height:17vw;background: #D3D3D3;overflow: hidden;display: flex;align-items: center;}
	.fast .input-warp{margin:0 auto;width: 90vw; height: 10.6vw;}
	.fast input{float: left; height: 100%;width: 59vw;border:none;outline: none;-webkit-appearance:none;border-radius:0;border-top-left-radius: 5.3vw;border-bottom-left-radius: 5.3vw;color: #A0A0A0;padding-left: 3vw;}
	.fast .submit{float: left; display: inline-block; height: 100%;padding-left: 3vw; line-height: 10.6vw; width: 25vw;letter-spacing: 1px;color: white; font-size: .8rem;background: #DC6060;border-top-right-radius: 5.3vw;border-bottom-right-radius: 5.3vw;}
	@media screen and (max-width: 320px) {
		.fast .submit{letter-spacing: 0px;font-size: .1rem;}
	}
</style>