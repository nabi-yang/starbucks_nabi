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