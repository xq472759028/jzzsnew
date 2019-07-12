window.onload = function () {
    // 头部开始

    // 家具图册结束
    // 导航条开始

    // function loadImage(url, callback) {
    //     var img = new Image(); //创建一个Image对象，实现图片的预下载
    //     img.src = url;
    //     if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
    //         callback.call(img);
    //         return; // 直接返回，不用再处理onload事件
    //     }
    //     img.onload = function () { //图片下载完毕时异步调用callback函数。
    //         callback.call(img);//将回调函数的this替换为Image对象
    //     };
    // };

    // var img = document.querySelector(".swiper-slide-img");
    // img.addEventListener("mouseover", function(e) {
    //     var box = img.getBoundingClientRect();
    //     if((e.clientX - box.left) < ((box.right - box.left) / 2))
    //         img.style.cursor = "url('../images/feel3.png')";
    //     else
    //         img.style.cursor = "url('../images/feel4.png')";
    // });
    // img.addEventListener("mouseout", function() {
    //     img.style.cursor = "default";
    // });
    var swiper = new Swiper('.pc .swiper-container', {
        /*
         * 设置为true -> 开启图片延迟加载
         * <img>的src属性改为data-src，class增加一个'swiper-lazy'
         * 如果直接用div，设置background，对应的改为data-background即可
         */
        lazyLoading: true,
        lazyLoadingInPrevNext : true,
        // 这个为true时，↓才有用
        lazyLoadingInPrevNextAmount: 4 // 设置在延迟加载图片时提前多少个slide
    });

    var viewSwiper = new Swiper('.view .swiper-container', {
        onSlideChangeStart: function () {
            updateNavPosition()
        }
    })
    $('.view .arrow-left,.preview .arrow-left').on('click', function (e) {
        e.preventDefault()
        // let hei=document.querySelectorAll(".swiper-lazy")
        // function loadImg(hei){
        //     hei.setAttribute('src',this.getAttribute('data-src'))
        // }
        // loadImg()
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
            return
            // alert(111)
        }
        viewSwiper.swipePrev()
    })

    $('.view').scroll(function (e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
            return
        } else if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.swipeTo(0, 1000);
            return
        }
        viewSwiper.swipePrev()
    })


    $('.view .arrow-right,.preview .arrow-right').on('click', function (e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.swipeTo(0, 1000);
            return
            // alert(222)
        }
        viewSwiper.swipeNext()
    })

    var previewSwiper = new Swiper('.preview .swiper-container', {
        visibilityFullFit: true,
        slidesPerView: 'auto',
        onlyExternal: true,
        onSlideClick: function () {
            viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
        }
    })

    function updateNavPosition() {
        $('.preview .active-nav').removeClass('active-nav')
       
        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) -1
                previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
            } else {
                previewSwiper.swipeTo(activeNav.index())
            }
        }
    }
//页面刷新
    let slide=$(".preview .swiper-slide");
    slide.each(function(){
      
        num = $(".active-nav").index()+1;
    });
    if (sessionStorage.slide_index) {
        num=sessionStorage.slide_index;
    }
    slide.removeClass("active-nav");
    slide.eq(num).addClass("active-nav");
    let width=$(".view .swiper-slide").width()*num;
    $(".view .swiper-wrapper").css({transform:'translateX('+-width+'px)'})
    $(".preview").click(function () {
        setTimeout(function () {
            let slide_li=$(".active-nav");
            let index=slide_li.index();
            sessionStorage.slide_index=index;
        },1)
    });
    $(".view").click(function () {
        setTimeout(function () {
            let slide_li=$(".active-nav");
            let index=slide_li.index();
            sessionStorage.slide_index=index;
        },1)
    });
    // 导航条结束

}