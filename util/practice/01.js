//普通请求
gitSwitch(){
	uni.request({
		url:'https://location.8020',
		method:'GET',
		data:'data',
		success:res=>{
			if(res.data.status !== 0 ){
				uni.showToast({
					title:'获取数据失败'
				})
			}
			this.switch = res.data.message
		}
	})
}
// 封装
const baseurl = 'https://location'
export const myRequest = (options) => {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseurl+options.url,
			method:options.method,
			success(res){
				if(res.data.status !== 0){
					uni.showToast({
						title:'获取信息失败'
					})
				}
				resolve(res)
			},
			fail(err){
				reject(err)
			}
		})
	})
}
// 引用
import {myRequest} from '../api.js'
Vue.prototype.$myRequest = myRequest
// 使用
async getmethod(){
	const res =await this.$myRequest({
		url:'getlunbo/2',
		method:'GET'
	})
	this.switch = res.data.message
}