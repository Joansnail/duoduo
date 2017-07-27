Page({
  data:{
    goodsInfo:[],
    goodsNum:1,
    totalPrice:0
  },
  onLoad:function(options){
    var that = this
    var id = options.id
    var sku_id = options.sku_id
    var num = options.num
    var type_id = options.type_id
    that.setData({
      id: id,
      sku_id: sku_id,
      num: num,
      type_id: type_id
    })
    var url = "https://static.sesine.com/mina/data/product_info.json"
    wx.request({
      url: url,
      data: {
        id: id
      },
      method: 'GET', 
      success: function(res){
        that.setData({
           goodsInfo:res.data.data.spu
        })
        that.count()
      }
    })
  },
  confirmPlus:function(){
    var num = this.data.goodsNum
    num++
    this.setData({
      goodsNum:num
    })
    this.count()
  },
  confirmReduce:function(){
    var num = this.data.goodsNum
    num--
    if(num>=1){
      this.setData({
        goodsNum:num
      })
    }
    this.count()
  },
  count:function(){
    var num = this.data.goodsNum
    var price = this.data.goodsInfo.price
    this.setData({
      totalPrice: num*price
    })
  },
  pay:function(){

  }
})