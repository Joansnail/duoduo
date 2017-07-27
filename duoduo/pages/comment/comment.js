Page({
  data:{
    star: 0
  },
  onLoad:function(options){
    var id = options.id
    console.log(id)
  },
  starOn:function(e){
    var star_num = e.currentTarget.dataset.index
    this.setData({
      star: star_num
    })
  }
})