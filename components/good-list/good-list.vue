<template>
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
</template>

<script>
	export default {
		name:"good-list",
		data() {
			return {
			};
		},
		props:{
			goods:Array
		}
	}
</script>

<style lang="scss">
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
</style>
