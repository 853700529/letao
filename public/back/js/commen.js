;$(function(){

    // 禁用进度条
    NProgress.configure({showSpinner:false});
    // 进度条加载效果
   
    $(document).ajaxStart(function(){
        NProgress.start();
    });
    $(document).ajaxStop(function(){
        NProgress.done();
    });
    // 二级分类的显示和隐藏
    $(".second").prev().on("click",function(){
        // console.log("hhh");
        $(this).next().slideToggle();
    })
    // 侧边栏的显示与隐藏
    $(".icon_menu").on("click",function(){
        $(".aside_l").toggleClass("now");
        $(".lt_main").toggleClass("now");
    })
    // 退出模态框
    $(".icon_logout").on("click",function(){
        // console.log("jjj");
        $(".modal.fade").modal("show");
    });
    // 确定退出事件
    $(".logout").on("click",function(){
        // 发送/ajax告诉服务器需要退出，让服务器把对应d的session销毁
        $.ajax({
            type:"GET",
            url:"/employee/employeeLogout",
            success:function(info){
                if(info.success){
                    location.href="login.html";
                }
                if(info.error==400){
                    alert(info.message);
                }
            }
        })
    });

});