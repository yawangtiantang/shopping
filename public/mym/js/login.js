$(function(){
  //    为登录按钮注册点击事件，获取用户填入的信息
    $('#login').on('tap',function(){
        var username = $('[name="username"]').val();
        var password = $('[name="password"]').val();
        if(!username){
            mui.toast('请输入用户名');
            return;
        }
        if(!password){
            mui.toast('请输入密码');
            return;
        }
        $.ajax({
            url:"/user/login",
            type:'post',
            data:{
                username:'username',
                password:'password'
            },
            beforeSend:function(){
                $('#login').html('正在登录...');
            },
            success:function(res){
                mui.toast('登陆成功');
                $('#login').html('登录');
                setTimeout(function(){
                    location.href="user.html";
                },2000)
            }
        })
    });
});