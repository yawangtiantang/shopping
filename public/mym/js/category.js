$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //以及分类数据的获取
    $.ajax({
        url:'/category/queryTopCategory',
        type:'get',
        success:function(response){
            //console.log(response);

            //    使用模板引擎将数据和html进行拼接
            var html=  template('category-first',{result:response.rows});
            //console.log(html);
            $('#links').html(html);
        //    如果一级分类有数据
            if(response.rows.length){
                //给第一个一级分类添加选中状态
                $('#links').find('a').eq(0).addClass('active');
                //获取第一个一级分类的id
                var id =response.rows[0].id;
                getSecondCategory(id);

            }

        }
    });


//给一级分类添加点击事件，获取二级分类数据
//一级数据是动态获取，要用事件委托
    $('#links').on('tap','a',function(){
        //alert(1)
      var id =  $(this).attr('data-id')

        //console.log(id);
        //给当前点击的一级分类添加选中样式
        $(this).addClass('active').siblings().removeClass('active');
        //请求数据
        getSecondCategory(id);
    });
});

function getSecondCategory(id){

    $.ajax({
        url:'/category/querySecondCategory',
        type:'get',
        data:{
            id:id
        },
        success:function(response){
            //console.log(response);
            var html= template('category-second',response);
            //console.log(html);
            $('.brand-list').html(html);
        }
    })
}
