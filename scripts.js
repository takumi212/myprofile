// 現在書いている途中。
'use strict';




$(function() {
  $("header").children(".outline2,small.text").hide();
  $("header").children(".outline1").show();
  $("header").on("click", function() {
    if ($("header").children(".outline1").is(":visible")) {
      $("header").children(".outline1").fadeOut(1000, function() {
        $("header").children(".outline2,small.text").fadeIn(1000);
      });
    } else {
      $("header").children(".outline2,small.text").fadeOut(1000, function() {
        $("header").children(".outline1").fadeIn(1000);
      });
    }
  });
});






// 背景に泡が流れているようにしている。

bubbly({
  gradientStart: '#fff4e6',
  gradientStop: '#ffe9e4',
  shadowBlur: 1,
  compose: 'source-over',
  fillFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`,
});
  

// 僕の写真が出現する









