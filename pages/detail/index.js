// pages/detail/index.js
var WxParse = require('../../wxParse/wxParse.js');
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    product:[],
    imgUrls: [],
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.initFooterMenu()
    var id = options.id
    var mod = options.mod ? options.mod : 'product'
    app.loadingStart()
    wx.request({
      url: 'https://www.kmzb.com.cn/' + mod + '/showproduct.php',
      data: {
        lang: 'cn',
        id: id,
        is_wx: 1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.loadingEnd()
        WxParse.wxParse('article', 'html', res.data.product.content, that, 5);
        that.setData({
          product: res.data.product,
          imgUrls: res.data.displaylist
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})