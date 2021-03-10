// 一次方法
getSwitch(){
	uni.request({
		url:'http://localhost:8082/api/getlunbo',
		method:'GET',
		data:'',
		success:res=>{
			if(res.data.status !== 0){
				uni.showToast({
				    title: '获取数据失败' }); }
			this.switch = res.data.message } }) }
//1.二次封装
const baseurl = 'http://localhost:8082'
export const myRequest = (options) => {
	return new Promise((resolve,reject)=>{
		uni.request(){
			url:baseurl+options.url,
			method:options.method,
			success(res){
				if(res.data.status !== 0){
					uni.showToast({
						title:'获取数据失败'
					})
				},
				resolve(res)
			},
			fail(err){
				reject(err)
			}
		}
	}
})
//2.添加到vue的原型上
import {myRequest} from '../util/api.js'
Vue.prototype.$myRequest = myRequest
//3.调用
async getSwitch(){
	const res = await this.$myRequest({
		method:'GET',
		url:'/api/getlunbo'
	})
	this.switch = res.data.message
}
