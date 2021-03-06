// let baseURL='http://192.168.2.101:3000';
// let baseURL='http://localhost:60000';
// let baseURL='http://103.46.128.53:17434'; 
let baseURL='http://e5c3920807.51vip.biz:17434'; 

function request(options){
	uni.showLoading({
	        title:"Loading"
	    })
	let headers={}
	headers["Content-Type"] = "application/x-www-form-urlencoded";
	return new Promise((res,rej)=>{
		uni.request({
			url:baseURL + options.url,
			method:options.method || 'GET',
			data:options.data,
			header:headers,
			success(data) {
				res(data)
			},
			fail() {
				rej()
			},
			complete(){
			    uni.hideLoading();
			 }
		})
	})
	
}
export default request;