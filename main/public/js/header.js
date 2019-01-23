
$(function(){
    $("<link rel='stylesheet' href='../css/header.css'>").appendTo("head");
    $.ajax({
        url:"/header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#header")
            var $input = $("#search>ul>li>img").click(function(){
                var $img=$(this);
                var kwords=$img.prev().val();
                if(kwords.trim()!=="")
                location.href=`products.html?kwords=${kwords}`;
            })
            .prev().keyup(function(e){
                if(e.keyCode==13){
                $(this).next().click()
                }
            })

            if(location.search.indexOf("kwords=") != -1){
                $input.val(decodeURIComponent(location.search.split("=")[1]))
            }
        }
    })
});


$("#nav ul li").mouseenter(function(){
    $("#nav ul li").css("background","#fff");
    $(this).css("background","#666");
    $("#nav ul li a").css("color","#333");
    $(this).find("a").css("color","#fff");
});