const slides2 = document.querySelector('.slides2'); //전체 슬라이드 컨테이너
const slideImg2 = document.querySelectorAll('.slides2 li'); //모든 슬라이드들
let currentIdx2 = 0; //현재 슬라이드 index
const slideCount2 = slideImg2.length; // 슬라이드 개수
const prev2 = document.querySelector('.prev2'); //이전 버튼
const next2 = document.querySelector('.next2'); //다음 버튼
const slideWidth2 = 500; //한개의 슬라이드 넓이
const slideMargin2 = 100; //슬라이드간의 margin 값

//슬라이드 페이지
const page2 = document.getElementById('slidepage2'); // 슬라이드 페이지
page2.innerText = (currentIdx2+1) +  " / " + slideCount2;

function pageset2(){
    page2.innerText = (currentIdx2+1) +  " / " + slideCount2;
}


//전체 슬라이드 컨테이너 넓이 설정
slides2.style.width = (slideWidth2 + slideMargin2) * slideCount2 + 'px';

function moveSlide2(num) {
  slides2.style.left = -num * 600 + 'px';
  currentIdx2 = num;
  pageset2();
}

prev2.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx2 !== 0) {
    moveSlide2(currentIdx2 - 1);
  }else{
    moveSlide2(slideCount2-1);
  } 

});

next2.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx2 !== slideCount2 - 1) {
    moveSlide2(currentIdx2 + 1);
  }else{
    moveSlide2(0);
  } 

});