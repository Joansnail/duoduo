Page({
  data:{
    orderDetail:[]
  },
  onLoad:function(options){
    var id = options.id
    console.log(id)
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/order_detail.json',
      data: {
        id:id
      },
      method: 'GET', 
      success: function(res){
       that.setData({
         orderDetail:res.data.data.info,
         id: id
       })
      }
    })
  },
  makeCall:function(){
    wx.makePhoneCall({
      phoneNumber: '13685781982'
    })
  },
  viewStar:function(e){
    var data = e.currentTarget.dataset
    console.log(data)
    wx.navigateTo({
      url: '../comment/comment?id=' + data.id
    })
  },
  viewRefund:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../refund/refund?id=' + data.id
    })
  }
})