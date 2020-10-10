//app.js
import {apiDoLogin} from './api/user'
App({
  globalData: {
    baseUrl: 'http://localhost:8081',
    openId:0,
  },
  onLaunch: function () {
    this.doLogin();
  },
  doLogin(e){
    let that=this;
    console.log("申请开始");
    wx.login({
      success: (res) => {
        apiDoLogin(
          res.code,
          (res)=>{
            that.globalData.openId=res.data.data.openId;
            console.log(that.globalData.openId);
          },
          (err)=>{
            console.log(err.errMsg)
          }
          )
      }
    })
  }
})