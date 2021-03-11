const baseurl = 'http://localhost:8082'
export const myRequest = (options) => {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseurl+options.url,
			method:options.method,
			success(res){
				if(res.data.status !==0 ){
					uni.showToast({
						title:'获取数据失败'
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