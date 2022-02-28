$(document).ready(function(){
    //sitemap - top_nav
    $('.sitemap').colorbox({
        iframe : true, 
        width : 900,
        height: 400,
        scrolling : false, 
        onOpen : function(){ 
            $('body').css('overflow','hidden');
        },
        onClosed : function(){ 
            $('body').css('overflow','visible');
        }
    });
});

$(document).ready(function(){
    var bg = $('<div class="sub_bg"></div>');
    
    $('header').append(bg);
    
    var gnb = $('.gnb');
    var main = $('.main_nav');
    var sub = $('.sub_nav');
    
    var speed = 'fast';
    
    gnb.hover(function(){
        sub.stop().slideDown(speed);
        bg.stop().slideDown(speed);
    },function(){
        sub.stop().slideUp(speed);
        bg.stop().slideUp(speed);
        
        main.removeClass('active');
    });
    
    main.focus(function(){
        gnb.trigger('mouseenter'); 
        
        main.removeClass('active');
        
        $(this).addClass('active');
    });
    
    sub.find('li:last a').keydown(function(e){
        if(e.keyCode == 9){ 
            if(!e.shiftKey){ 
                gnb.trigger('mouseleave');
            }
        }
    });
    
    main.first().keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){ 
                gnb.trigger('mouseleave');
            }
        }
    });
    
    sub.find('a').focus(function(){
        main.removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
});
