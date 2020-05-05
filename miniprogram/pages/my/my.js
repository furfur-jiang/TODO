//index.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    takeSession: false,
    requestResult: '',
    login: false,
    openid: '',
    address: {},
    avatarUrl: 'user-unlogin.png'
  },
  onLoad: function() {
    this.initInfo()
  },
  getUserInfo() {
    wx.getSetting({
      success: (res) => {
        const scopeUserInfo = res.authSetting["scope.userInfo"]
        if (scopeUserInfo === true) {
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                cloudID: getApp().globalData.cloudID
              })
            },
          });
        }
      }
    });
    // if (e.detail.userInfo) {
    //   this.setData({
    //     login: true,
    //     avatarUrl: e.detail.userInfo.avatarUrl,
    //     userInfo: e.detail.userInfo
    //   })
    // }
  },
  initInfo() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              this.setData({
                login: true,
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                cloudID: getApp().globalData.cloudID
              })
            }
          })
        }
      }
    })
  },
  bindViewTap: function(e) {
    wx.navigateTo({
      url: '../feedback/index'
    })
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })
    this.setData({
      workTime: wx.getStorageSync('workTime'),
      restTime: wx.getStorageSync('restTime')
    })
  },
  changeWorkTime: function(e) {
    wx.setStorage({
      key: 'workTime',
      data: e.detail.value
    })
  },
  changeRestTime: function(e) {
    wx.setStorage({
      key: 'restTime',
      data: e.detail.value
    })

  }










})