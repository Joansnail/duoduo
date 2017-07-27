Page({
  data:{
   orderList:[],
   orderStatus:0
  },
  onLoad:function(options){
    var id = options.id
    var status = options.status
    var that = this

    that.getOrderList(status)
  },
  changeStatus:function(e){
    var that = this 
    var status = e.currentTarget.dataset.status
    this.getOrderList(status)
    that.setData({
      orderStatus:status
    })
  },
  getOrderList:function(status){
    var that = this 
     wx.request({
      url: 'https://static.sesine.com/mina/data/my_order.json',
      data: {
        status:status
      },
      method: 'GET',
      success: function(res){
        var orderList = res.data.data.list
        var arr = []
        that.setData({
          orderStatus: status
        })
        if (status == 0) {
          that.setData({
            orderList: orderList
          })
          return false
        }
        for(var item in orderList){
          if(orderList[item].status == status){
            arr.push(orderList[item])
          }
        }
        that.setData({
          orderList: arr
        })
      }
    })
  },
  viewOrder:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../order_detail/order_detail?id=' + data.id
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
  },
  viewLogistics:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../logistics/logistics?id=' + data.id
    })
  }
})