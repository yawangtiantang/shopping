$(function(){
//  给注册按钮添加点击事件
    $('#register').on('tap',function(){
        //alert(1);
    //    ��获取用户输入的信息
        var username =$('[name="username"]').val();
        var mobile=$('[name="mobile"]').val();
        var password =$('[name="password"]').val();
        var againPass =$('[name="againPass"]').val();
        var vCode =$('[name="vCode"]').val();
        //console.log(username);
        //console.log(mobile);
        //console.log(password);
        //console.log(againPass);
        //console.log(vCode);
    //    ��验证用户信息
        if(!username){
            mui.toast('请输入用户名');
            return;
        }
        if(mobile.length != 11){
            mui.toast('请输入电话号码');
            return;
        }
        if(againPass != password){
            mui.toast('两次输入的密码不一致');
            return;
        }
    //    �调注册接口进行注册
        $.ajax({
            url:"/user/register",
            type:"post",
            data:{
                username:username,
                password:password,
                vCode:vCode,
                mobile:mobile
            },
            success:function(res){
                mui.toast('注册成功');
                setTimeout(function(){
                    location.href='login.html';
                },2000)
            }
        })

    });

//   调接口获取认证码�
    $('#getCode').on('tap',function(){
        $.ajax({
            url:"/user/vCode",
            type:'get',
            success:function(res){
                console.log(res.vCode);
            }


        });
    });


});