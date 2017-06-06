//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  linkTo:function(mod){
    wx.navigateTo({
      url: '/pages/'+mod+'/index',
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getfooterMenu: function (cb){
    var that = this
    if (this.globalData.menu) {
      typeof cb == "function" && cb(this.globalData.menu)
    } else {
     that.globalData.menu = [
       { 'title': '首页', 'link': 'index' },
       { 'title': '求婚钻戒', 'link': 'product' },
       { 'title': '爱的礼物', 'link': 'goods' },
       { 'title': '钻石定制', 'link': 'gift' },
     ]
     typeof cb == "function" && cb(that.globalData.menu)
    }
  },
  loadingStart:function(){
    wx.showLoading({
      title: '加载中...',
    })
  },
  loadingEnd:function(){
    wx.hideLoading()
  },
  globalData:{
    userInfo:null,
    menu:null
  }
})