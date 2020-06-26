<template>
	<view>
		<view>输入搜索关键字</view>
		<input placeholder="搜索" @change="search" v-model="searchContent"></input>
		<!-- <button @click="downloadPic">下载</button>
		<button @click="viewdPic">预览</button>
		<image src="https://192.168.233.1:8083/pic/dec36a7e-39f5-42e7-8f0e-c39a0c2b2940.jpg"></image>
		<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1334825063,3985984119&fm=26&gp=0.jpg" tap="previewImage"></img>
		这是下载图片界面
		<view>{{msg}}</view>
		<button @click="sendRequest">測試網絡請求</button> -->
		<!-- 循环遍历图形 -->
		<view>
			<view v-for="(temp,index) in searchResult" :key=index>
				<image :src="temp.picUrl"></image>
				<view> {{temp.picInfo}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				msg: "",
				searchContent: "",
				searchResult: []

			}
		},
		methods: {
			search() {
				let self = this
				console.log(self.Global.webUrl + "/picture/select/" + self.searchContent,)
				uni.request({
					url: self.Global.webUrl + "/picture/select/" + self.searchContent,
					success(res) {
						self.msg = res
						console.log(res)
						self.searchResult = res.data.t
						console.log(self.searchResult)
					}
				})
			},
			sendRequest() {
				let self = this
				uni.request({
					url: "http://192.168.233.1:8083/picture/download",
					success(res) {
						self.msg = res
					}
				})
			},
			previewImage: function(index) {
				//uniapp预览轮播图
				uni.previewImage({
					urls: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1334825063,3985984119&fm=26&gp=0.jpg" //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
				})
			},
			changeView() {
				this.show = true
			},
			downloadPic() {
				uni.downloadFile({
					url: "http://localhost:8083/picture/download",
					success(res) {
						debugger
						console.log(res)
						uni.previewImage({
							urls: res.tempFilePath
						})
					}
				})
			},
			viewdPic() {
				uni.downloadFile({
					url: "http://localhost:8083/picture/upload", // 这里是你接口地址 若要传参 直接 url拼接参数即可
					success: (res) => {
						console.log(res, 'res')
						var tempFilePath = res.tempFilePath; // 这里拿到后端返回的图片路径
						uni.saveImageToPhotosAlbum({ // 然后调用这个方法
							filePath: tempFilePath,
							success: (res) => {
								uni.hideLoading();
								uni.showToast({
									title: '图片已保存'
								})
							}
						})
					},
					fail: () => {
						uni.hideLoading();
					}
				});
				debugger
				// uni.previewImage({
				// 	urls:"http://localhost:8083/pic/dec36a7e-39f5-42e7-8f0e-c39a0c2b2940.jpg"
				// })
			}
		}
	}
</script>

<style>
</style>
