// console.log("加载成功");
require.config({
    paths:{
        "jquery":"jquery-1.10.1.min",
        "jquery-cookie":"jquery.cookie",
        "banner":"banner",
        "topNav":"topNav",
        "dataDownload":"dataDownload"
    },
    // 设置依赖关系
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["banner"],function(banner){
    banner.download();
    banner.banner();
})
require(["topNav"],function(topNav){
    topNav.topDownload();
    topNav.topNavTab();
})
require(["leftNav"],function(leftNav){
    leftNav.leftDownload();
    leftNav.leftNavTab();
})
require(["data"],function(data){
    data.dataDownload();
})