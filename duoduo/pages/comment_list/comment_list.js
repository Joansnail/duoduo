Page({
  data:{
    comment: []
  },
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/comment.json',
      data: {},
      method: 'GET',
      success: function(res){
        that.setData({
          comment: res.data.data.list
        })
      }
    })
  }
})