
//验证用户名
function searchUser(){
    //获取输入用户名称
    var uname=$("#uname").val();
    //1.创建异步xhr
    var xhr=createXhr();
    //2.监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            if(uname === ""){
                $("#uname").parent().next().attr("style","color:red;").html("请输入2~16位用户名");
                return;
            }
            var res=xhr.responseText;
            if(res == "0"){
                $("#uname").parent().next().attr("style","color:yellow;").html("可以注册");
            }else{
                $("#uname").parent().next().attr("style","color:red;").html("用户名已存在");
            }
        }
    }
    if(uname == ""){
        $("#uname").parent().next().attr("style","color:red;").html("请输入用户名");
    }
    //3.打开连接
    xhr.open("post","/users/searchUser",true);
    //增加：设置post方法请求时的消息头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //4.发送请求
    var sendMsg="uname="+uname;
    xhr.send(sendMsg);
}
//验证重复密码
//1、光标离开密码框
function upwdBlur() {
    var upwd = $("#upwd").val();
    var u = $("#upwd").parent().next();
    if(upwd == "")
        u.attr("style","color:red;").html("请输入密码");
    else if(upwd.length < 6 || upwd.length > 16)
        u.attr("style","color:red;").html("请输入6-16位密码");
    else
        u.attr("style","color:yellow;").html("输入正确");
}
//2、光标离开再次输入密码框
function cpwdBlur() {
    var upwd = $("#upwd").val();
    var cpwd = $("#cpwd").val();
    if(cpwd === "")
        $("#cpwd").parent().next().attr("style","color:red;").html("请再次输入密码");
    else if(cpwd !== upwd)
        $("#cpwd").parent().next().attr("style","color:red;").html("密码输入有误");
    else
        $("#cpwd").parent().next().attr("style","color:yellow;").html("输入正确");
}

//验证手机号
function searchPhone(){
    //获取输入手机号
    var phone=$("#phone").val();
    //1.创建异步xhr
    var xhr=createXhr();
    //2.监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            var p = $("#phone").parent().next();
            if(res == "0"){
                var msg = /^\d{11}$/;
                if(phone.search(msg) != -1)
                    p.attr("style","color:yellow;").html("手机号正确");
                else if(phone == "")
                    p.html();
                else
                    p.attr("style","color:red;").html("手机号错误");
            }
        }
    }
    //3.打开连接
    xhr.open("post","/users/searchPhone",true);
    //增加：设置post方法请求时的消息头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //4.发送请求
    var sendMsg="phone="+phone;
    xhr.send(sendMsg);
}
//验证邮箱
function searchEmail(){
    //获取输入邮箱
    var email=$("#email").val();
    //1.创建异步xhr
    var xhr=createXhr();
    //2.监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;

            var e = $("#email").parent().next();
            if(res == "0"){
                var msg = /^\w{1,}@[0-9a-zA-Z]{1,8}\.(com|cn|net|org)$/;
                if(email.search(msg) != -1)
                    e.attr("style","color:yellow;").html("邮箱正确");
                else if(email == "")
                    e.html();
                else
                    e.attr("style","color:red;").html("邮箱格式有误");
            }
        }
    }
    //3.打开连接
    xhr.open("post","/users/searchEmail",true);
    //增加：设置post方法请求时的消息头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //4.发送请求
    var sendMsg="email="+email;
    xhr.send(sendMsg);
}

//注册按钮
function getUname() {
    //获取输入邮箱
    var uname=$("#uname").val();
    if(uname == ""){
        alert("用户名不能为空")
        return;
    }
    var upwd=$("#upwd").val();
    if(upwd == ""){
        alert("密码不能为空")
        return;
    }

    var cpwd=$("#cpwd").val();
    if(cpwd == ""){
        alert("请再次输入密码")
        return;
    }
    var phone=$("#phone").val();
    var email=$("#email").val();
    var userName=$("#userName").val();
    var sex=0;
    var remark=$("#remark").val();
    var s = $("#sex").children("input");
    //0-->男   1-->女  2-->保密
    for(var i = 0;i < s.length;i++){
        if(s[i].checked){
            sex = i;
        }
    }
    //1.创建异步xhr
    var xhr=createXhr();
    //2.监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            if(res == "0"){
                alert("注册失败")
            }else
                alert("注册成功")
        }
    }
    //3.打开连接
    xhr.open("post","/users/register",true);
    //增加：设置post方法请求时的消息头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //4.发送请求
    var sendMsg="uname="+uname+"&upwd="+upwd+"&phone="+phone+"&email="+email+"&userName="+userName+"&sex="+sex+"&remark="+remark;
    xhr.send(sendMsg);
}
