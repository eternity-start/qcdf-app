<template>
	<view class="pics">
		<scroll-view class="pic-left" scroll-y scroll-top>
			<view @click="inter(items.id)" class="left-item" v-for="items in catelist" :key="items.id">
				{{items.title}}
			</view>
		</scroll-view>
		<view class="pic-right" v-for="item in interlist" :key='item.id'>
			<view class="">
				<image :src="item.img_url" mode=""></image>
				<view class="">
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				catelist:[],
				interlist:[]
			}
		},
		onLoad() {
			this.getCategory()
		},
		methods: {
			async getCategory(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory',
					method:'GET'
				})
				this.catelist = res.data.message
			},
			async inter(id){
				const res = await this.$myRequest({
					url:'/api/getimages/'+id,
					method:'GET'
				})
				this.interlist = res.data.message
			}
		}
	}
</script>
<style lang="scss">
page{
	height: 100%;
	.pics{
		// background-color: #eee;
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		.pic-left{
			// background-color: #FFFFFF;
			width: 200rpx;
			height: 100%;
			.left-item{
				text-align: center;
				padding: 5rpx;
				// height: 60px;
				line-height: 60px;
				}
			}
		.pic-right{
			// background-color: #FFFFFF;
			width: 520rpx;
			margin:  0 10rpx ;
			image{
				width: 100%;
				height: 100%;
				}
			text{
				font-size: 28rpx;
				color: #424242;
				margin: 10rpx;
				padding: 10rpx;
			}
			}
		}
}
</style>
