Page({
  data:{
    logistics:[]
  },
  onLoad:function(options){
    var that = this
    var id = options.id
    console.log(id)
    wx.request({
      url: 'https://static.sesine.com/mina/data/logistics.json',
      data: {
        id:id
      },
      method: 'GET', 
      success: function(res){
        var logisticsInfo = res.data.data.info
        var logistics = res.data.data
        for(var item in logisticsInfo){
          var time = logisticsInfo[item].time
          var newTime = new Date(time*1000)
          time = [newTime.getFullYear(), newTime.getMonth() + 1, newTime.getDate()].join('.') + ' ' + [newTime.getHours(), newTime.getMinutes()].join(':')
          logisticsInfo[item].time = time
        }
        logisticsInfo.reverse()
        that.setData({
          logistics:logistics
        })
      }
    })
  }
})