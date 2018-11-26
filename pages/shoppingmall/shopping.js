Page({
  data: {
    imgUrls: [
      'http://img2.imgtn.bdimg.com/it/u=1946479653,1788938723&fm=27&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=1085586176,1480770609&fm=27&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=2866355524,638070905&fm=27&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=3462267645,3788985990&fm=27&gp=0.jpg'
    ]
  },
  jumpDetail: function(event){
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },
  onLoad:function(){
    var me = this;
    wx.request({
      url: 'https://qtxcx.shinkeer.com/merchandise/findList',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log("数据呢："+res.data);
        var dataList = res.data;
        for (var i = 0; i < dataList.length;i++){
          var pics = res.data[i].pic;
          // pics = pics.substring(0, pics.length - 1);
          var pic_array = pics.split(",");
          res.data[i].pic = pic_array;
        }
        me.setData({
          list: res.data
        });
      },
      fail: function (res) {
        console.log("请求路径有误");
      }
    })
  }
})