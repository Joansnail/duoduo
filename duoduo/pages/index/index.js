
Page({
  data: {
    picList: [],
    itemList:[],
    indexList:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    loading: true
  },
  onLoad: function (options) {
    var picUrl = 'https://static.sesine.com/mina/data/index_pic.json'
    var that = this
    var itemUrl = 'https://static.sesine.com/mina/data/index.json'
    var indexUrl = 'https://static.sesine.com/mina/data/index_list.json'
    wx.request({
      url: picUrl,
      data: {},
      method: 'GET',
      success: function(res){
        that.setData({
           loading: false,
           picList:res.data.data.list
        })
      }
    })

    wx.request({
      url: itemUrl,
      data: {},
      method: 'GET', 
      success: function(res){
        that.setData({
          itemList:res.data.data.list
        })
      }
    })

    wx.request({
      url: indexUrl,
      data: {},
      method: 'GET', 
      success: function(res){
        that.setData({
          indexList:res.data.data.list
        })
      }
    })
  },

  viewList:function(e){
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../product/product?id=' + data.id
    })
  },
  viewProduct:function(e){
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + data.id
    })
  }
})
