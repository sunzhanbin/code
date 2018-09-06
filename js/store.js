var $navBa = $('.head_nav a')
var $navBa2 = $('.head_nav2 a')
var $nav = $('.head_nav')
var $nav2 = $('.head_nav2')
var $menuBtn = $('.stone_head .menu_icon')
function goNav() {
}
$navBa.click(function () {
    var activeId = $(this).attr("href")
    var sTop=50
   
    if($(document).width() > 750){
        if(activeId=="#solution"){
            sTop=100
        }
    }else{
        if(activeId=="#solution"){
            sTop=65
        }else{
            sTop=30
        }
    }
    if (activeId != '#') {
        var goDiv = $('body').find(activeId)
        var scrollTop = goDiv.offset()
        $("body,html").animate({
            scrollTop: scrollTop.top-sTop //让body的scrollTop等于pos的top，就实现了滚动 
        }, 1000, 'swing');
    } else {
        $("body,html").animate({
            scrollTop: 0 //让body的scrollTop等于pos的top，就实现了滚动 
        }, 500, 'swing');
    }
    $menuBtn.show()
})
$('.nav_img').click(function () {
    $("body,html").animate({
        scrollTop: 0 //让body的scrollTop等于pos的top，就实现了滚动 
    }, 500, 'swing');
})
$menuBtn.click(function () {
    $nav2.slideToggle("slow");
})
$navBa2.click(function () {
    $menuBtn.show()
    $nav2.hide()
})
function changeState() {
    var bodyScrollTop = $(document).scrollTop();
    if ($(document).width() > 750) {
        if (bodyScrollTop >= 35) {
            $('.nav_box').addClass("nav_box_white")
            $('.nav_img2').show()
            $('.nav_img1').hide()
        } else {
            $('.nav_img2').hide()
            $('.nav_img1').show()
            $('.nav_box').removeClass("nav_box_white")
        }
    }
}
window.onresize = function () {
    if ($(document).width() > 750) {
        changeState()
    } else {
        $('.nav_img2').show()
        $('.nav_img1').hide()
        if ($nav2.is(":hidden")) {
            $menuBtn.show()
        }
    }
}
window.onscroll = function () {
    changeState()
}