
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//============================ hamburger================================
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	$('.js-sp-nav').fadeToggle(600);
	$('html').toggleClass('is-fixed');//ハンバーガー展開時に背景を固定
});

//============================loading==================================
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

//===============================mv swiper================================
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

//====================== campaign swiper===============================
var swiper = new Swiper(".js-campaign-swiper", {
	loop: true,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	speed: 2000,
	slidesPerView: 1.26, // 一度に表示する枚数
  spaceBetween: 24, // スライド間の距離
	freeMode: true,
  freeModeSticky: true,
	breakpoints: {
		768: {
			slidesPerView: 3.48,
			spaceBetween: 40.2
		}
	},
	// 前後の矢印
  navigation: {
    nextEl: ".js-campaign-btn-next",
    prevEl: ".js-campaign-btn-prev",
  },
});

// ==================== 画像の出現アニメーション ===========================
//要素の取得とスピードの設定
var box = $('.js-colorbox'),
    speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color'));
    var image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
					$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});

// ========================== ページトップボタン============================
$(function () {
  const pageTop = $(".pagetop");
  pageTop.hide(); // 最初はボタンを非表示にする
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // 100pxスクロールしたら表示
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

	// フッター手前でストップ
  $(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var footHeight = $("footer").innerHeight();

    if (scrollHeight - scrollPosition <= footHeight) {
 // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      pageTop.css({
        position: "absolute",
        bottom: footHeight + 14,
      });
    } else {
      pageTop.css({
        position: "fixed",
        bottom: "14px",
      });
    }
  });

	pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, // 上から0pxの位置に戻る
      },
      500 // 500ミリ秒かけて戻る
    );
    return false;
  });
});




});
