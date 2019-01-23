$(function(){
    /**
    * 左侧选项卡
    */
    $(".yly-left-items>ul:first>li").click(function(e){
        e.preventDefault();
        var $li = $(this);
        $(".yly-left-items>ul:first>li").css("background","#aaa")
        $li.css("background","#bbb");
        var $item = $($li.attr("data-target"));
        $(".yly-left-items>ul:last>li").css("z-index",0);
        $item.css("z-index","10")
    });

    //返回顶部图标显示隐藏
    window.onscroll = function () {
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 300)
            $("#returnTop").show();
        else
            $("#returnTop").hide();
    }


    $(function(){
        //获取画布
        var c3 = document.getElementById("c3");
        //获取画笔
        var ctx = c3.getContext("2d");

        function pub(){
            //眼
            ctx.beginPath();
            ctx.arc(180,160,30,0,2*Math.PI);
            ctx.fillStyle = "#f0f";
            ctx.stroke();
            //眼珠
            ctx.beginPath();
            ctx.arc(190,155,10,0,2*Math.PI);
            ctx.stroke();
        }

        function img1(){
            //脸
            ctx.beginPath();
            ctx.arc(150,200,100,0,2*Math.PI);
            ctx.strokeStyle = "#00f";
            ctx.stroke();
            pub()
            //嘴
            ctx.beginPath();
            ctx.moveTo(170,220);
            ctx.lineTo(248,220);
            ctx.strokeStyle = "#00f";
            ctx.stroke();
        }

        function img2(){
            //脸
            ctx.beginPath();
            ctx.arc(150,200,100,45,345*Math.PI/180);
            ctx.stroke();
            pub();
            //嘴1
            ctx.beginPath();
            ctx.moveTo(170,220);
            ctx.lineTo(245,175);
            ctx.strokeStyle = "#00f";
            ctx.stroke();

            //嘴2
            ctx.beginPath();
            ctx.moveTo(170,220);
            ctx.lineTo(200,285);
            ctx.strokeStyle = "#00f";
            ctx.stroke();
        }
        var i = 0;
        setInterval(function(){
            ctx.clearRect(0,0,400,400);
            if(i % 2 == 0){
                img1()
            }else{
                img2();
            }
            i++;
        },500)
    })

    
    //random number 返回指定范围内的随机整数
    function rn(min,max){
        var n = Math.random() * (max - min) + min;
        return Math.floor(n);
    }
    //random color 返回指定范围内的随机颜色
    function rc(min,max){
        var r = rn(min,max);
        var g = rn(min,max);
        var b = rn(min,max);
        return `rgb(${r},${g},${b})`;
    }

    var s3 = document.getElementById("s3");
    for(var i = 0;i < 200;i++){
        var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
        c.setAttribute("cx",rn(10,900));
        c.setAttribute("cy",rn(10,500));
        c.setAttribute("r",rn(10,80));
        c.setAttribute("fill",rc(0,255));
        c.setAttribute("fill-opacity",Math.random());
        s3.appendChild(c);
        c.onclick = function(){
            var t = setInterval(()=>{
                this.onclick = null;
                var r = this.getAttribute("r");
                r *= 1.05;
                this.setAttribute("r",r);
                var p = this.getAttribute("fill-opacity");
                p *= 0.9;
                this.setAttribute("fill-opacity",p)
                if(p < 0.01){
                    clearInterval(t);
                    s3.removeChild(this);
                }
            },50)
        }
    }

    var main = document.getElementById("e1");
    var mychart = echarts.init(main);
    var option = {
        //title:{text:"echart示例--饼图"},
        series:[{
            type:"pie",
            radius:"50%",
            center:["20%","50%"],
            data:[
                {value:200,name:"java"},
                {value:50,name:".net"},
                {value:240,name:"web"},
                {value:150,name:"ui"}
            ],
        }]
    };
    mychart.setOption(option);


    var main = document.getElementById("e2");
    var mychart = echarts.init(main);
    var option = {
        //title:{text:"echart示例--折线"},
        xAxis:{data:["衣服","衬衫","鞋子","袜子","外套","短裤"]},
        yAxis:{},
        series:[
            {type:"line",data:[21,56,51,63,26,38]},
            {type:"bar",data:[21,56,51,63,26,38]}
        ]
    };
    mychart.setOption(option);
})
