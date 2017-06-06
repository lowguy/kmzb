// pages/product/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerMenu: [],
    imgH: 170,
    title: '',
    imgsInfo: []
  },
  /**
   * 跳转
   */
  linkTo: function (e) {
    var mod = e.currentTarget.dataset.type
    app.linkTo(mod)
  },
  /**
   * 初始化底部菜单
   */
  initFooterMenu: function () {
    var that = this
    app.getfooterMenu(function (menu) {
      that.setData({
        footerMenu: menu
      })
    })
  },

  /**
   * 详情页
   */
  detail: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/index?id=' + id
    })
  },

  back: function () {
    wx.navigateBack({
      delta: 2
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.initFooterMenu()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: '经典款式'
    })
    that.setData({
      title: '经典款式'
    })

    app.loadingStart()
    wx.request({
      url: 'https://www.kmzb.com.cn/classiclook', //仅为示例，并非真实的接口地址
      data: {
        is_wx: 1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.loadingEnd()
        that.setData({
          imgsInfo: res.data
        })
      }
    })
  }
})