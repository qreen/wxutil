Page({
  onLoad:function(){
    var me = this;
    wx.request({
      url: 'https://qtxcx.shinkeer.com/user/findOne2',
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        console.log(res);
        me.setData({
          list : res.data
        });
      },
      fail:function(res){
        console.log("请求路径有误");
      }
    })
  }
})