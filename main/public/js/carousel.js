
//$(function(){
    $("<link rel='stylesheet' href='../css/carousel.css'>").appendTo("head");
    $.ajax({
        url:"/carousel.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#carousel")
        }
    })


    var i = 1;
    $("#carousel>div>ul li").hide();
    $("#carousel>div>ul li:nth-child("+i+")").show();
    setInterval(function () {
        i++;
        $("#carousel>div>ul li").hide();
        if(i>5) i=1;
        $("#carousel>div>ul li:nth-child("+i+")").show();
    },3000);

//});
