Page({
  onShow: function () {
    console.log(this.route)
  },
  onTabItemTap(item) {
    console.log(item.in)
    console.log(item.pagePath)
    console.log(item.text)
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  data: {
    imgUrls: [
      '../../images/gamersky_01small_02_201410311716C42.jpg',
      '../../images/gamersky_02small_04_201410311716116.jpg',
      '../../images/gamersky_12small_24_20141031171614C.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    console.log(e)
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})