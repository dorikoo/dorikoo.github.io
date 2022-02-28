//index.html의 메인컨텐츠에만 들어가는 js코드 작성

//mSlider
$(document).ready(function(){
    $('.main_slider .flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000,
        after: function(){ /* 슬라이드 변경된 이후에 */
            $('.main_slider .ms_wrap > *').addClass('active');
        },
        before: function(){ /* 슬라이드가 변경되기 전에 */
            $('.main_slider .ms_wrap > *').removeClass('active');
        },
        start: function(){ /* 플렉스슬라이더 시작될때 */
            $('.main_slider .ms_wrap > *').addClass('active');
        }
    });
    
    $(".new_item_slider").slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false
    });
    $(".best_item_slider").slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false
    });
    $(".review_slide").slick({
        dots: true,
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000
    });
    
    $("scroll_top").UItoTop({ 
        easingType: 'easeOutQuart',
        scrollSpeed: 500 /* 위로 올라가는 시간 조절 */
    });
});




