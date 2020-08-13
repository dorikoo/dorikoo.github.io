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
});


$( window ).resize(function() {
    $('.size').text(window.innerWidth);
});