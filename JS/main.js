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
const toTopEl = document.querySelector('#to-top');

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
        //버튼보이게
        gsap.to('#to-top',.2 , {
            x:0
        });
        
    }else{
        // badgeEl.style.display ='block';
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
       
    });
    //버튼숨기기
    gsap.to(toTopEl,.2 , {
        x:100
    });
}
}, 300)); //0.3초를 의미한다 
//_.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7 , {
        scrollTo: 0 ,
    });
});
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
new Swiper('.awards .swiper-container',{ //Swiper 꼭 대문자로... 안되가지고 ㅜㅜ찾아보니 swiper로 적어서 안된거였다
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5 ,
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
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
function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를,
    // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  // 부유하는(떠 다니는) 요소를 만드는 함수
  function floatingObject(selector, delay, size) {
    gsap.to(
      selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
      {
        delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
        y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
        repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
        yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
        ease: Power1.easeInOut // Easing 함수 적용.
      }
    )
  }
  floatingObject('.floating1', 1, 15)
  floatingObject('.floating2', .5, 15)
  floatingObject('.floating3', 1.5, 20)
  

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐여부를 감시할 요소를 지정
            triggerHook : .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear =document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 