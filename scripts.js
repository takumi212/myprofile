// 現在書いている途中。
'use strict';


// ここから切る。

// [scripts.js]を使用している。

// headerにクリックすると3か4行の文章が表示されるようにする。
// 現在はこちらを使用している。
$(function() {
  $("header").children(".outline2,h5").hide();
  $("header").children(".outline1").show();
  $("header").click(function() {
          $("header").children(".outline2,h5").toggle(2000); 
          $("header").children(".outline1").toggle(2000);
});
});

// $(function() {
//   $("header").children(".outline1").hide();
//   $("header").children(".outline2,h5").show();
//   $("header").click(function() {
//           $("header").children(".outline1").show(2000); 
//           $("header").children(".outline2,h5").hide(500);
// });
// });




// クリックすると、『.outline2,h5"』が隠されて、『.outline1"』が表示される仕組みになる。

// $(function() {

//   $("header").children(".outline2,h5").hide();
//   $("header").children(".outline1").show();
  
//   $("header").click(function() {
//   // ".outline2" と ".outline2,h5" を隠す
//   $("header").children(".outline2, h5").hide();
//   // ".outline1" を表示する
//   $("headers").children(".outline1").show();
//   });
  
//   });



// 背景に泡が流れているようにしている。

  bubbly({
    gradientStart: '#fff4e6',
    gradientStop: '#ffe9e4',
    shadowBlur: 1,
    compose: 'source-over',
    fillFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`,
  });
  

// 僕の写真が出現する

 




