$(document).ready(function() {
    console.log("put delay on show of buttons");
    $(".blue-one").click(function(){
        $(".blue-two").show();
        $(".blue-one").hide();
      });
    $(".blue-two").click(function(){
        $(".blue-three").show();
        $(".blue-two").hide();
      });
      $(".blue-three").click(function(){
        $(".green-one").show();
        $(".blue-three").hide();
      });
      $(".green-one").click(function(){
        $(".green-two").show();
        $(".green-one").hide();
      });
      $(".green-two").click(function(){
        $(".green-three").show();
        $(".green-two").hide();
      });
      $(".green-three").click(function(){
        console.log("figure out within carousel");
       // $(".blue-three").show();
       // $(".blue-two").hide();
      });
    });