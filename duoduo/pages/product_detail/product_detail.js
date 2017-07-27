Page({
  data:{
    productDetail: {},
    imageSize: [],
    sku: [],
    showProperty: false,
    num: 1,
    stock: 1,
    price: 0
  },
  onLoad:function(options){
    var id = options.id
    console.log(id)
    var that = this
    that.setData({id: id})
    wx.request({
      url: 'https://static.sesine.com/mina/data/product_detail.json',
      data: {
        id: id
      },
      method: 'GET',
      success: function(res){
        var data = res.data.data.info
        that.setData({
          productDetail: data
        })
      }
    })
  },
  viewHome:function(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  viewComment:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../comment/comment?id=' + id
    })
  },
  viewGroup: function(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../group/group?id=' + id
    })
  },
  viewProperty:function(e){
    // var id = e.currentTarget.dataset.id
    var type_id = e.currentTarget.dataset.type
    var id = 0
    var that = this
    that.setData({
      type_id: type_id
    })
    wx.request({
      url: 'https://static.sesine.com/mina/data/product_info.json',
      data: {
        id: id
      },
      method: 'GET',
      success: function(res){
        that.setData({
          sku: res.data.data.spu,
          showProperty: true,
          price: res.data.data.spu.price
        })
      }
    })
  },
  buy:function(e){
    var id = this.data.id
    var sku_id = this.data.sku_id
    var type_id = this.data.type_id
    var num = this.data.num
    wx.navigateTo({
      url: '../pay/pay?id=' + id + '&type_id=' + type_id + '&sku_id=' + sku_id + '&num=' + num
    })
  },
  hideProperty:function(){
    this.setData({
      showProperty: false,
      num: 1,
      sku_id: 'undefined'
    })
  },
  changeSku:function(e){
    var sku_id = e.currentTarget.dataset.id
    var stock = e.currentTarget.dataset.stock
    var index = e.currentTarget.dataset.index
    this.setData({
      sku_id: sku_id,
      stock: stock,
      num: 1
    })
    if (this.data.type_id == 0) {
      this.setData({
        price: this.data.sku.sku[index].single_price
      })
    } else {
      this.setData({
        price: this.data.sku.sku[index].team_price
      })
    }
  },
  reduceNum:function(){
    if (this.data.num > 1) {
      this.setData({
        num: --this.data.num
      })
    } else {

    }
  },
  addNum:function(){
    if (this.data.num < this.data.stock) {
      this.setData({
        num: ++this.data.num
      })
    } else {

    }
  },
  changeImageSize:function(e){
    var index = e.currentTarget.dataset.index
    var width = e.detail.width
    var height = e.detail.height
    var ratio = 750 / width
    width = 750
    height *= ratio
    var size = {}
    size.width = width
    size.height = height
    var that = this
    that.setData({
      imageSize: that.data.imageSize.concat(size)
    })
  },
  collect:function(e){
    if(this.data.productDetail.is_favorite == 0) {
      this.setData({
        "productDetail.is_favorite" : 1
      })
    } else {
      this.setData({
        "productDetail.is_favorite" : 0
      })
    }
  }
})