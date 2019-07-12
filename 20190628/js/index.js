$(function () {
    //    装修不费心
    $(".price-icon").on("mouseenter", ".price-item", function () {
        var li = $(this);
        var index = li.index();
        $(".price-all").children(":eq(" + index + ")").animate({
            opacity: 1
        }, 100).siblings().animate({
            opacity: 0
        }, 300);
    });


    //    严选国际品牌
    var swiper2 = new Swiper('.super-all .swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 135,
        loop: true,
        speed: 500,
        pagination: {
            el: '.super-all .swiper-pagination',
        },
        navigation: {
            nextEl: '.super-all .swiper-button-next',
            prevEl: '.super-all .swiper-button-prev',
        }
    });
    var swiper = new Swiper('.wood-center .swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 5,
        spaceBetween: 65,
        loop: true,
        speed: 500,
        pagination: {
            el: '.wood-center .swiper-pagination',
        },
        navigation: {
            nextEl: '.wood-center .swiper-button-next',
            prevEl: '.wood-center .swiper-button-prev',
        }
    });
    var swiper3 = new Swiper('.space-banner .swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 500,
        pagination: {
            el: '.space-banner .swiper-pagination',
        },
        navigation: {
            nextEl: '.space-banner .swiper-button-next',
            prevEl: '.space-banner .swiper-button-prev',
        }
    });

    $(document).ready(function () {

        /* 设置第一张图片 */
        $(".slider .bd li").first().before($(".slider .bd li").last());

        /* 鼠标悬停箭头按钮显示 */
        $(".slider").hover(function () {
            $(this).find(".arrow").stop(true, true).fadeIn(300)
        }, function () {
            $(this).find(".arrow").fadeOut(300)
        });

        /* 滚动切换 */
        $(".slider").slide({
            titCell: ".hd ul",
            mainCell: ".bd ul",
            effect: "leftLoop",
            autoPlay: true,
            vis: 3,
            autoPage: true,
            trigger: "click"
        });

    });


    var win = $(".space-banner");
    var links = $(".space-title p");
    var float = $(".float");
    var divs = $(".space-list");
    var num1 = 0;
    var num2 = 0;
    win.hover(function () {
        $(".leftB,.rightB").css("display", "block");
    }, function () {
        $(".leftB,.rightB").css("display", "none");
    });
    $(".leftB").click(function () {
        divs.finish();
        float.stop(true);
        var temp = num1;
        num1--;
        if (num1 == -1) {
            num1 = 6;
        }
        divs.eq(num1).css("left", "100%").animate({left: 0});
        divs.eq(temp).animate({left: "-100%"});
        links.css("color", "#000");
        float.animate({left: links.eq(num1).position().left});
        links.eq(num1).css("color", "#dc0000");
    });
    $(".rightB").click(function () {
        divs.finish();
        float.stop(true);
        var temp = num1;
        num1++;
        if (num1 == 7) {
            num1 = 0;
        }
        divs.eq(num1).css("left", "-100%").animate({left: 0});
        divs.eq(temp).animate({left: "100%"});
        links.css("color", "#000");
        float.animate({left: links.eq(num1).position().left})
        links.eq(num1).css("color", "#dc0000");
    });
    links.hover(function () {
        //
        divs.finish();
        float.stop(true);
        links.css("color", "#000");
        var that = $(this);
        var lefts = $(this).position().left;
        float.animate({left: lefts}, function () {
            that.css("color", "#dc0000");
        });
        //
        //ݱ仯
        var index = $(this).index(".space-title p");
        num2 = index;
        if (num1 == num2) {
            return;
        } else if (num1 < num2) {
            divs.eq(num2).css("left", "100%").animate({left: 0});
            divs.eq(num1).animate({left: "-100%"});
        } else if (num1 > num2) {
            divs.eq(num2).css("left", "-100%").animate({left: 0});
            divs.eq(num1).animate({left: "100%"});
        }
        num1 = num2;
        num2 = "";
    }, function () {

    })
});