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
        $(".green-three").show().addClass('greencar');
        $(".green-two").hide();
      });
      
        
      /*Green Three is a carousel*/
      
      $(".red-one").click(function(){
        $(".red-two").show();
        $(".red-one").hide();
      });
      $(".red-two").click(function(){
        $(".red-three").show().addClass('redcar');;
        $(".red-two").hide();
      });

       /*Red Three is a carousel*/

      $(".red-four").click(function(){
        $(".red-five").show();
        $(".red-four").hide();
      }); 
      $(".red-five").click(function(){
        $(".blue-end-one").show();
        $(".red-five").hide();
      }); 
      $(".blue-end-one").click(function(){
        $(".blue-end-two").show();
        $(".blue-end-one").hide();
      }); 
      $(".blue-end-two").click(function(){
        $(".blue-end-three").show();
        $(".blue-end-two").hide();
      });
      $(".blue-end-three").click(function(){
        $(".blue-end-four").show();
        $(".blue-end-three").hide();
      });
    });