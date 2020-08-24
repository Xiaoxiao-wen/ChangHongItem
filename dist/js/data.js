define(['jquery'],function(){
    function dataDownload(){
        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(result){
                var dataArr = result[0];
                // console.log(dataArr);
                $(`
                    <span>${dataArr.type}</span>
                    <a href="">查看更多 > </a>
                `).appendTo(".product .title .left");
                var rightList = dataArr.listRight;
                // console.log(rightList)
                for(var i = 0; i< rightList.length;i++){
                    $(`<li><a href="">${rightList[i].list}</a></li>`).appendTo(".product .title .right ul");
                }
                console.log(dataArr.pic.img)
                $(`<a href="">
                <img src="${dataArr.pic.img}"
                    alt="">
                </a>`).appendTo(".product .listPage .list_left")
                var childArr = dataArr.child;
                console.log(childArr)
                
                for(var j = 0; j < childArr.length;j++){
                    $(`
                    <div class="list_right list_special">
                        <div class="list_img">
                            <a href="">
                                <img src="${childArr[j].img}"
                                    alt="">
                            </a>
                        </div>
                        <div class="list_text">
                            <a href="">
                                <h2>${childArr[j].title}</h2>
                                <p>${childArr[j].introduce}</p>
                                <span>￥${childArr[j].price}</span>
                            </a>
                        </div>
                    </div>
                    `).appendTo(".product .listPage #listRight")
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    return{
        dataDownload:dataDownload
    }
})