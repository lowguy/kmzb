// pages/brandculture/index.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerMenu: [],
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
    wx.setNavigationBarTitle({
      title: '品牌工艺'
    })
    that.setData({
      title: '品牌工艺'
    })
    app.loadingStart()
    wx.request({
      url: 'https://www.kmzb.com.cn/brandprocess', //仅为示例，并非真实的接口地址
      data: {
        is_wx: 1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.loadingEnd()
        WxParse.wxParse('article', 'html', res.data.content, that, 5);
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