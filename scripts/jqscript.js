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
        $('.red-three .carousel-slide-indicator:eq(0)').attr('id','selected');        

  });  
     /*Red Three -- Form Section*/
    $('.red-three').on("click", ".formnextfirst", function() {
      $(".form .second, .formnextsecond").addClass("showgrid");
      $(".secondformv").show();
      $(".form .first, .formnextfirst").addClass("hide");
      $(".firstformv").hide();
      $('.red-three .carousel-slide-indicator:eq(0)').removeAttr('id'); 
      $('.red-three .carousel-slide-indicator:eq(1)').attr('id','selected'); 
    }); 
    $('.red-three').on("click", ".formnextsecond", function() {
      $(".form .third, .formnextthird").addClass("showgrid");
      $(".thirdformv").show();
      $(".form .second, .formnextsecond").addClass("hide");
      $(".secondformv").hide();
      $('.red-three .carousel-slide-indicator:eq(1)').removeAttr('id'); 
      $('.red-three .carousel-slide-indicator:eq(2)').attr('id','selected'); 
    }); 
    $('.red-three').on("click", ".formnextthird", function() {
      $(".button .example").addClass("textshow");
      $(".button .recordstory").addClass("fullshow");
      $(".recordexample-wrapper").show();
      $(".form .third, .formnextthird").addClass("hide");
      $(".thirdformv").hide();
      $(".default-content-wrapper").hide();
      $(".indicators-wrapper").hide();
    });
    $('.red-three').on("click", ".recordstory", function() {
      $(".record-wrapper").show();
      $('.red-three').css("background-color","#EB1000");
      $('.red-three').css("color","white");
      $(".button .example").removeClass("textshow");
      $(".button .recordstory").removeClass("fullshow");
      $(".recordexample-wrapper").hide();
      
      $(".button .stoprecording").delay(5000).queue(function(next){
        $(this).addClass("fullshow");
        next();
      });
      $(".button .continue").delay(10000).queue(function(next){
          $(this).addClass("fullshow");
          $('.button .stoprecording').removeClass("fullshow");
          next();
      });
    });
    $(".button").on("click", ".stoprecording", function() {
      $(this).removeClass("fullshow");
      $('.continue').addClass("fullshow");
    });
    $(".button").on("click", ".continue", function() {
      $(this).stop();
      $(this).removeClass("fullshow");
      $('.form .submit-wrapper').show();
      $('.redorec').addClass("textshow");
      $('.red-three').css("background-color","white");
      $('.red-three').css("color","#EB1000");
      
    });

    /*form buttons*/
    $(".formbutton").on("click", ".firstformv", function() {
      $('#form-believed').val("");
      $('#form-believed').val($(this).html());    
    });
    $(".formbutton").on("click", ".secondformv", function() {
      $('#form-describe').val("");
      $('#form-describe').val($(this).html());    
    }); 
    $(".formbutton").on("click", ".thirdformv", function() {
      $('#form-makefeel').val("");
      $('#form-makefeel').val($(this).html());    
    });
/*Post*/
$('.button').on("click", ".blueendone", function() {
  $(".blue-end-two").show();
  $(".blue-end-one").hide();     
});  
$('.button').on("click", ".blueendtwo", function() {
  $(".blue-end-three").show();
  $(".blue-end-two").hide();
}); 
$('.button').on("click", ".blueendthree", function() {
  $(".blue-end-four").show();
  $(".blue-end-three").hide();
}); 
$(".submit-wrapper").on("click", ".button", function() {
  console.log("test");
  $(".blue-end-five").show();
  $(".blue-end-four").hide();
});
$('.button').on("click", ".blueendfive", function() {
  $(".blue-end-size").show();
  $(".blue-end-five").hide();
}); 
     

    });