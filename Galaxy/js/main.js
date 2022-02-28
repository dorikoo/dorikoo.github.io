 $(document).ready(function(){
    //4. 실행메서드 사용
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', //상업적용도가 아닌 오픈소스 라이센스코드(구입해서 사용하세요)
        css3: false, //크롬에서 css3 transform처리가 안되서 배경이미지 고정처리가 안되서 반드시 작성
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'], //앵커명 작성 : a태그 href에 적은 값
        menu: '#myMenu', //메뉴버튼의 선택자를 작성
        easing: 'easeOutBack', //이징옵션 변경
        afterLoad: function(origin, destination, direction){
            //화면을 읽고 난 후에 일어날일을 담는 콜백함수

            //도착한 구역의 인덱스번호가 4라면 footer가 나타남
            if(destination.index == 4){
                $('footer').addClass('active');
            }
        },
        onLeave : function(origin, destination, direction){
            //화면에서 떠날때
            $('footer').removeClass('active'); //클래스 제거
        }
    });
     
    //탭
    $('#origin').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        $('.img_box').css('background-image','url(../img/s20_cloudwhite.png)');
        
        
         $('.s20 .color .border').removeClass('active');
         $('.s20 .color .border').eq(0).addClass('active');
        
        
        $('.s20').show();
        $('.s20plus').hide();
        $('.s20plus_ultra').hide();
    });
    $('#plus').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        
        $('.img_box').css('background-image','url(../img/s20_cloudblue.png)');
        
         $('.s20plus .color .border').removeClass('active');
         $('.s20plus .color .border').eq(0).addClass('active');
        
        $('.s20').hide();
        $('.s20plus').show();
        $('.s20plus_ultra').hide();
    });
    $('#ultra').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
         $('.img_box').css('background-image','url(../img/s20+_cosmicblack.png)');
        
         $('.s20plus_ultra .color .border').removeClass('active');
         $('.s20plus_ultra .color .border').eq(0).addClass('active');
        
        $('.s20').hide();
        $('.s20plus').hide();
        $('.s20plus_ultra').show();
    });
     $('.border a').click(function(){
         $('.color .border').removeClass('active');
         $(this).parent().addClass('active');
     });
     $('.border2 a').click(function(){
         $('.color2 .border2').removeClass('active');
         $(this).parent().addClass('active');
     });
     
     //이미지 변경
      $('.color .border a').click(function(){
          var color = $(this).attr('href');
          
          var num = color.split('_');
          
              if(num[1] == 'origin'){
                  switch(num[0]){
                      case '#white' : $('.img_box').css('background-image','url(../img/s20_cloudwhite.png)'); break;
                      case '#blue' : $('.img_box').css('background-image','url(../img/s20_cloudblue.png)'); break;
                      case '#gray' : $('.img_box').css('background-image','url(../img/s20_cosmicgray.png)'); break;
                  }
              }
              else if(num[1] == 'plus'){
                  switch(num[0]){
                      case '#blue' : $('.img_box').css('background-image','url(../img/s20_cloudblue.png)');break;
                      case '#white' :  $('.img_box').css('background-image','url(../img/s20_cloudwhite.png)'); break;
                      case '#gray' : $('.img_box').css('background-image','url(../img/s20_cosmicgray.png)'); break;
                  }
              }
              else{
                  switch(num[0]){
                      case '#black' : $('.img_box').css('background-image','url(../img/s20+_cosmicblack.png)'); break;
                      case '#gray' : $('.img_box').css('background-image','url(../img/s20+_cosmicgray.png)'); break;
                  }
              }
      });
     $('.color2 .border2 a').click(function(){
          var color = $(this).attr('href');
         
              if(color == '#purple'){
                  $('.img_box2').css('background-image','url(../img/z-flip1-right.png)');
              }
              else{
                  $('.img_box2').css('background-image','url(../img/z-flip_black_right.png)');
              }
      });
});