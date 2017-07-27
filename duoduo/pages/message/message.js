Page({
  data:{
    massage:[]
  },
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/system_news.json',
      data: {},
      method: 'GET', 
      success: function(res){
        that.setData({
          massage:res.data.data
        })
      }
    })
  }
})