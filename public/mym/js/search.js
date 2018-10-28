$(function(){
//    给搜索按钮绑定点击事件
    $('#search-btn').on('click',function(){
        //alert(1);
    //    获取输入框输入的关键字
       var keyword= $(this).siblings('input').val();
        if(keyword){
            //将关键字存储到数组中
            //keyarr.push(keyword);
            //用unshift是因为用户体验更好，搜索历史记录排序就会把最近搜索的放在前面
            keyarr.unshift(keyword);
                //将关键字数组存储在本地,本地存储只能存储字符串类型
            localStorage.setItem('keyarr',JSON.stringify(keyarr));
            location.href="search-result.html?keyword="+keyword;
        }else{
            alert('请输入搜索关键字');
        }
    });

//   实现历史关键字的存储
//    建立一个存储关键字的数组
//    在用户输入关键字后获取关键字的时候将关键字存储到数组中
    var keyarr=[];
    if(localStorage.getItem('keyarr')){
        keyarr=JSON.parse(localStorage.getItem('keyarr'));
        var html =template('historyTpl',{result:keyarr});
       $("#history-box").html(html);
    }

//    清空本地历史记录
   $('#clearBtn').on('click',function(){
       $("#history-box").html("");
       localStorage.removeItem(keyarr);
   })

});