$(function(){
//    ��������ť�󶨵���¼�
    $('#search-btn').on('click',function(){
        //alert(1);
    //    ��ȡ���������Ĺؼ���
       var keyword= $(this).siblings('input').val();
        if(keyword){
            //���ؼ��ִ洢��������
            //keyarr.push(keyword);
            //��unshift����Ϊ�û�������ã�������ʷ��¼����ͻ����������ķ���ǰ��
            keyarr.unshift(keyword);
                //���ؼ�������洢�ڱ���,���ش洢ֻ�ܴ洢�ַ�������
            localStorage.setItem('keyarr',JSON.stringify(keyarr));
            location.href="search-result.html?keyword="+keyword;
        }else{
            alert('�����������ؼ���');
        }
    });

//   ʵ����ʷ�ؼ��ֵĴ洢
//    ����һ���洢�ؼ��ֵ�����
//    ���û�����ؼ��ֺ��ȡ�ؼ��ֵ�ʱ�򽫹ؼ��ִ洢��������
    var keyarr=[];
    if(localStorage.getItem('keyarr')){
        keyarr=JSON.parse(localStorage.getItem('keyarr'));
        var html =template('historyTpl',{result:keyarr});
       $("#history-box").html(html);
    }

//    ��ձ�����ʷ��¼
   $('#clearBtn').on('click',function(){
       $("#history-box").html("");
       localStorage.removeItem(keyarr);
   })

});