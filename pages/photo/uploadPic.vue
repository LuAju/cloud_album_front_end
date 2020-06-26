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
			<input style="height: 50px;" class="uni-input" type="text" v-model="picInfo" placeholder="请输入" />
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
				picInfo: ""
			}
		},
		methods: {
			chooseImg() {
				let self = this
				uni.chooseImage({
					count: self.fileCount,
					sizeType: ['origin'],
					success(res) {
						let imgFile = res.tempFilePaths
						console.log(imgFile[0])
						self.filePath = imgFile[0]

						// 修改，选完图片直接上传
						uni.uploadFile({
							url: self.Global.webUrl + "/picture/upload",
							filePath: self.filePath,
							name: "multipartFile",
							success(res) {
								console.log("res",res)
								console.log(res.data)
								self.imgSrc = res.data
							}
						})
					}
				})
			},
			upload() {
				let self = this
				if (self.imgSrc == "" && self.picInfo == "") {
					return;
				}
				console.log("src",self.imgSrc)
				console.log("pic",self.picInfo)
				// 文件上传
				uni.request({
					url: this.Global.webUrl + "/picture/insert",
					data: {
						picInfo: self.picInfo,
						picUrl: self.imgSrc
					},
					method: 'POST',
					success(res) {
						self.picInfo = ""
						self.picUrl = ""
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
