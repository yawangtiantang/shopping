$(function(){
    var keyword = getParamsByUrl(location.href,'keyword');
    console.log(keyword)
});

//��ȡ��ַ���еĲ���
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