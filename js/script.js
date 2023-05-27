
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
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // }
  }
  new Swiper('.js-mainViewSwiper', swipeOption);
  // let swiper1 = new Swiper('.js-mainViewSwiper', swipeOption);


      //Worksスライダー
      var swiper = new Swiper (".js-topWorksSwiper", {
        effect: 'slide',
        loop: true,
        direction: 'horizontal',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

});
