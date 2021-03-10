<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper circular autoplay indicator-dots indicator-color="#ffffff" indicator-active-color="#003952">
			<swiper-item v-for="item in swiper" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view  class="item" v-for="(items,index) in navs" :key="index">
				<view :class="items.icons"></view>
				<text>{{items.title}}</text>
			</view>
			<!-- <view class="item">
				<view class="iconfont icon-shipin"></view>
				<text>频道专区</text>
			</view>
			<view class="item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view> -->
		</view>
		<!-- 推荐 -->
		<view class="recommend">
			<!-- 推荐文字 -->
			<view class="title">
				<text>推荐商品</text>
			</view>
			<!-- 推荐图片 -->
			<view class="goods-list">
				<view class="goods-item" v-for="items in goods" :key="items.id">
					<image :src="items.img_url" mode=""></image>
					<view class="price">
						<text>{{items.sell_price}}</text>
						<text>{{items.market_price}}</text>
					</view>
					<view class="name">
						{{items.title}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[],
				goods:[],
				navs: [
				  {
				    icons: "iconfont icon-ziyuan",
				    title: "学习超市",
				    path: "/pages/goods/list"
				  },
				  {
				    icons: "iconfont icon-tupian",
				    title: "学习图片",
				    path: "/pages/pics/pics"
				  },
				  {
				    icons: "iconfont icon-guanyuwomen",
				    title: "联系我们",
				    path: "/pages/contact/contact"
				  },
				  {
				    icons: "iconfont icon-shipin",
				    title: "学习视频",
				    path: "/pages/videos/videos"
				  }
				]
			}
		},
		onLoad() {
		  	this.getSwiper()
			this.getGoods()
		},
		methods: {
			//二次封装的方法  获取轮播数据
			async getSwiper() {
				const res = await this.$myRequest({
					method:'GET',
					url:'/api/getlunbo'
				})
				// console.log(res.data.message)
				this.swiper = res.data.message
			},
			async getGoods() {
				// 未封装
				// uni.request({
				// 	url:'http://localhost:8082/api/getgoods?pageindex=1',
				// 	method:'GET',
				// 	success:res=>{
				// 		if(res.data.status!==0){
				// 			uni.showToast({
				// 				title:"获取数据失败"
				// 			})
				// 		}
				// 		this.goods = res.data.message
				// 	}
				// })
				//封装
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1',
					method:'GET',
				})
				this.goods = res.data.message
			}
			// 获取推荐商品数据
			// async getGoods() {
			// 	const res = await this.$myRequest({
			// 		method:'GET',
			// 		url:'/api/getgoods?pageindex=1'
			// 	})
			// 	console.log(res)
			// 	this.goods = res.data.message
			// }
		}
	}
</script>

<style lang="scss">
	@import url('../../static/fonts/iconfont.css');
	.home{
		swiper{
			height: 408rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			display: flex;
			justify-content: space-around;
			align-items: center;
			.item{
				margin-top: 10rpx;
				width: 25%;
				text-align: center;
				//line-height: 120rpx;item下的文字跟图片都会垂直居中，这样图片与文字间隔太大，不适合
				.iconfont{
					font-size: 28px;
					color: #ffffff;
					width: 120rpx;
					height: 120rpx;
					background-color: $myshop-color;
					line-height: 120rpx;//只需要给图片垂直居中就可以
					border-radius: 100rpx;
					margin: 0 auto;
				}
			}
		}
		.recommend{
			.title{
				border-top: 8px solid #eee;
				border-bottom:8px solid #eee;
				text-align: center;
				line-height: 80rpx;
				letter-spacing: 20px;
				color: $myshop-color;
				font-size: 38rpx;
			}
			.goods-list{
				display: flex;
				flex-wrap: wrap;
				padding: 10rpx;
				// box-sizing: border-box;
				background-color: #eee;
				.goods-item{
					width: 345rpx;
					box-sizing: border-box;
					padding: 10rpx;
					margin: 5rpx auto;
					background-color: #FFFFFF;
					image{
						height: 350rpx;
						width: 100%;
					}
					.price{
						text:nth-child(1){
							// font-size: 26rpx;
							color: $myshop-color;
						}
						text:nth-child(2){
							font-size: 16rpx;
							margin-left: 20rpx;
							color: #919191;
							text-decoration: line-through;
						}
					}
					.name{
						color: #646740;
						font-size: 20rpx;
					}
				}
			}
		}
	}
</style>
