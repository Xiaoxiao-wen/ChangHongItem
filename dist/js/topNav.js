define(['jquery'], function($) {
    function topDownload(){
        $.ajax({
            type:"get",
            url:"../data/left-nav.json",
            success:function(result){
                
                var leftNavArr = result.data;
                for(var i = 0; i<bannerArr.length;i++){
                    $(`
                    <li><img src="${bannerArr[i].url}" alt=""></li>
                    `).appendTo('#banner #bannerList');
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }


    return{
        topDownload:topDownload
    } 
})