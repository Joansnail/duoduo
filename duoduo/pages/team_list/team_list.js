Page({
  data:{
    teamList:[],
    orderStatus: 0
  },
  onLoad:function(options){
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
      data: {},
      method: 'GET',
      success: function(res){
        var teamList = res.data.data.list
        var arr =[]
        if (status == 0) {
          that.setData({
            teamList: teamList
          })
          return false
        }
        for(var item in teamList){
          if(teamList[item].status == status){
            arr.push(teamList[item])
          }
        }
        that.setData({
          teamList: arr
        })
      }
    })
  },
  viewDetail:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../order_detail/order_detail?id=' + data.id
    })
  },
  viewTeam:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../group/group?id=' + data.teamid
    })
  }
})