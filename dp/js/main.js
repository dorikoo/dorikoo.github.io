$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
         setTimeout(function(){
            $('.swiper-slide img').addClass('active');
         },50);
        },
      }
    });
    swiper.on('slideChange', function() { 
        $('.swiper-slide img').removeClass('active');
        setTimeout(function(){
            $('.swiper-slide img').addClass('active');
         },50);
    });
});

$(document).ready(function(){
    $('.mobile_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false, 
        responsive: 
        [ 
            { 
                /* 반응형웹*/ breakpoint: 768, 
                /* 기준화면사이즈 */ 
                settings: { 
                    slidesToShow:1, 
                    dots:true, 
                    autoplay: true,
                    autoplaySpeed: 1500
                } 
                /* 사이즈에 적용될 설정 */
            } 
        ]
    });
    $('.event_banner').slick();
});

var num = 15;
setInterval(function(){
    $('.red_bar').removeClass('active');
    var white = $('<div class="white_bar active" style="left:'+ num +'px;"></div>');
    $('.battery_animation').append(white);
	num = num + 20;
	if(num == 195){
		$('.white_bar').remove();
		$('.red_bar').addClass('active');
		num = 15;
	}
},250);

$(document).ready(function(){
    $('.panelBtn a').click(function(){
        $(this).toggleClass('active'); 
        $('.gnb, .top_nav').toggleClass('active'); 
        // popup open
        $('body').css({overflow:'hidden'});
        
        //havClass(클래스) : 문서객체가 해당클래스를 갖고 있으면 true, 갖고 있지 않으면 false를 반환 
        var has = $(this).hasClass('active');
        $('.mobile_Bg').show();
        
        if(!has){ //클래스가 없을때 has=false
            $('.mobile_Bg').css('height',$(window).innerHeight());
            $('.mobile_Bg').css('width', $(window).innerWidth());
            $('.mobile_Bg').hide();
            $('.gnb .main_menu').removeClass('active');   
            $('.gnb .sub_menu').slideUp(0);
            $('body').css({overflow:'visible'});
        }
    });
    
    //리사이즈 이벤트
    $(window).resize(function(){
        //리사이즈시 모바일 관련 클래스 모두 제거 
        $('.gnb, .top_nav, .gnb .main_menu, .panelBtn a, .gnb li').removeClass('active'); 
        $('.gnb .sub_menu').slideUp(0);
        $('.mobile_Bg').hide();
        
        //함수 실행을 창사이즈에 따라서 다르게 처리
        //창의 가로사이즈 구할 것
        //width() - 스크롤바 사이즈를 뺀 -17px 처리되서 미디어쿼리와 맞지 않음
        //innerWidth() - 미디어쿼리사이즈와 맞음
        var w = $(window).innerWidth();
        
        if(w >= 1024){ //pc웹사이즈라면
            $('.gnb .main_menu').off('click');
            pcGnb(); 
        }else{ //태블릿&모바일 사이즈라면
            $('.gnb').off('mouseenter');
            $('.gnb').off('mouseleave');
            
            //pc에서 서브네비활성화되면 높이가 310px으로 고정되므로 모바일오면 다시 자손 높이만큼 인식되게 설정
            $('.gnb .sub_menu').css('height','auto');
            mGnb();
        }
    });
    //초기실행도 리사이즈 발생
    $(window).trigger('resize');
    
    function mGnb(){
        //클릭이벤트 리사이즈 될대마다 중복되서 기존 것 제러
        $('.gnb .main_menu').off('click');
        //gnb subNav 
        $('.gnb li').click(function(){
            var select = $('.gnb .main_menu');
            $(this).toggleClass('active');
            //클릭한 메인네비의 동생이 하위네비가 보여지는 여부
            var is = $(this).children().is(':hidden');

            if(is){ //안보인다면
                $('.gnb .main_menu').removeClass('active');   
                $('.gnb .sub_menu').slideUp(0);

                $(this).children().addClass('active');
                $(this).children().next().stop().slideDown('fast');
            }else{ //보인다면
                $(this).children().removeClass('active');
                $(this).children().next().stop().slideUp('fast');
            }
        });
    }
    
    //gnb
    var bg = $('<div class="sub_nav_Bg"></div>');
    bg.append('.main_nav');
    
    function pcGnb(){
        $('.gnb').hover(function(){
            $('header').addClass('hover');
            $('.gnb .sub_menu, .sub_nav_Bg').stop().slideDown(300);
        },function(){
            $('header').removeClass('hover');
            $('.gnb .sub_menu, .sub_nav_Bg').stop().slideUp(300);
        });
    }
});

//header_scroll
$(document).ready(function(){
    $('header').removeClass('active');
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        if( top > 0 ){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
    
    $(window).resize(function(){
        var w = $(window).innerWidth();
        if( w >= 1024 ){
            //마우스 휠이 아래방향으로 내려갈땐 header가 안보이게 처리
            //마우스 휠이 위방향으로 올라갈땐 header가 보이게 처리 
            $('body').on('mousewheel',function(e){
                var num = e.originalEvent.wheelDelta;

                if( num < 0 ){
                    $('header').fadeOut(0);
                }else{
                    $('header').fadeIn(0);
                }
            });
        }else{
            $('body').off('mousewheel');
        }
    });
});
//팝업
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $('.popup a.today').click(function(){
        setCookie('maindiv','done',1);
        $('.popup').slideUp(0);
    });
    $('.popup a.close').click(function(){
        $('.popup').slideUp(0);
    });


    //초기실행
    cookiedata = document.cookie;
    if(cookiedata. indexOf('maindiv=done') < 0 ){   //1일이 0일이 되는 순간(하루가 지나면)
        $('.popup').css('display','block');  //팝업 배너가 보이고
    }else{                                  //그렇지않으면
        $('.popup').css('display','none');   //팝업 배너는 보이지 마라
    }
});