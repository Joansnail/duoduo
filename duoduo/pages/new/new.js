Page({
  data:{
    newList:[]
  },
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/newest.json',
      data: {},
      method: 'GET', 
      success: function(res){
        var newList = res.data.data.list
        for(var item in newList){
          var newTime =  newList[item].time
          var nowTime = Math.round(new Date().getTime()/1000);
          var second = nowTime - newTime
          console.log(nowTime)
          var time = '';
          if (second < 60){
            time = second + '秒'
          } else if (second < 3600) {
            time = parseInt(second/60) + '分钟'
          } else if (second >= 3600 && second < 86400) {
            time = parseInt(second/3600) + '小时'
          } else if (second >= 86400) {
            time = parseInt(second/86400) + '天'
          }
          newList[item].time = time

        }
        that.setData({
          newList:newList
        })
      }
    })
  },
  viewProduct:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + data.id
    })
  }
})