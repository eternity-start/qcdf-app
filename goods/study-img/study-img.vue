<template>
	<view class="pics">
		<scroll-view show-scrollbar class="pic-left" scroll-y scroll-top>
			<view 
			:class="active===index?'active':''"
			@click="inter(index,items.id)" 
			v-for="(items,index) in catelist" 
			:key="items.id">
				{{items.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y class="pic-right">
			<view v-for="item in interlist" :key='item.id'>
					<image :src="item.img_url" mode=""></image>
					<text>{{item.title}}</text>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				catelist:[],
				interlist:[],
				active:0
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
			async inter(index,id){
				this.active = index
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
			::-webkit-scrollbar {
					width: 0;
					height: 0;
					background-color: transparent;
				} 
			// background-color: #FFFFFF;
			width: 200rpx;
			height: 100%;
			text-align: center;
			// padding: 5rpx;
			// height: 60px;
			line-height: 60px;
			.active{
				background-color: $myshop-color;
				color: #FFFFFF;
			}
			}
		.pic-right{
			// background-color: #FFFFFF;
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			.item{
					image{
						width: 520rpx;
						height: 520rpx;
						border-radius: 5px;
						}
					text{
						font-size: 28rpx;
						line-height: 60px;
					}
				}
			}
		}
}
</style>
