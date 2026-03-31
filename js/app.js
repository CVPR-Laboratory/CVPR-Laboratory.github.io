$(function () {
    banner();
    share();
	/*推荐产品切换*/
	$(".pro_con").slide({});
	/*产品中心*/
    $('.index .case').slide({ titCell:'.hd ul', mainCell:'.bd ul', autoPlay:true, autoPage:true, delayTime:300, effect:'leftLoop',trigger:"click",scroll:4,vis:4});

	/*头部置顶*/
	$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>=40){ 
        $('.header_main').addClass('bg');
    }else{
		$('.header_main').removeClass('bg');}
});
	$("#top").click(function () {
        $("body, html").stop().animate({ "scrollTop": 0 });
    });
});
// banner焦点图
function banner() {
    if (!$("#banner").length || $("#banner li").length <= 1) {	return false; }
    $("#banner ul li:gt(0)").css({"display":"none"});
    var b = $("#banner"),
        me = $("#banner ul"),
        tip = $("#banner .tip"),
        t, interval = 5000,
        speed = 1000,
        speed2 = 700,
        n = 0,
        N = me.children("li").length;
    wid = b.children("li").width();
    step = 200,time = 5000;
    if ($("#banner .tip").length) {
        var htmlTip = "";
        for (var i = 0; i < N; i++) {
            if (i == 0) {
                htmlTip += "<span class='cur'>"+(i+1)+"</span>";
            } else {
                htmlTip += "<span>"+(i+1)+"</span>";
            }
        }
        tip.html(htmlTip);
    }
    var func = function() {
        if (n >= N - 1) {
            n = 0;
        }else if(n < -1){
            n = N-1;
        }
        else {
            n++;
        }
        me.children("li").eq(n).css({
            "z-index": 2
        }).stop().fadeIn(speed).siblings("li").css({
            "z-index": 1
        }).stop().fadeOut(speed2);
        if ($("#banner .tip").length) {
            tip.children("span").eq(n).addClass("cur").siblings("span").removeClass("cur");
        }
    }
    $dragBln = false;
    $("#btn_prev").click(function(){
        clearInterval(t);
        n -= 2;
        func();
        t = setInterval(func, time)
    });
    $("#btn_next").click(function(){
        clearInterval(t);
        func();
        t = setInterval(func, time)
    });

    tip.children("span").click(function() {
        clearInterval(t);
        n = $(this).index() - 1;
        func();
        t = setInterval(func, interval);
    })
    $("#banner ul.list li").mouseenter(function() {
        clearInterval(t);
    }).mouseleave(function() {
        t = setInterval(func, time);
    });
    t = setInterval(func, interval);
}
function share(){
	window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    },
    "share": {},
    "slide": { // 跟图标式的代码相比，这里是添加了浮窗式 slide 属性配置
        "type": "slide",
        "bdImg": "6",
        "bdPos": "left",
        "bdTop": "100"
    }
};
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
    var script = document.createElement('script');
    script.src = 'https://bdimg.share.baidu.com/static/apijs/share.js?cdnversion=' + ~(-new Date() / 36e5);
    (document.getElementsByTagName('head')[0] || document.body).appendChild(script);
}