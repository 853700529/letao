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
        console.log("jjj");
        $(".modal.fade").modal("show");
    })

});