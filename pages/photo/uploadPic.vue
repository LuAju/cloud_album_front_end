<template>
	<view>
		<uni-popup ref="popup" type="bottom">上传成功</uni-popup>
		<view>
			<button @click="chooseImg">点击选择图片</button>
		</view>
		<view>
			<!-- <image :src=imgSrc v-show=""></image>	 -->
		</view>
		<view>
			上传图片
		</view>
		<view>
			输入详情
			<input style="height: 50px;" class="uni-input" type="text" v-model="picInfo" placeholder="请输入"/>
		</view>
		<view>
			<button @click="upload">点击上传</button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 可支持上传的图片数量
				fielCount: 1,
				// 文件地址
				filePath: "",
				imgSrc: "",
				picInfo:""
			}
		},
		methods: {
			chooseImg() {
				let self = this
				uni.chooseImage({
					count: self.fileCount,
					success(res) {
						let imgFile = res.tempFilePaths
						console.log(imgFile[0])
						self.filePath = imgFile[0]
						// 预览图片
						// uni.previewImage({
						// 	urls:res.tempFilePaths
						// })
					}
				})
			},
			upload() {
				let self = this
				if (self.filePath == "" && self.picInfo == "") {
					return ;
				}
				// 文件上传
				uni.uploadFile({
					url: this.Global.webUrl + "/picture/upload",
					filePath: self.filePath,
					name: "multipartFile",
					success(res) {
						if (res.resultCode == "SUCCESS") {
							self.$refs.popup.open()
						}
					}
				})
			}
		}
	}
</script>

<style>

</style>
