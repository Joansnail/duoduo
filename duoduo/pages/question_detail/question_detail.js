Page({
  data:{
    question: {}
  },
  onLoad:function(options){
    console.log(options)
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/answer.json',
      data: {},
      method: 'GET',
      success: function(res){
        that.setData({
          question: res.data.data
        })
      }
    })
  }
})