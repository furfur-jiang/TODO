//app.js
var hotapp = require("./utils/hotapp");
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        env: "cloud-fur",
        traceUser: true,
      });
    }

    this.globalData = {
      hotapp
    };
    

    //使用HotApp小程序统计，统计小程序新增，日活，留存，当日可查看统计结果
    //线上发布
    hotapp.init("hotapp2427615");
  //   // 输入debug错误日志, 建议生产环境不要开启
    // hotapp.setDebug(true);
  },
  onError: function (msg) {
  //   //错误日志上传(开发中)
    hotapp.onError(msg, "1.0.0", function (err) {
      console.log(err);
    });
  },
  globalData: {
    hotapp: hotapp, // 这里作为一个全局变量, 方便其它页面调用
  },
});
