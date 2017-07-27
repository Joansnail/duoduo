Page({
  data:{},
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/protocol.json',
      data: {},
      method: 'GET',
      success: function(res){
        that.setData({
          agreement: res.data.data.content
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})