Page({
  data:{
    questionList: []
  },
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/question.json',
      data: {},
      method: 'GET',
      success: function(res){
        var data = res.data.data
        that.setData({
          questionList: data
        })
      }
    })
  }
})