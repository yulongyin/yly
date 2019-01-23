
$(function(){
    //返回顶部
    $("#returnTop").click(function () {
        var speed = 500;
        $("body,html").animate({scrollTop:0},speed);
        return false;
    });
    
    //返回顶部图标显示隐藏
    window.onscroll = function () {
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 300)
            $("#returnTop").show();
        else
            $("#returnTop").hide();
    }
    var i = 1;
    $("#carousel>div>ul li").hide();
    $("#carousel>div>ul li:nth-child("+i+")").show();
    /*
    setInterval(function () {
        i++;
        $("#carousel>div>ul li").hide();
        if(i>5) i=1;
        $("#carousel>div>ul li:nth-child("+i+")").show();
    },3000);
    
*/
    getClassify();
    //1.获取作品分类列表 ---> 完成
    function getClassify(){
        var xhr = createXhr();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var res = xhr.responseText;
                var result = JSON.parse(res);
                var frag = document.createDocumentFragment();
                var ul = document.createElement("ul");
                var li = document.createElement("li");;
                li.innerHTML = "作品分类";
                ul.appendChild(li);
                var li = document.createElement("li");;
                li.innerHTML = "全部";
                ul.appendChild(li);
                for(var key in result){
                    var li = document.createElement("li");;
                    li.innerHTML = result[key].cname;
                    ul.appendChild(li);
                    frag.appendChild(ul);
                }
                var div = document.getElementById("con_nav");
                div.appendChild(ul);
            }
        } 
        xhr.open("get","/products/getClassify",true);
        xhr.send(null);
    }
    /*----------------------1.获取作品分类列表 ---> ------------------完成*/






/*--------------------------------左侧导航效果---------------------------------------------*/

    //页面加载即显示全部作品
    showAll();
    function showAll(){
        var xhr = createXhr();
        var cname = "";
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var res = xhr.responseText;
                var result = JSON.parse(res)[0].count;
                showBtn(result);
           
            }
        }
        xhr.open("get","/products/showLimit?cname="+cname,true);
        xhr.send(null);

        //点击左侧导航显示的作品以及分页列
        showAllPro();
        //点击左侧导航显示的作品以及分页列
        function showAllPro(){
            var xhr = createXhr();
            var cname = "全部";
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    var res = xhr.responseText;
                    result = JSON.parse(res);
                    showPro(result);
                    //左侧分类列表间的切换
                    $("#content #con_nav ul li").click(leftEnter);
                    
                }
            }
            $("#con_main>h2").html(cname);
            var pageStart = 0;
            xhr.open("get","/products/changeBtnByCname?cname="+cname+"&pageStart="+pageStart,true);
            xhr.send(null);
        }
       
    }
    //左侧分类列表间的切换
    function leftEnter(){
        
        $("#content #con_nav li:not(:first-child)").attr("style","background:#CCC;");
        $(this).attr("style","background:#aaa;");
        var cname = $(this).html();
        var xhr = createXhr();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var res = xhr.responseText;
                result = JSON.parse(res);
                showPro(result);
            }
        }
        $("#con_main>h2").html(cname);
        var pageStart = 0;
        xhr.open("get","/products/changeBtnByCname?cname="+cname+"&pageStart="+pageStart,true);
        xhr.send(null);

        //查找全部作品，每页显示6条
        selectProByPname();
        function selectProByPname(){
            var xhr = createXhr();
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    var res = xhr.responseText;
                    var result = JSON.parse(res)[0].count;
                    showBtn(result);
                }
            }
            xhr.open("get","/products/showLimit?cname="+cname,true);
            xhr.send(null);
        }
    }
    var n = 0;
    //提取，显示分页按钮
    function showBtn(result){
        var num = result;
        n = Math.ceil(num / 6);  //向上取整  获得页数
        //console.log(n);
        var frag = document.createDocumentFragment();
        var li = document.createElement("li");
        var input = document.createElement("input");
        input.setAttribute("class","not_change");
        input.setAttribute("type","button");
        input.setAttribute("value","首页");
        li.appendChild(input);
        frag.appendChild(li);
        var li = document.createElement("li");
        var input = document.createElement("input");
        input.setAttribute("class","not_change");
        input.setAttribute("type","button");
        input.setAttribute("value","上一页");
        li.appendChild(input);
        frag.appendChild(li);
        for(var i = 0;i < n ; i++){
            var li = document.createElement("li");
            var input = document.createElement("input");
            input.setAttribute("type","button");
            input.setAttribute("value",i+1);
            if(i == 0){
                input.setAttribute("class","not_change");
            }
            li.appendChild(input);
            frag.appendChild(li);
        }
        var li = document.createElement("li");
        var input = document.createElement("input");
        input.setAttribute("type","button");
        input.setAttribute("value","下一页");
        li.appendChild(input);
        frag.appendChild(li);
        var li = document.createElement("li");
        var input = document.createElement("input");
        input.setAttribute("type","button");
        input.setAttribute("value","尾页");
        li.appendChild(input);
        frag.appendChild(li);
        var ul = document.getElementById("change_page").children[0];
        ul.innerHTML="";
        ul.appendChild(frag);
        $("#change_page ul li input").click(pagingBtn);
    }
    
    
    var pageStart = 0;
    //点击分页按钮切换数据
    function pagingBtn(){
        var $val = $(this).val();
        var cname = $("#con_main>h2").html();
        if(pageStart == 0){
            $("#change_page ul>li:nth-child(2)>input").addClass("not_change");
        }else if(pageStart == (n-1)*6){
            $("#change_page ul>li:last:prev>input").addClass("not_change");
        }
        if($val == "上一页" && pageStart != 0){
            pageStart = parseInt(pageStart - 6);
        }else if($val == "首页"){
            pageStart = 0;
        }else if($val == "下一页"){
            pageStart = parseInt(pageStart + 6);
        }else if($val == "尾页"){
            pageStart = parseInt((n-1)*6);
        }else{
            pageStart = ($val - 1) * 6;
        }
        console.log(pageStart);

        var xhr = createXhr();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var res = xhr.responseText;
                var result = JSON.parse(res);

                showPro(result);

            }
        }
        xhr.open("get","/products/changeBtnByCname?cname="+cname+"&pageStart="+pageStart,true);
        xhr.send(null);
    }

    //提取--左侧导航点击
    function showPro(result){
        var frag = document.createDocumentFragment();
        for(var key in result){
            var ul = document.createElement("ul");
            frag.appendChild(ul);
            var li1 = document.createElement("li");;
            ul.appendChild(li1);
            var li2 = document.createElement("li");
            ul.appendChild(li2);
            var img = new Image();
            img.src=result[key].addr;
            li1.appendChild(img);
            li2.innerHTML = result[key].pname;
            ul.appendChild(li1);
            ul.appendChild(li2);
        }

        var div = document.getElementsByClassName("con_show")[0];
        div.innerHTML = "";
        div.appendChild(frag);
    }
    

    //左侧导航----鼠标悬浮效果
    $("#content #con_nav li:not(:first-child)").mouseenter(function(){
        $("#content #con_nav li:not(:first-child)").attr("style","background:#CCC;");
        $(this).attr("style","background:#aaa;");
    })


    /*--------------------------------左侧导航效果  完成---------------------------------------------*/


})