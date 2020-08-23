define(['jquery'], function ($) {
    function topDownload() {
        $.ajax({
            type: "get",
            url: "../data/topNav.json",
            success: function (result) {

                var topNavArr = result;
                topNavArr.unshift({ type: "首页" });
                topNavArr.push({ type: "入驻商家" });
                for (var i = 0; i < topNavArr.length; i++) {
                    $(`
                    <li class="item" index="${i}"><a href="">${topNavArr[i].type}</a></li>
                    `).appendTo('#nav-r .nav ul');

                    var node = $(`<ul class="home-nav-sub-cont" style= "display:${i == 1 ? 'block' : 'none'}"></ul>`);
                    node.appendTo("#tabs #com-width");
                    if (topNavArr[i].childList) {
                        var childArr = topNavArr[i].childList;
                        for (var j = 0; j < childArr.length; j++) {
                            $(`
                            <li class="home-sub-box">
                                <a href="">
                                    <img src="${childArr[j].img}" alt="">
                                </a>
                                <p>${childArr[j].goods_name}</p>
                                <h2>￥${childArr[j].goods_price}</h2>
                            </li>
                            `).appendTo(node);
                        }

                    }
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }


    // 顶部导航添加移入移出事件
    function topNavTab() {
        var index = null;
        $("#nav-r .nav ul").on("mouseenter", ".item", function () {
            index = $(this).index();
            if(index != 0 && index != 7){
                $("#tabs").removeClass("sub-up").addClass("sub-down");
                $("#tabs #com-width").find("ul").eq(index).css({ display: "block" }).siblings("ul").css({ display: "none" });
            }
        });
        if(index == undefined && index == null){
        $("#nav").on("mouseleave",  function (){
            $("#tabs").removeClass("sub-down").addClass("sub-up");
        })
        $("#tabs").on("mousenter", function () {
                $("#tabs").removeClass("sub-up").addClass("sub-down");
        })
    }}
    return {
        topDownload: topDownload,
        topNavTab: topNavTab
    }
})