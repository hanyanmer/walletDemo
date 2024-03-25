
// 模拟是否登录钱包
export default {
  'GET /api/v1/auth':(req:any,res:any)=>{
    res?.json({
      success:true,
      data:{login:false},
      errorCode:0
    })
  },
  'PUT /api/v1/auth':(req:any,res:any)=>{
    res?.json({
      success:true,
      data:{login:true},
      errorCode:0
    })
  }
}