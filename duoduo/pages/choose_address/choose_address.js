Page({
  data:{
    addressList:[],
    show: 0,
    default_address: 0
  },
  onLoad:function(options){
   var url = 'https://static.sesine.com/mina/data/address.json'
   var that = this
   wx.request({
     url: url,
     data: {},
     method: 'GET',
     success: function(res){
       var data = res.data.data.add
       that.setData({
        addressList: data
       })
       for (var item in data) {
         if (data[item].default) {
           that.setData({
             show: data[item].id
           })
         }
       }
     }
   })
  },
  setTodefault:function(e){
    var id = e.currentTarget.dataset.id
    this.setData({
      default_address: id
    })
    wx.request({
      url: 'https://static.sesine.com/mina/data/address.json',
      data: {
        id: id
      },
      method: 'GET'
    })
  },
  useIt:function(e){
    var id = e.currentTarget.dataset.id
    this.setData({
      show:id
    })
  },
  del:function(e){
    var id = e.currentTarget.dataset.id
    var index = e.currentTarget.dataset.index
    var that = this
    wx.showModal({
      title: "确认要删除？",
      content: "地址删除后无法恢复",
      success: function(res){
        if (res.confirm) {
          wx.request({
            url: 'https://static.sesine.com/mina/data/address.json',
            data: {
              id: id
            },
            method: 'GET',
            success: function(res) {
              var data = that.data.addressList
              data.splice(index, 1)
              that.setData({
                addressList: data
              })
            }
          })
        }
      }
    })
  }
})