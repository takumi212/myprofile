// 現在書いている途中。
'use strict';


// ここから切る。




$(function() {
    $("header").children(".outline2,h5").hide();
    $("header").children(".outline1").show();
    $('#jbody').click(function() {
            // $("header,p").hide(2000);
            $("header").children(".outline2,h5").show(500); 
            $("header").children(".outline1").hide(2000);
        }
    );
});






// $(function() {
//     $("header,p").hide(); 
//     $('#jbody').click(function() {
//             // $("header,p").hide(2000);
//             $("header,p").show(2000); 
//         }
//     );
// });

// ここから下はコメントアウト

// console.log("index.js: loaded");




// const header = document.creatElement("header");

// function header() {

//  $("header").each(function)() { 
//      var elemPos = $(this).offset().top - 50;
//      var scroll = $(window).scrollTop();
//      var windowHeight = $(window).height();
//      if (scroll >= elemPos - windowHeight) {

//          $(this).addClass("header");
//          $(this).children("header");
//      }
//  }
// }

// console.log(scroll);
// console.log();


// 第一（青い枠の文章を畳んだり広げたり）

// $(function() {
//     $('header').hover(function() {
//             $("header,p").animate({'marginRight':'750px'},500);
//         }, 
//         function() {
//             $("header,p").animate({'marginRight':'0'},500); 
//         }
//     );
// });
    







