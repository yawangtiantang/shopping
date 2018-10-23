$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });
    //�Լ��������ݵĻ�ȡ
    $.ajax({
        url:'/category/queryTopCategory',
        type:'get',
        success:function(response){
            //console.log(response);

            //    ʹ��ģ�����潫���ݺ�html����ƴ��
            var html=  template('category-first',{result:response.rows});
            //console.log(html);
            $('#links').html(html);
        //    ���һ������������
            if(response.rows.length){
                //����һ��һ���������ѡ��״̬
                $('#links').find('a').eq(0).addClass('active');
                //��ȡ��һ��һ�������id
                var id =response.rows[0].id;
                getSecondCategory(id);

            }

        }
    });


//��һ��������ӵ���¼�����ȡ������������
//һ�������Ƕ�̬��ȡ��Ҫ���¼�ί��
    $('#links').on('tap','a',function(){
        //alert(1)
      var id =  $(this).attr('data-id')

        //console.log(id);
        //����ǰ�����һ���������ѡ����ʽ
        $(this).addClass('active').siblings().removeClass('active');
        //��������
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
