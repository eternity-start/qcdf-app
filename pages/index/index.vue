<template>
	<view class="">
    <view class="" v-for="item in lbList">
      {{item}}
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lbList:[]
			}
		},
		onLoad() {
    this.getLb()
		},
		methods: {
      getLb(){
        uni.request({
          url:"http://localhost:8082/api/getlunbo",
          success:function(res){
            console.log(res.data)
            this.lbList = res.data.message
          }
        })
      }
		}
	}
</script>

<style>
	
</style>
