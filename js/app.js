// 入口函数：页面DOM加载完成后自动执行内部代码（jQuery标准写法）
$(function () {
    // 调用自定义的banner轮播图函数
    banner();
    // 调用自定义的百度分享功能函数
    share();

    // 给class为pro_con的元素初始化slide轮播插件（无参数，使用默认配置）
    $(".pro_con").slide({});

    // 给首页案例区域初始化轮播插件，带详细配置参数
    $('.index .case').slide({ 
        titCell:'.hd ul',       // 导航（标题）元素选择器
        mainCell:'.bd ul',      // 轮播主体内容选择器
        autoPlay:true,          // 自动播放开启
        autoPage:true,          // 自动生成分页器
        delayTime:300,          // 动画延迟时间300ms
        effect:'leftLoop',      // 左滚动循环效果
        trigger:"click",        // 触发方式：点击
        scroll:4,               // 每次滚动4个项目
        vis:4                   // 一屏显示4个项目
    });

    /* 原头部置顶逻辑已移除，避免与导航栏固定定位冲突 */

    // 给id为top的元素绑定点击事件：返回顶部按钮
    $("#top").click(function () {
        // 同时给body和html执行动画：滚动到顶部（stop()防止动画叠加）
        $("body, html").stop().animate({ "scrollTop": 0 });
    });
});

// ==================== 自定义函数：banner焦点图轮播（核心逻辑） ====================
function banner() {
    // 判断：如果没有banner元素 或 轮播项≤1，则不执行轮播，直接返回
    if (!$("#banner").length || $("#banner li").length <= 1) {	return false; }
    
    // 初始隐藏第2张及以后的轮播图片（只显示第1张）
    $("#banner ul li:gt(0)").css({"display":"none"});

    // 定义轮播所需的所有变量
    var b = $("#banner"),          // 轮播最外层容器
        me = $("#banner ul"),      // 轮播列表ul
        tip = $("#banner .tip"),   // 轮播指示器（小圆点/数字）
        t,                         // 定时器ID（用于自动播放）
        interval = 2000,           // 自动播放间隔：2秒
        speed = 1000,              // 淡入动画速度：1秒
        speed2 = 700,              // 淡出动画速度：700毫秒
        n = 0,                     // 当前轮播项索引（从0开始）
        N = me.children("li").length; // 轮播项总数量
    
    wid = b.children("li").width(); // 轮播项宽度（未使用，保留原代码）
    step = 200,time = 5000;        // 步长、切换时间（与interval重复，保留原代码）

    // 判断：如果页面中有指示器tip，则动态生成指示器数字
    if ($("#banner .tip").length) {
        var htmlTip = ""; // 拼接指示器HTML的字符串
        // 循环轮播项数量，生成对应数量的指示器
        for (var i = 0; i < N; i++) {
            if (i == 0) {
                // 第1个指示器默认添加选中样式cur
                htmlTip += "<span class='cur'>"+(i+1)+"</span>";
            } else {
                // 其他指示器无样式
                htmlTip += "<span>"+(i+1)+"</span>";
            }
        }
        // 把生成的指示器HTML插入到tip容器中
        tip.html(htmlTip);
    }

    // 定义轮播切换核心函数
    var func = function() {
        // 索引判断：到达最后一张时，回到第1张
        if (n >= N - 1) {
            n = 0;
        }else if(n < -1){
            // 索引小于-1时，跳转到最后一张
            n = N-1;
        }
        else {
            // 正常情况：索引+1，切换下一张
            n++;
        }

        // 执行轮播动画：当前项淡入，其他项淡出
        me.children("li").eq(n).css({
            "z-index": 2 // 当前项置顶层级
        }).stop().fadeIn(speed).siblings("li").css({
            "z-index": 1 // 其他项底层级
        }).stop().fadeOut(speed2);

        // 指示器同步切换：当前项添加选中样式，其他移除
        if ($("#banner .tip").length) {
            tip.children("span").eq(n).addClass("cur").siblings("span").removeClass("cur");
        }
    }

    $dragBln = false; // 拖拽开关（原代码未使用，保留）

    // 上一张按钮点击事件
    $("#btn_prev").click(function(){
        clearInterval(t); // 清除自动播放定时器
        n -= 2;           // 索引-2，配合func()的n++，实现回退1张
        func();           // 执行切换
        t = setInterval(func, time) // 重新开启自动播放
    });

    // 下一张按钮点击事件
    $("#btn_next").click(function(){
        clearInterval(t); // 清除定时器
        func();           // 执行切换（索引+1）
        t = setInterval(func, time) // 重启定时器
    });

    // 指示器点击事件：点击哪个就切换到哪一张
    tip.children("span").click(function() {
        clearInterval(t);            // 清除自动播放
        n = $(this).index() - 1;    // 获取点击的索引，-1配合func()++
        func();                     // 执行切换
        t = setInterval(func, interval); // 重启自动播放
    })

    // 鼠标悬停在轮播图上时：暂停自动播放
    $("#banner ul.list li").mouseenter(function() {
        clearInterval(t);
    // 鼠标离开时：恢复自动播放
    }).mouseleave(function() {
        t = setInterval(func, time);
    });

    // 页面加载完成后，启动自动轮播定时器
    t = setInterval(func, interval);
}

// ==================== 自定义函数：百度分享功能 ====================
function share(){
    // 配置百度分享的全局参数
	window._bd_share_config = {
        "common": {
            "bdSnsKey": {},        // 分享密钥（空）
            "bdText": "",          // 分享文字（空，默认取页面标题）
            "bdMini": "2",         // 分享组件样式类型
            "bdMiniList": false,   // 不显示小图标列表
            "bdPic": "",           // 分享图片（空）
            "bdStyle": "0",        // 分享样式
            "bdSize": "16"         // 图标大小16px
        },
        "share": {},               // 分享按钮配置（空）
        "slide": { // 侧悬浮分享组件配置
            "type": "slide",       // 类型：侧悬浮
            "bdImg": "6",          // 悬浮图标样式
            "bdPos": "left",       // 悬浮位置：左侧
            "bdTop": "100"         // 距离顶部100px
        }
    };

    // 注意：这里重复赋值，会覆盖上面的完整配置，只保留分享尺寸
	window._bd_share_config = {
		share : [{
			"bdSize" : 16 // 分享图标大小16px
		}],
	}

    // 动态创建script标签，加载百度分享官方JS
    var script = document.createElement('script');
    // JS地址（带CDN版本号，防止缓存）
    script.src = 'https://bdimg.share.baidu.com/static/apijs/share.js?cdnversion=' + ~(-new Date() / 36e5);
    // 把JS插入到页面head或body中，加载完成后自动渲染分享组件
    (document.getElementsByTagName('head')[0] || document.body).appendChild(script);
}