define(['jquery'], function ($) {
    function leftDownload() {
        $.ajax({
            type: "get",
            url: "../data/left-nav.json",
            success: function (result) {
                var leftNavArr = result;
                for (var i = 0; i < leftNavArr.length; i++) {
                    var node = $(`
                        <li class="submenu">
                            <a href="">
                                <i class="iconfont">${leftNavArr[i].icon}</i>
                                ${leftNavArr[i].type}
                            </a>
                            <div class="children">
                            </div>
                        </li>
                    `);
                    node.appendTo('.main .list .menu');
                    // 
                    // var node = $(`<div class="menu" >`);
                    // node.appendTo(".main");
                    var childArr = leftNavArr[i].child;
                    // console.log(childArr);
                    for(var j = 0;j <childArr.length; j++){
                        var newUl = $(`
                        <ul class="children-list"></ul>
                        `);
                        newUl.appendTo(".menu .submenu .children");
                        var newLi = $(`
                        <li>
                            <a href="" class="top">
                                <img src="${childArr[j].img}" alt="">
                                ${childArr[j].good_name}
                            </a>
                        </li>
                        `);
                        newLi.appendTo(newUl);
                        var childList = childArr[j].childList;
                        // console.log(childList);
                        if(childList){
                            for(var k = 0;k < childList.length; k++){
                                $(`<a href="" class="bottom" style="color: #333333;">${childList[k].good_name}</a>`).appendTo(newLi);
                            }
                        }
                    }
                    
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }


    // 侧边导航添加移入移出事件
    function leftNavTab() {
        var index = null;
        $(".main .list .menu").on("mouseenter", ".submenu", function () {
            $(this).addClass("enter");
        });
        $(".main .list .menu").on("mouseleave",".submenu",function(){
            $(this).removeClass("enter");
        })
    }
    return {
        leftDownload: leftDownload,
        leftNavTab:leftNavTab
    }
})