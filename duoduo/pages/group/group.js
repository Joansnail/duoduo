Page({
  data:{
    group: {},
    remainingMember: ''
  },
  onLoad:function(options){
    var id = options.id
    console.log(id)
    var that = this
    var cnNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    wx.request({
      url: 'https://static.sesine.com/mina/data/team.json',
      data: {
        id: id
      },
      method: 'GET',
      success: function(res){
        var group = res.data.data.info
        var remainingMember = ''
        var remain = group.team_num - group.had_num
        if (remain > 10) {
          remainingMember = (remain >= 20 ? cnNumber[parseInt(remain/10)] : '') + '十' + cnNumber[remain%10]
        } else {
          remainingMember[remain]
        }
        that.setData({
          group: group,
          remainingMember: remainingMember
        })
      }
    })
  }
})