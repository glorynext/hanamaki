var fadeTime = 800;
var fadeSelector = 'fadeout';

// ロード時処理
$(window).on('load', function(){
    $('body').removeClass(fadeSelector);
    
    // スライド処理
    // 前画面で後退時
    if ('#back' == location.hash) {
        $('.photo-container').css({
            top: -33,
            left: -66,
            width: $('.photo-container').width() * 1.1 * 1.1,
            height: $('.photo-container').height() * 1.1 * 1.1
        });
        $('.photo-container').animate({
            top: 0,
            left: 0,
            width: 1320,
            height: 660
        },fadeTime);
    }
    // 前画面で右進行時
    else if ('#right' == location.hash) {
        $('.photo-container').css({
            top: 0,
            left: 200,
            width: $('.photo-container').width() * 1.1,
            height: $('.photo-container').height() * 1.1
        });
        $('.photo-container').animate({
            left: 0,
            width: 1320,
            height: 660
        },fadeTime);
    }
    // 前画面で左進行時
    else if ('#left' == location.hash) {
        $('.photo-container').css({
            top: 0,
            left: -200,
            width: $('.photo-container').width() * 1.1,
            height: $('.photo-container').height() * 1.1
        });
        $('.photo-container').animate({
            left: 0,
            width: 1320,
            height: 660
        },fadeTime);
    }
    // 前画面で前進時 or クエリ未指定時
    else {
        $('.photo-container').animate({
            top: 0,
            left: 0,
            width: $('.photo-container').width() * 1.1,
            height: $('.photo-container').height() * 1.1
        },fadeTime);
    }
    
    // フェードイン
    setTimeout(function(){
        $('.photo-child-button').animate({
            opacity: 1.0
        }, fadeTime);
    }, fadeTime)
});

// 前進時処理
$(function() {
  $('#button-ahead').on('click', function(e){
    e.preventDefault();
    $('.photo-child-button').animate({
        opacity: 0
    }, fadeTime);
    $('.photo-container').animate({
        top: -33,
        left: -66,
        width: $('.photo-container').width() * 1.1,
        height: $('.photo-container').height() * 1.1
    },fadeTime);
    url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass(fadeSelector);
      setTimeout(function(){
        window.location = url;
      }, fadeTime);
    }
    return false;
  });
});

// 後退時処理
$(function() {
  $('#button-back').on('click', function(e){
    e.preventDefault();
    $('.photo-child-button').animate({
        opacity: 0
    }, fadeTime);
    $('.photo-container').animate({
        top: 30,
        left: 60,
        width: $('.photo-container').width() / 1.1,
        height: $('.photo-container').height() / 1.1
    },fadeTime);
    url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass(fadeSelector);
      setTimeout(function(){
        window.location = url;
      }, fadeTime);
    }
    return false;
  });
});

// 左進行時処理
$(function() {
  $('#button-left').on('click', function(e){
    e.preventDefault();
    $('.photo-child-button').animate({
        opacity: 0
    }, fadeTime);
    $('.photo-container').animate({
        left: 200
    },fadeTime);
    url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass(fadeSelector);
      setTimeout(function(){
        window.location = url;
      }, fadeTime);
    }
    return false;
  });
});

// 右進行時処理
$(function() {
  $('#button-right').on('click', function(e){
    e.preventDefault();
    $('.photo-child-button').animate({
        opacity: 0
    }, fadeTime);
    $('.photo-container').animate({
        left: -200
    },fadeTime);
    url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass(fadeSelector);
      setTimeout(function(){
        window.location = url;
      }, fadeTime);
    }
    return false;
  });
});

// 虫眼鏡ホバー時
$('.loupe-img').hover(function(){
    $('.loupe-detail-container').css({
        opacity: 1.0
    });
    $('.photo-child-button').css({
        opacity: 0
    })
});

// 虫眼鏡エリアホバーアウト時
$('.loupe').hover(function(){}, function(){
    $('.loupe-detail-container').css({
        opacity: 0
    });
    $('.photo-child-button').css({
        opacity: 1.0
    })
});