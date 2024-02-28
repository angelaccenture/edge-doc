$(document).ready(function() {
    console.log("test");
    $(".blue-one").click(function(){
        $(".blue-two").show();
        $(".blue-one").hide();
      });
    });