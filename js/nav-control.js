/**
 * 导航栏自动隐藏/显示控制
 * 依赖：页面中需要有 id="header" 的导航栏元素，以及 class="nav_trigger_area" 的触发区域
 */

(function() {
    // DOM 元素
    const header = document.getElementById('header');
    const triggerArea = document.querySelector('.nav_trigger_area');

    // 状态变量
    let isHovering = false;        // 鼠标是否在导航栏或触发区内
    let hideTimer = null;          // 隐藏延迟定时器

    // 显示导航栏
    function showHeader() {
        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }
        if (header) {
            header.classList.add('show');
        }
    }

    // 隐藏导航栏
    function hideHeader() {
        // 如果鼠标在区域内 或 页面在顶部，则不隐藏
        if (isHovering || window.scrollY === 0) {
            return;
        }
        if (hideTimer) {
            clearTimeout(hideTimer);
        }
        hideTimer = setTimeout(() => {
            if (header && !isHovering && window.scrollY !== 0) {
                header.classList.remove('show');
            }
            hideTimer = null;
        }, 50);
    }

    // 强制隐藏（用于滚动离开顶部且鼠标不在区域时）
    function forceHideIfNeeded() {
        if (!isHovering && window.scrollY !== 0) {
            if (hideTimer) {
                clearTimeout(hideTimer);
            }
            if (header) {
                header.classList.remove('show');
            }
        }
    }

    // 鼠标进入导航栏或触发区域
    function handleMouseEnter() {
        isHovering = true;
        showHeader();
        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }
    }

    // 鼠标离开导航栏或触发区域
    function handleMouseLeave() {
        isHovering = false;
        // 如果页面不在顶部，则延迟隐藏
        if (window.scrollY !== 0) {
            if (hideTimer) {
                clearTimeout(hideTimer);
            }
            hideTimer = setTimeout(() => {
                if (header && !isHovering && window.scrollY !== 0) {
                    header.classList.remove('show');
                }
                hideTimer = null;
            }, 100);
        }
    }

    // 滚动事件处理
    function handleScroll() {
        if (window.scrollY === 0) {
            // 滚动到顶部：显示导航栏
            showHeader();
        } else {
            // 滚动离开顶部：如果鼠标不在区域内，则隐藏
            if (!isHovering) {
                forceHideIfNeeded();
            }
        }
    }

    // 添加事件监听（确保元素存在）
    if (header) {
        header.addEventListener('mouseenter', handleMouseEnter);
        header.addEventListener('mouseleave', handleMouseLeave);
    }
    if (triggerArea) {
        triggerArea.addEventListener('mouseenter', handleMouseEnter);
        triggerArea.addEventListener('mouseleave', handleMouseLeave);
    }

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);

    // 页面初始化：根据滚动位置决定导航栏初始状态
    if (window.scrollY === 0) {
        showHeader();
    } else {
        // 非顶部时初始隐藏（确保鼠标不在区域）
        isHovering = false;
        if (header) {
            header.classList.remove('show');
        }
    }

    // 页面加载完成后，处理可能的异步布局变化
    window.addEventListener('load', function() {
        if (window.scrollY === 0) {
            showHeader();
        }
    });
})();