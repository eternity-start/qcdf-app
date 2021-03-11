<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper class="swiper1" circular autoplay indicator-dots indicator-color="#ffffff" indicator-active-color="#003952">
			<swiper-item v-for="item in swiper" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view @click="getGoodList(items.path)" class="item" v-for="(items,index) in navs" :key="index">
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
			<good-list :goods="goods"></good-list>
		</view>
	</view>
</template>

<script>
	import goodList from '../../components/good-list/good-list.vue'
	export default {
		components:{
			'good-list':goodList
		},
		data() {
			return {
				swiper:[],
				goods:[],
				navs: [
				  {
				    icons: "iconfont icon-ziyuan",
				    title: "学习超市",
				    path: "/goods/good-list/good-list"
				  },
				  {
				    icons: "iconfont icon-tupian",
				    title: "学习图片",
				    path: "/goods/study-img/study-img"
				  },
				  {
				    icons: "iconfont icon-guanyuwomen",
				    title: "联系我们",
				    path: "/goods/callme/callme"
				  },
				  {
				    icons: "iconfont icon-shipin",
				    title: "学习视频",
				    path: "/goods/study-voide/study-voide"
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
			//获取商品
			async getGoods() {
				//封装
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1',
					method:'GET'
				})
				this.goods = res.data.message
			},
			// 点击导航
			getGoodList(url){
				uni.navigateTo({
					url
				})
				// console.log(url)
			}
		}
	}
</script>

<style lang="scss">
	@import url('../../static/fonts/iconfont.css');
	.home{
		.swiper1{
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
			
		}
	}
</style>