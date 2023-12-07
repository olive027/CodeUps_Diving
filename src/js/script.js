
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//loading
// var loadingTitle = document.querySelectorAll('.loading__title--white');　//要素のテキストを取得
// loadingTitle.forEach((target) => {
// 	// タグ内のテキストを一文字ずつ分割
// 	target.innerHTML = target.textContent.replace(/\S/g,'<span>$&</span>')
// });

var tl = gsap.timeline();
tl.fromTo('.js-img-left', {
	y: "120%",
},{
	delay: 2,
	y: 0,
	duration: 2,
})
.fromTo('.js-img-right', {
	y: "120%",
},{
	y: 0,
	duration: 2,
},"<10.4166%")
.fromTo('.loading__title-wrap--white',{
	autoAlpha: 0,
	y: 50,
},{
	autoAlpha: 1,
	y: 0,
	duration: 1.2,
},"+=1")
.to('.loading', 1.5,{
	display: "none",
},"+=0.5")
.to('.js-container', 2,{
	display: "block",
	autoAlpha: 1,
},"<0.5");

tl.eventCallback('onComplete', function () {
  initSwiper();
});


	// hamburger
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	$('.js-sp-nav').fadeToggle(600);
	$('html').toggleClass('is-fixed');//ハンバーガー展開時に背景を固定
});

//mv swiper
// swiper
function initSwiper(){
var swiper = new Swiper(".js-mv-swiper", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	effect: 'fade',
	speed: 2500,
	allowTouchMove: false,
});
};

// campaign swiper
var swiper = new Swiper(".js-campaign-swiper", {
	loop: true,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	speed: 2000,
	slidesPerView: 1.5, // 一度に表示する枚数
  spaceBetween: 24, // スライド間の距離
	freeMode: true,
  freeModeSticky: true,
	breakpoints: {
		768: {
			slidesPerView: 3.5,
			spaceBetween: 40
		}
	},
	// 前後の矢印
  navigation: {
    nextEl: ".js-campaign-btn-next",
    prevEl: ".js-campaign-btn-prev",
  },
});


});
