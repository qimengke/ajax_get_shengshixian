/**
 * Created by Evil on 16/8/29.
 */
/**
 * 此方法解决不同浏览器对XMLHttpRequest对象的兼容问题
 * @returns {*}
 */
function createXMLHttpRequest(){
    try {
        return new window.XMLHttpRequest();
    }catch(e){
        try{
            return new ActiveXObject("MSXML2.XMLHTTP.6.0");
        }catch(e){
            try{
                return new ActiveXObject("MSXML2.XMLHTTP.3.0");
            }catch(e){
                try{
                    return new ActiveXObject("MSXML2.XMLHTTP");
                }catch(e){
                    if(window.confirm("浏览器版本太低,是否要下载新版本的浏览器")){
                        window.location.href="http://download.firefox.com.cn/releases/firefox/48.0/zh-CN/Firefox-latest.dmg";
                    }
                }
            }
        }
    }
}
function ajaxRequest(_method,_url,_parameter,_fn,_async){
    var _ajax=createXMLHttpRequest();
    if(_ajax) {
        _ajax.onreadystatechange = function () {
            if (_ajax.readyState == 4) {
                _fn(_ajax.responseText);
            }
        }
        _ajax.open(_method, _url, _async);
        //第一个参数打开远程连接的方式
        //第二个参数表示远程服务器地址
        //第三个参数表示异步(true)还是同步(false);
       // _ajax.setRequestHeader("content-Type","Application/x-www-form-urlencoded;charset=utf-8");
        //_ajax.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
        _ajax.send(_parameter);
    }
}