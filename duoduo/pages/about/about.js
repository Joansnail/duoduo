Page({
  data:{},
  onLoad:function(){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/about.json',
      data: {},
      method: 'GET',
      success: function(res){
        that.setData({
          app: res.data.data
        })
      }
    })
  }
})