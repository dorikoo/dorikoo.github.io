//indicator
$(document).ready(function(){
    var downBox = $('.indi_main, .indi_sub'); 
    
    downBox.children('button').click(function(){
        $(this).next().stop().slideToggle('fast');
        $(this).children('.icon').children().attr('src','../img/sub/arrow_icon_over.png');
        $(this).addClass('active');
    });
    
    downBox.mouseleave(function(){
        $(this).children('ul').stop().slideUp('fast'); 
        $(this).find('.icon').children().attr('src','../img/sub/arrow_icon.png');
        $(this).children('button').removeClass('active');
    });
    
    downBox.find('li:last a').blur(function(){
        downBox.trigger('mouseleave');
    });
    
    
    $('.home img').hover(function(){
        $(this).attr('src','../img/sub/home_icon_over.png');
    }, function(){
        $(this).attr('src','../img/sub/home_icon.png');
    });
});