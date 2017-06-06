//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    activeShow:'index',
    footerMenu:[],
    menuOpen:false,
    inputShowed: false,
    inputVal: "",
    flashimgall: [],
    navList:[],
    link_img_com:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
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

  onLoad: function (options) {
    
    var that = this
    that.initFooterMenu()
    app.loadingStart()
    wx.request({
      url: 'https://www.kmzb.com.cn',
      data: {
        is_wx: 1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.loadingEnd()
        that.setData({
          flashimgall: res.data.met_flashimgall,
          navList: res.data.nav_list,
          link_img_com: res.data.link_img_com
        })
      }
    })
  },
  
  menuShow: function (e) {
    var that = this
    this.setData({
      menuOpen: !that.data.menuOpen
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  search: function (e) {
    var that = this
    app.linkTo('search')
    wx.setStorage({
      key: "search_word",
      data: that.data.inputVal
    })
  }
})
