var keyword = getParamsByUrl(location.href,'keyword');
//console.log(keyword);
//当前页
var page=1;
//页面数据
var html ='';

// 价格排序规则 升序
var priceSort = 1;

var This = null;
$(function(){

    mui.init({
        pullRefresh : {
            container:'#refreshContainer',
            up : {
                height:50,
                auto:true,
                contentrefresh : "正在加载...",
                contentnomore:'没有更多数据了',
                callback :getData,
            }
        }
    });

    //按照价格对商品进行排序
    //1.为价格按钮添加点击事件
    $('#priceSort').on('tap',function(){
        //alert(1);
    //    点击之后要为价格按钮进行重新排序
        priceSort =priceSort ==1 ? 2 : 1;
    //    将之前的设置进行初始化
    //    清空页面的数据
        html ='';
    //    回复当前页数为1
        page =1;
    //    恢复上拉加载
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();

    });



    function getData(){
        if(!This){
            This=this ;
        }

        $.ajax({
            url: '/product/queryProduct',
            type: 'get',
            data: {
                page: page++,
                pageSize: 3,
                proName: keyword,
                price: priceSort

            },
            success:function(response){
                //console.log(response);
                //if(response.data.length>0){
                //    html+=  template('searchTpl',response);
                //    //console.log(html);
                //    $('#search-box').html(html);
                //    //加载完新数据后，需要执行endPullupToRefresh()方法，结束转雪花进度条的“正在加载...”过程
                //    //false表示数据未加载完毕，所用的this指向getData
                //    This.endPullupToRefresh(false);
                //}else{
                //    This.endPullupToRefresh(true);
                //}
            //    上述代码可以优化
                html+=  template('searchTpl',response);
                    //console.log(html);
                    $('#search-box').html(html);
                    This.endPullupToRefresh(response.data.length==0);
            }


        });
    }


});


function getParamsByUrl(url,name){
    var params=url.substr(url.indexOf('?')+1);
    //console.log(params);
    var param=params.split('&');
    //console.log(param);
    for (var i = 0; i < param.length; i++) {
        //console.log(param[i].split('='));
        var current =param[i].split('=');
        if(current[0]==name){
            return current[1];
        }

    }
    return null;
}