<template>
	<view>
		<good-list :goods="goods"></good-list>
		<view class="over_line" v-if="flag">
			-----------------我是有底线的-------------------
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
				goods:[],
				pageindex:1,
				flag:false
			}
		},
		// 页面加载显示事件
		onLoad() {
			this.getGoods()
		},
		// 上拉刷新
		onReachBottom() {
			this.pageindex++
			//重新渲染
			this.getGoods()
			console.log(this.pageindex)
			console.log(this.goods.length)
			if(this.pageindex>=3) {
				this.flag = true
				uni.showToast({
					title:'我也是有底线的',
					duration:1000,
					// icon:'loading'
				})
			}
		},
		// 下拉刷新
		onPullDownRefresh(){
			// this.pageindex++
			// console.log('finish')
			setTimeout(()=>{
				uni.stopPullDownRefresh()
				// this.getGoods()
			},1000)
			
		},
		methods: {
			async getGoods(){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex='+this.pageindex,
					method:'GET'
				})
				// 让goods数据增加
				this.goods = [...this.goods,...res.data.message]
			}
		}
	}
</script>

<style>
.over_line{
	text-align: center;
}
</style>
