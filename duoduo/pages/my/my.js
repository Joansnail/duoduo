// pages/my/my.js
Page({
  data:{},
  onLoad:function(options){
    
  },
  viewOrder:function(e){
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../order_list/order_list?id=' + data.id + '&status=' + data.status
    })
  },
  viewAddress:function(){
    wx.navigateTo({
      url: '../choose_address/choose_address'
    })
  },
  viewSetting:function(){
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  viewCollect:function(){
    wx.navigateTo({
      url: '../favorite/favorite'
    })
  }
})