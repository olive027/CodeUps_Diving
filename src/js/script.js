
jQuery(function ($) {

//======================hamburger=========================
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

// ローディングが始まる前にbodyにoverflow: hiddenを追加してスクロールを無効化
// document.body.style.overflow = 'hidden';

var tl = gsap.timeline();
tl.fromTo('.js-img-left', {
	y: "120%",
},{
	delay: 0.3,
	y: 0,
	duration: 1.2,
})
.fromTo('.js-img-right', {
	y: "120%",
},{
	y: 0,
	duration: 1.2,
},"<10.4166%")
.fromTo('.js-mv-title',{
	autoAlpha: 0,
	y: 50,
},{
	autoAlpha: 1,
	y: 0,
	duration: 0.7,
},"+=0.2")
.to('.js-loading',{
	display: "none",
  duration: 1,
},"+=0.3")
.to('.js-container', {
	display: "block",
  opacity: 1,
  visibility: "visible",
	// autoAlpha: 1,
  duration:1.3,
  ease: "power2.out",
},"<");

tl.eventCallback('onComplete', function () {
  // document.body.style.overflow = '';
  initSwiper();
  nextSwiper();
});

//====================mv swiper=========----===========
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

//============== campaign swiper======================
function nextSwiper(){
  var swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 2000,
    // slidesPerView: 1.26, // 一度に表示する枚数
    loopAdditionalSlides: 4,
    width: 280,
    spaceBetween: 24, // スライド間の距離
    freeMode: true,
    freeModeSticky: true,
    breakpoints: {
      768: {
        width: 333,
      },
    },
    // 前後の矢印
    navigation: {
      nextEl: ".js-campaign-btn-next",
      prevEl: ".js-campaign-btn-prev",
    },
  })
};

// ======== 画像の出現アニメーション ==----===============
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

// ============== ページトップボタン=====================
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

// ========= サイドバーアコーディオン ==================
$(".js-archive-item:first-child .js-archive-body").css("display", "block");
$(".js-archive-item:first-child .js-archive-header").addClass("is-open");
$(".js-archive-header").click(function(){
  $(this).next().slideToggle();
  $(this).toggleClass("is-open");
})


// =========== FAQアコーディオン==--===================
//一番最初のQを開いた状態にしておく（必要なければ削除）
$(".js-accordion__item:first-child .js-accordion__content").css(
	"display",
	"block"
);
//一番最初のQを開いた状態にしておく（必要なければ削除）
$(".js-accordion__item:first-child .js-accordion__title").addClass('is-open');

$(".js-accordion__title").click(function(){
	$(this).toggleClass('is-open'); //+-を切り替えるため
	$(this).next().slideToggle(300); //クリックしたとこのコンテンツの表示・非表示
	$(".js-accordion__title").not(this).removeClass('is-open'); //クリックしたとこ以外で開いてたとこを閉じる
	$(".js-accordion__title").not(this).next().slideUp(300); //クリックしたとこ以外で開いてたとこを閉じる
});

//=================== about モーダル======================
$('.js-modal-open').click(function(){
  var imgSrc = $(this).children().attr('src');
  $('.js-modal-img').children().attr('src', imgSrc);
  $('.js-modal').fadeIn();
  $('body,html').css('overflow-y', 'hidden');
  return false
});

$('.js-modal-close').click(function(){
  $('.js-modal').fadeOut();
  $('body,html').css('overflow-y', 'visible');
  return false
});

// =============== information タブ======================
// 最初のコンテンツを表示
$(".js-information-content:first-of-type").css("display", "block");
$(".js-information-tab").click(function(){
	// 現在選択されているタブからis-activeを外す
	$(".current").removeClass('current');
	// クリックされたタブにis-activeクラスを付与
	$(this).addClass('current');
	// クリックされた要素が何番目か取得
	const Index = $(this).index();
	// クリックしたタブのインデックス番号と同じコンテンツを表示
	$(".js-information-content").hide().eq(Index).fadeIn(600);
});

// =============== フォームバリデーション======================
  $('.form__btn').click(function(){
    let hasError = false;

    $("input[required], textarea[required]").each(function () {
      let value = $(this).val();
      if (value == "" || !value.match(/[^\s\t]/)) {
        hasError = true;
        $(this).addClass("is-error");
        $(".form__error").css('display','flex');
      } else {
        $(this).removeClass("is-error");
      }
    });
  });




});
