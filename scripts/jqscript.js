$(document).ready(function() {
  console.log("form test 3")
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
     $('.red-three').on("click", ".formnextfirst", function() {
      $(".form .second, .formnextsecond").show();
      /*Show all buttons*/
      $(".form .first, .formnextfirst").hide();
      /*Hide Button Set*/
    }); 
    $('.red-three').on("click", ".formnextsecond", function() {
      $(".form .third, .formnextthird").show();
      /*Show all buttons*/
      $(".form .second, .formnextthird").hide();
      /*Hide Button Set*/
    }); 
    $('.red-three').on("click", ".formnextthird", function() {
      $(".form .second, .formnextsecond").show();
      /*Show all buttons*/
      $(".form .first, .formnextfirst").hide();
      /*Hide Button Set*/
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