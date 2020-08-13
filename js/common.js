$(document).ready(function(){
	$('.menu_bar a').click(function(){
		$('.menu_bar').toggleClass('active');
	});
});
$(document).ready(function(){
	
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', 
        css3: false, 
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'], 
        menu: '#myMenu', 
        easing: 'easeOutBack', 
        afterLoad: function(origin, destination, direction){
            if(destination.index == 4){
                $('footer').addClass('active');
            }
        },
        onLeave : function(origin, destination, direction){
            $('footer').removeClass('active');
        }
    });
	
	$(".contact_link ul li a").hover(function(){
		var value1 = $(this).find('img').attr('class');
		
		if(value1=="email"){
			$(this).html('<img src="img/common/f_email_h.png" class="email_h" alt="">');
		}
		else if(value1=="profile"){
			$(this).html('<img src="img/common/f_profile_h.png" class="profile_h" alt="">');
		}
	},function(){
		var value2 = $(this).find('img').attr('class');
		
		if(value2=="email_h"){
			$(this).html('<img src="img/common/f_email.png" class="email" alt="">');
		}
		else if(value2=="profile_h"){
			$(this).html('<img src="img/common/f_profile.png" class="profile" alt="">');
		}
	});
    
    $('.return').click(function(){
        alert("준비중 입니다.");
        return false;
    });
    
    $('.site_box').hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    });
});


$( window ).resize(function() {
    $('.size').text(window.innerWidth);
});