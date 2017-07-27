Page({
  data:{

  },
  onLoad:function(options){
    var id = options.id
    var that = this 
    that.setData({
      id:id
    })
  },
  changeType:function(e){
    var typeId = e.currentTarget.dataset.id
    var that = this
    this.setData({
      typeId: typeId
    })
    wx.request({
      url: 'url25222',
      data: {
        typeId:typeId,
        id:that.data.id
      },
      method: 'GET',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  sureApply:function(){
    
  }
})