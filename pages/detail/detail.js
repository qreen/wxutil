Page({
  onLoad: function (options) {
    var me = this;
    wx.request({
      url: 'https://qtxcx.shinkeer.com/merchandise/findOne?id=' + options.id,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //处理主图（字符串-》数组）
        var pics = res.data.pic;
        // pics = pics.substring(0, pics.length - 1);
        var pic_array = pics.split(",");
        res.data.pic = pic_array;
        //处理详情图（字符串-》数组）
        var detail_pic = res.data.detailPic;
        // detail_pic = detail_pic.substring(0, detail_pic.length - 1);
        var detail_pic_array = detail_pic.split(",");
        res.data.detailPic = detail_pic_array;
        // console.log(res.data.detailPic);
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