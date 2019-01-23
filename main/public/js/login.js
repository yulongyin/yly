
$("#uname").focus(function () {
    $("#h_name").removeClass("visi_hidden");
});

$("#upwd").focus(function () {
    $("#h_pwd").removeClass("visi_hidden");
});
function getUname() {
    //获取输入用户名称
    var uname=$("#uname").val();
    var upwd=$("#upwd").val();
    console.log(uname,upwd);
    //1.创建异步xhr
    var xhr=createXhr();
    //2.监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            if(res == "0"){
                alert("用户名或密码错误！")
                return;
            }else{
                alert("登录成功！")
            }
        }
    }
    //3.打开连接
    if(uname == ""){
        $("#h_name").children().find("span").attr("style","color:red;").html("请输入用户名！");
        return;
    }
    if(upwd == ""){
        $("#h_pwd").children().find("span").attr("style","color:red;").html("请输入密码！");
        return;
    }
    xhr.open("post","/users/getUser",true);
    //增加：设置post方法请求时的消息头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //4.发送请求
    var sendMsg="uname="+uname+"&phone="+uname+"&email="+uname+"&upwd="+upwd;
    xhr.send(sendMsg);
}
