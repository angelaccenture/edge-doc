$(document).ready(function() {
  console.log("test 2");
  $('.button').on("click", ".blueonebutton", function() {
      $(".blue-two").show();
      $(".blue-one").hide();
  });
  $('.blue-one p:last-child').addClass("headphones");

  $('.button').on("click", ".acceptbutton", function() {
    $(".blue-three").show();
    $(".blue-two").hide();
  });
  $('.button').on("click", ".declinebutton", function() {
    $(".blue-one").show();
    $(".blue-two").hide();
  });
  $('.button').on("click", ".bluethreebutton", function() {
    $(".green-one").show();
    $(".blue-three").hide();
  });
  $('.button').on("click", ".greenonebutton", function() {
    $(".green-two").show();
    $(".green-one").hide();

  });
  $('.button').on("click", ".greentwobutton", function() {
    $(".green-three").show().addClass('greencar');
    $(".green-two").hide();

  });
   /*Green Three is a carousel*/
   $('.button').on("click", ".redonebutton", function() {
    $(".red-two").show();
    $(".red-one").hide();

  });
  $('.button').on("click", ".redtwobutton", function() {
        $(".red-three").show().addClass('redcar');
        $(".red-two").hide();

  });  
     /*Red Three -- Form Section*/
    $('.red-three-new').on("click", ".formnextfirst", function() {
      $(".form .second, .formnextsecond").addClass("show");
      $(".secondformv").show();
      $(".form .first, .formnextfirst").addClass("hide");
      $(".firstformv").hide();
    }); 
    $('.red-three-new').on("click", ".formnextsecond", function() {
      $(".form .third, .formnextthird").addClass("show");
      $(".thirdformv").show();
      $(".form .second, .formnextsecond").addClass("hide");
      $(".secondformv").hide();
    }); 
    $('.red-three-new').on("click", ".formnextthird", function() {
      $(".button .example, .button .recordstory").show();
      $(".recordexample-wrapper").show();
      $(".form .third, .formnextthird").addClass("hide");
      $(".thirdformv").hide();
      $("h3").hide();
    });
    $('.red-three-new').on("click", ".recordstory", function() {
      $(".record-wrapper").show();
      $(".button .stoprecording").show();
      $(".button .example, .button .recordstory").hide();
      $(".recordexample-wrapper").hide();
    }); 
    /*form buttons*/
    $(".formbutton").on("click", ".firstformv", function() {
        console.log("form");
        $('#form-believed').val("");
        console.log("empty");
        console.log("'.firstformv'.val()");
        $('#form-believed').val();
        
    }); 
/*Post
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
*/
   

    });