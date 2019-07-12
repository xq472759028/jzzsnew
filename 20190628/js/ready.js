$(function () {
 
    $(document).ready(function () {
        /* 设置第一张图片 */
        $(".Yingmai-lunboxq .slider .bd li").first().before($(".Yingmai-lunboxq .slider .bd li").last());
        /* 鼠标悬停箭头按钮显示 */
        $(".Yingmai-lunboxq .slider").hover(function () {
            $(this).find(".Yingmai-lunboxq .arrow").stop(true, true).fadeIn(300)
        }, function () {
            $(this).find(".Yingmai-lunboxq .arrow").fadeOut(300)
        });

        /* 滚动切换 */
        $(".Yingmai-lunboxq .slider").slide({
            titCell: ".hd ul",
            mainCell: ".bd ul",
            effect: "leftLoop",
            // autoPlay: true,
            vis: 3,
            autoPage: true,
            trigger: "click"
        });
    });


    var win = $(".Yingmai-lunboxq .space-banner");
    var links = $(".Yingmai-lunboxq .space-title p");
    var float = $(".Yingmai-lunboxq .float");
    var divs = $(".Yingmai-lunboxq .space-list");
    var num1 = 0;
    var num2 = 0;
    win.hover(function () {
        $(".Yingmai-lunboxq .leftB,.rightB").css("display", "block");
    }, function () {
        $(".Yingmai-lunboxq .leftB,.rightB").css("display", "none");
    });
    $(".Yingmai-lunboxq .leftB").click(function () {
        divs.finish();
        float.stop(true);
        var temp = num1;
        num1--;
        if (num1 == -1) {
            num1 = 6;
        }
        console.log(temp);
        console.log(num1);
        divs.eq(num1).css("left", "100%").animate({left: 0});
        divs.eq(temp).animate({left: "-100%"});
        links.css("color", "#000");
        float.animate({left: links.eq(num1).position().left});
        links.eq(num1).css("color", "#dc0000");
    });
    $(".Yingmai-lunboxq .rightB").click(function () {
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
        divs.finish();
        float.stop(true);
        links.css("color", "#000");
        var that = $(this);
        var lefts = $(this).position().left;
        float.animate({left: lefts}, function () {
            that.css("color", "#dc0000");
        });

        var index = $(this).index(".Yingmai-lunboxq .space-title p");
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

