const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});
// 
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl=document.querySelector('header .badges');

//윈도우화면이 '스크롤'되면 함수를 실행하겠다
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY >500){
        // badgeEl.style.display ='none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity:0,  // , 까먹지말고 넣어주기
            display: 'none'
        });
    }else{
        // badgeEl.style.display ='block';
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
            
    });
}
}, 300)); //0.3초를 의미한다 
//_.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
    delay: (index+1)* .7,
    opacity: 1
    });

});

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container',{
    
    sliderPerview :3, //한번에 보여줄 슬라이드 갯수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides: true,//1번 슬라이드를 가운데로 
    loop:true,
    autoplay: {
        delay:5000 //5초
    }
});
new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
  });

const promotionEl= document.querySelector('.promotion');
const promotionToggleBtn=document.querySelector('.toggle-promotion')
let isHidePromotion= false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion //fasle값이면 true로 ==느낌표가 반대로 할당해준다 
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});