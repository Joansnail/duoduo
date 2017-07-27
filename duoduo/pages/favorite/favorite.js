Page({
  data:{
    favorite: []
  },
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/collect.json',
      data: {},
      method: 'GET',
      success: function(res){
        that.setData({
          favorite: res.data.data
        })
      }
    })
  },
  cancel:function(e){
    var that = this 
    var index = e.currentTarget.dataset.index
    var id = e.currentTarget.dataset.id
    wx.showModal({
      title:"确认取消收藏",
      content:"取消收藏后无法恢复~",
      success:function(res){
        if(res.confirm){
          wx.request({
            url: 'https://static.sesine.com/mina/data/collect.json',
            data: {
              id:id
            },
            method: 'GET', 
            success: function(res){
              var data = that.data.favorite
              data.splice(index,1)
              that.setData({
                favorite:data
              })
            }
          })
        }
      }
    })
  },
  openTeam:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + data.id
    })
  }
})