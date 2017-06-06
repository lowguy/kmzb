// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'在线咨询',
    comment: '',
    name: '',
    phone: '',
    email: '',
    disabled: false,
  },
  usercomment:function(e){
    this.setData({
      comment: e.detail.value
    });
  },
  username: function (e) {
    this.setData({
      name: e.detail.value
    });
  },
  userphone: function (e) {
    this.setData({
      phone: e.detail.value
    });
  },
  useremail: function (e) {
    this.setData({
      email: e.detail.value
    });
  },

  primary:function(){
    var that = this
    
    if (!that.data.name){
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      })
      return '';
    }
    if (!that.data.comment) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'loading',
        duration: 1000
      })
      return '';
    }
    if (!that.data.phone) {
      wx.showToast({
        title: '用户手机不能为空',
        icon: 'loading',
        duration: 1000
      })
      return '';
    }
    if (!that.data.email) {
      wx.showToast({
        title: '用户邮箱不能为空',
        icon: 'loading',
        duration: 1000
      })
      return '';
    }
    app.loadingStart()
    wx.request({
      url: 'https://www.kmzb.com.cn/feedback/index.php?action=add&lang=cn', 
      method:'POST',
      data: {
        para119: that.data.comment,
        para120: that.data.name,
        para121: that.data.phone,
        para122: that.data.email
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.loagingEnd()
        wx.showToast({
          title: '您的信息提交成功,等待客服人员回复!',
          icon: 'success',
          duration: 2000
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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