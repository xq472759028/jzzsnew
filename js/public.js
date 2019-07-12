window.onload = function () {
    $(window).scroll(function () {
        var scroH = $(this).scrollTop();
        if (scroH >= 35) {
            $(".qzlead-bottom").addClass('qzlead-bottom-fixed');
            $(".qzlead-top").addClass('qzlead-top-fixed');
            return false;
        } else if (scroH < 35) {
            $(".qzlead-bottom").removeClass('qzlead-bottom-fixed');
            $(".qzlead-top").removeClass('qzlead-top-fixed');
            return false;
        }
    })


    //        热门城市
    $('.qzlead-area').hover(function () {
        $(this).addClass('qzlead-area-active');
        $(".qzlead-town").show();
        $(".qzlead-town").hover(function () {
            $(this).show();
        })
    }, function () {
        $(this).removeClass('qzlead-area-active');
        $(".qzlead-town").hide()
    });


    //    联系方式效果
    $('.qzlead-idea-hover').mouseenter(function () {
        $(".qzlead-contact").slideDown();
        $(".qzlead-contact").mouseenter(function () {
            $(this).show();
        }).mouseleave(function () {
            $(this).slideUp();
        })
    }).mouseleave(function () {
        $(".qzlead-contact").slideUp()
    });


    // 头部效果开始
    $(".qzlead-list-li").mouseenter(function () {
        $(this).find('a').css('border-bottom', '2px solid #084f2b');
        if ($(this).find('.qzlead-result')) {
            $(this).find('.qzlead-result').show();
            $(this).find('.qzlead-list-span').css('color', '#084f2b')
            // $(this).css('border-bottom', '1px solid #084f2b')
            $('.qzlead-result').hover(function () {
                $(this).show();
            })
            $('.qzlead-effect>li').mouseenter(function () {
                $(this).find('.qzlead-effect-on').css('display', 'none');
                $(this).find('.qzlead-effect-off').css('display', 'block');
                $(this).find('p').css("color", "#084f2b");
            }).mouseleave(function () {
                $(this).find('.qzlead-effect-on').css('display', 'block');
                $(this).find('.qzlead-effect-off').css('display', 'none');
                $(this).find('p').css("color", "#333");
            })
        } else {
            $(this).find('.qzlead-result').hide();
            $(this).find('.qzlead-list-span').css("color", "#333");
        }
    });
    $(".qzlead-list-li").mouseleave(function () {
        $this = $(this).find('a');
        if ($this[0].href == String(window.location)) {
            $this.css('border-bottom', '2px solid #084f2b');
        } else {
            $this.css('border-bottom', 'none');
        }
        $(this).find('.qzlead-result').hide();
        $(this).find('.qzlead-list-span').css("color", "#333");

    });


    $(".qzlead-list-li>a").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            console.log($this[0].href)
            console.log(String(window.location))
            $this.parent().siblings().find('.qzlead-list-span').removeClass('qzlead-list-color');
            $this.find('.qzlead-list-span').addClass('qzlead-list-color')
            $this.parent().siblings().find('a').css('border-bottom', 'none');
            $this.css('border-bottom', '2px solid #084f2b');
        }
    });
    var indexs = document.querySelectorAll('.qzlead-effect a');
    $(indexs).each(function (index, value) {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            $this.parent().parent().parent().parent().siblings().find('.qzlead-list-span').removeClass('qzlead-list-color')
            $this.parent().parent().parent().parent().siblings().css('border-bottom', 'none');
            $this.parent().parent().parent().parent().find('.qzlead-list-span').addClass('qzlead-list-color')
            $this.parent().parent().parent().parent().find('a').css('border-bottom', '2px solid #084f2b');


        }
    })


    //头部效果结束


    // 搜索框点击事件
    $('.qzlead-search-next').on('click', function () {

        $('.qzlead-list').fadeOut()
        $('.qzlead-search').fadeIn(200);
        $('.qzlead-search-next').fadeOut()
    })
    $(document).mouseup(function (e) {
        var _con = $('.qzlead-search');
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $('.qzlead-list').fadeIn(200);
            $('.qzlead-search').fadeOut()
            $('.qzlead-search-next').fadeIn(200);
        }
    });
}
