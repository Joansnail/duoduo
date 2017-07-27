var data = require('../../public/city')
Page({
  data:{
    provinceVal:[],
    provinceIndex: [],
    provinceSelIndex: '',
    cityVal: [],
    cityIndex: [],
    citySelIndex: '',
    districtVal: [],
    districtIndex: [],
    districtSelIndex: '',
    cityEnabled: false,
    districtEnabled: false
  },
  onLoad:function(options){
    var that = this
    var province = data['100000']
    var provinceVal = [];
    var provinceIndex = [];
    for (var item in province) {
      provinceVal.push(province[item])
      provinceIndex.push(item)
    }
    this.setData({
      provinceVal: provinceVal,
      provinceIndex: provinceIndex
    })
  },
  // 选择省
  changeProvince: function(e) {
    this.resetData(1)
    var index = e.detail.value
    var city = data[this.data.provinceIndex[index]]
    var cityVal = []
    var cityIndex = []
    for (var item in city) {
      cityVal.push(city[item])
      cityIndex.push(item)
    }
    this.setData({
      provinceSelIndex: index,
      cityVal: cityVal,
      cityIndex: cityIndex,
      cityEnabled: true
    })
  },
  // 选择市
  changeCity: function(e) {
    this.resetData(2)
    var index = e.detail.value
    var district = data[this.data.cityIndex[index]]
    var districtVal = []
    var districtIndex = []
    for (var item in district) {
      districtVal.push(district[item])
      districtIndex.push(item)
    }
    this.setData({
      citySelIndex: index,
      districtVal: districtVal,
      districtIndex: districtIndex,
      districtEnabled: true
    })
  },
  // 选择区
  changeDistrict: function(e) {
    var index = e.detail.value
    this.setData({
      districtSelIndex: index
    })
  },
  resetData: function(i) {
    if (i == 1) {
      this.setData({
        cityVal: [],
        cityIndex: [],
        citySelIndex: '',
        districtVal: [],
        districtIndex: [],
        districtSelIndex: '',
        districtEnabled: false
      })
    }
  },
  switchChange:function(){
    
  }
})