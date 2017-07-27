Page({
  data:{
    refundList:[]
  },
  onLoad:function(options){
    var that = this 
    wx.request({
      url: 'https://static.sesine.com/mina/data/refund_list.json',
      data: {},
      method: 'GET', 
      success: function(res){
        that.setData({
          refundList:res.data.data.list
        })
      }
    })
  },
  viewOrder:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../order_detail/order_detail?id=' + data.id 
    })
  }
})