// 現在書いている途中。
'use strict';


// ここから切る。




$(function() {
    $("header").children(".outline2,h5").hide();
    $("header").children(".outline1").show();
    $("header").click(function() {
            // $("header,p").hide(2000);
            $("header").children(".outline2,h5").show(500); 
            $("header").children(".outline1").hide(2000);
        }
    );
});
