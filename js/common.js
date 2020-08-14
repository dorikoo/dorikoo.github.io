$(document).ready(function(){
	//메인 타이핑
	var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,70); // 반복동작 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
		   
		  if(typingTxt[typingIdx]=="아"){
			 $(".typing").append("<br>"); 
			  typingIdx++; 
		  }
		  else if(typingTxt[typingIdx]=="어"){
			 $(".typing").append("<span class=\"point\">김도연</span>");
			  typingIdx++; 
		  }
		  else{
         	$(".typing").append(typingTxt[typingIdx]);
         	typingIdx++; 
		  }
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     } 
	
	$('.menu_bar a').click(function(){
		$('.menu_bar').toggleClass('active');
	});
});
$(document).ready(function(){
	
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', 
        css3: false, 
        anchors: ['home', 'doyeon', 'skill', 'postfolio', 'contact'], 
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
    
    $('.return, .profile_link').click(function(){
        alert("준비 중 입니다.");
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