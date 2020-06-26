<template>
<!-- 	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
<		<div>欢迎使用与你相ssa册</div>
	</view> -->
	<div>
		<div> 欢迎使用云相册</div>
		<div> d va 爱你呦</div>
		<a href="http://www.baidu.com">有事找我</a>
		<!-- <view>		
			<button @click="toPage2">点击跳s 转</button>
		</view>	 -->
		<view>
			<button @click="toPage2">点击上传图片</button>
		</view>
		<view>
			<button @click="toPage3">点击搜索图片</button>
		</view>
		<!-- <view>
			<navigator url="../index2" open-type="navigate">navigate</navigator>
		</view>
		<view>
			<navigator url="../index2" open-type="navigateBack">navigateBack</navigator>
		</view>
		<view>
			<navigator url="../index2" open-type="reLaunch">reLaunch</navigator>
		</view>
		<view>
			<navigator url="../index2" open-type="switchTab">switchTab</navigator>
		</view>
		<view>
			<navigator url="../index2" open-type="redirect">redirect</navigator>
		</view> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			toPage2(){
				uni.navigateTo({
					url:"/pages/photo/uploadPic"
					
				})
			},
			toPage3(){
				uni.navigateTo({
					url:"/pages/photo/downloadPic"
					
				})
			}		
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
