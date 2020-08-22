define(['jquery'], function($) {
    function download(){
        $.ajax({
            type:"get",
            url:"../data/banner.json",
            success:function(result){
                // alert(result);
                var bannerArr = result.data;
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

    function banner(){
        var iNow = 0;//当前显示的图片下标
        var aImgs = null;// 记录图片
        var aBtns = null; //记录小圆圈


        var timer = setInterval(function(){
            iNow++;
            tab();
        },2500)
        // 封装切换函数
        function tab(){
            //找到所有的图片和按钮
            if(!aImgs){
                aImgs = $("#banner #bannerList").find("li");
            }
            if(!aBtns){
                aBtns = $()
            }
            if(iNow == 5){
                iNow = 0;
            }
            // 图片切换
            // aImgs.hide().css("opactiy",0.2).eq(iNow).show().animate({opacity:1},500);
            
             aImgs.eq(iNow).fadeIn(300).siblings(aImgs).fadeOut(300);
            //  小圆点
            //  $("li").eq(i).addClass("active").siblings().removeClass("active");
        }
        $("#banner #bannerList").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            },2500)
        })
    }

    return{
        download:download,
        banner:banner
    } 
})