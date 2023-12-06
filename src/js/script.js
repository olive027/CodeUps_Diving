
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

	// hamburger
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	$('.js-sp-nav').fadeToggle(600);
	$('html').toggleClass('is-fixed');//ハンバーガー展開時に背景を固定
})

//mv swiper
// swiper
const swiper = new Swiper(".swiper", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	effect: 'fade',
	speed: 2500,
	allowTouchMove: false,
});



});
