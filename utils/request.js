
export function request(method, url, data, callback, errFun){
/**
   * 封装wx.request请求
   * method： 请求方式
   * url: 请求地址
   * data： 要传递的参数
   * callback： 请求成功回调函数
   * errFun： 请求失败回调函数·
   **/
    wx.request({
      url: getApp().globalData.baseUrl+url,
      method: method,
      data: data,
      header: {
        'content-type': method == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        callback(res);
      },
      fail: function (err) {
        errFun(err);
      }
    })
}

