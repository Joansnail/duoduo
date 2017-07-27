Page({
  data:{
    categoryList: [],
    categoryItemId: 0,
    categorySubItemId: 0,
    productList: [],
    categoryItemId: ''
  },
  onLoad:function(options){
    var id = options.id
    console.log(id)
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/second_level.json',
      method: 'GET',
      success: function(res){
        var data = res.data.data.list
        if (typeof id != "undefined") {
          that.setData({
            categoryItemId: id
          })
        } else {
          that.setData({
            categoryItemId: data[0].id
          })
        }
        that.setData({
          categoryList: data
        })
        that.getProductList()
      }
    })
  },
  changeCategory:function(e){
    var id = e.currentTarget.dataset.id
    this.setData({
      categoryItemId: id,
      categorySubItemId: 0
    })
    this.getProductList()
  },
  changeSubCategory:function(e){
    var id = e.currentTarget.dataset.id
    this.setData({
      categorySubItemId: id
    })
    this.getProductList()
  },
  getProductList:function(){
    var that = this
    wx.request({
      url: 'https://static.sesine.com/mina/data/product_item.json',
      data: {
        category_id: that.data.categoryItemId,
        sub_category_id: that.data.categorySubItemId
      },
      method: 'GET',
      success: function(res){
        var data = res.data.data.list
        that.setData({
          productList: data
        })
      }
    })
  },
  viewProductDetail:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + id
    })
  }
})