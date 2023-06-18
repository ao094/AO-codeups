
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  // $("#MenuButton").click(function () {
  //   $(".js-drawer-open").toggleClass("open");
  //   $(".drawer-menu").toggleClass("open");
  //   $("html").toggleClass("is-fixed");
  // });

    //ナビバートグル
    $('.js-hamburger').on('click', function () {
      if ($('.js-hamburger').hasClass('is-open')) {
        // $('.js-drawer-menu').fadeOut();
        $('.js-drawer-menu').removeClass('is-open');
        $(this).removeClass('is-open');
      } else {
        // $('.js-drawer-menu').fadeIn();
        $('.js-drawer-menu').addClass('is-open');
        $(this).addClass('is-open');
      }
    });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


  // ズームインしながらスライダー
  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  }
  new Swiper('.js-mainViewSwiper', swipeOption);


  //Worksスライダー
  var swiper = new Swiper (".js-topWorksSwiper", {
    loop: true,
    effect: 'slide',
    direction: 'horizontal',
    autoplay: {
      delay: 3000, // オートプレイの遅延時間（ミリ秒）
      disableOnInteraction: false, // ユーザーのインタラクションでオートプレイを停止しない
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){//上から200pxスクロールしたら
      $('#footer__page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
      $('#footer__page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    }else{
      if($('#footer__page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#footer__page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#footer__page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
      }
    }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // #page-topをクリックした際の設定
  $('#footer__page-top a').click(function () {
      $('body,html').animate({
          scrollTop: 0//ページトップまでスクロール
      }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
      return false;//リンク自体の無効化
  });

  // スクロールするとヘッダーの色変更
  $(window).on("scroll", function () {
    const sliderHeight = $(".mainView").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });

});
