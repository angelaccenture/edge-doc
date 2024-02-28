$(document).ready(function() {
    console.log("test");
    $(".blue-one").click(function(){
        $(".blue-two").show();
        $(".blue-one").hide();
      });
    $(".blue-two").click(function(){
        $(".blue-three").show();
        $(".blue-two").hide();
      });
    });