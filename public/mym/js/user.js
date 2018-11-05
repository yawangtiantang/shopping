$.ajax({
    url:'/user/queryUserMessage',
    type:'get',
    //这一步是判断用户是否登录，如果登录了才执行后续操作，所以要将异步请求变为同步请求
    async:false,
    success:function(res){
        console.log(res);
        if(res.err && res.err==400){
            mui.toast('请登录');
            location.href="login.html";
        }
    }
});



$(function(){
    $('#logout').on('tap',function(){
        $.ajax({
            url:'/user/logout',
            type:'get',
            success:function(res){
                if(res.success){
                    mui.toast('退出登录成功');
                    setTimeout(function(){
                        location.href = "index.html";
                    },2000)

                }
            }

        })
    })
});