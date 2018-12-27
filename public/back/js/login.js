// 1,等待页面加载完成
// 2，防治全局变量的污染
;$(function(){
    // 1,校验表单
    $("form").bootstrapValidator({
        // 校验表单数据格式是否正确
        // 1，用户名不能为空  长度2-6
        // 2，密码不能为空 长度6-12
        fields:{
            username:{
                validators:{
                    notEmpty:{
                        message:"用户名不能为空！"
                    },
                    stringLength:{
                        min:2,
                        max:6,
                        message:"用户名长度2-6！"
                    },
                    callback:{
                        message:"用户名错误！"
                    }
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message:"密码不能为空！"
                    },
                    stringLength:{
                        min:6,
                        max:12,
                        message:"密码长度6-12！"
                    },
                    callback:{
                        message:"密码错误！"
                    }
                }
            }
        },
        // 配置图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }
    });
    // 2，发送ajax
    $("form").on("success.form.bv",function(e){
        e.preventDefault();//阻止默认行为
        // 发送ajax
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data:$("form").serialize(),
            dataType:"json",
            success:function(info){
               if(info.error===1000){
                // alert("用户名错误");
                // $('form').data("bootstrapValidator").updateStatus("username","INVALID","notEmpty");
                $('form').data("bootstrapValidator").updateStatus("username","INVALID","callback");
               }
               if(info.error===1001){
                // alert("用户名错误");
                // $('form').data("bootstrapValidator").updateStatus("password","INVALID","notEmpty");
                $('form').data("bootstrapValidator").updateStatus("password","INVALID","callback");
               }
               if(info.success){
                location.href="index.html";
               }
            }
        });


    });
    // 重置表单
    $("[type='reset']").on("click",function(){
        $("form").data("bootstrapValidator").resetForm(true);
    });
});