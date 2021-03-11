<template>
	<view>
		<good-list :goods="goods"></good-list>
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
				goods:[]
			}
		},
		onLoad() {
			this.getGoods()
		},
		methods: {
			async getGoods(){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1',
					method:'GET'
				})
				this.goods = res.data.message
			}
		}
	}
</script>

<style>

</style>
