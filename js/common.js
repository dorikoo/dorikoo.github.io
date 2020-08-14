$(document).ready(function(){
	var typingBool = false; 
	var typingIdx=0; 
	var liIndex = 0;
	var liLength = $(".typing-txt>ul>li").length;


	var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
	typingTxt=typingTxt.split("");  
	if(typingBool==false){ 
		typingBool=true; 
		var tyInt = setInterval(typing,100); 
	} 

	function typing(){ 
	  $(".typing ul li").removeClass("on");
	  $(".typing ul li").eq(liIndex).addClass("on");
	  if(typingIdx<typingTxt.length){
		  if(typingTxt[typingIdx]=="어"){
			 $(".typing ul li").eq(liIndex).append("<span class=\"point\">김도연</span>");
			  typingIdx++; 
		  }
		  else{
			$(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
         	typingIdx++; 
		  }
	   }
	   else{ 
		   if(liIndex<liLength-1){
				liIndex++; 
				typingIdx=0;
				typingBool = false; 
				typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 

				clearInterval(tyInt);

				setTimeout(function(){
				  tyInt = setInterval(typing,100);
				},1000);
			}
		   else if(liIndex==liLength-1){
			   clearInterval(tyInt);
		   }
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