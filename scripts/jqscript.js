$(document).ready(function() {
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
      $(".form .second").addClass("showgrid");
      $(".secondformv").show();
      $(".form .first, .formnextfirst").addClass("hide");
      $(".firstformv").hide();
      $('.red-three .carousel-slide-indicator:eq(0)').removeAttr('id'); 
      $('.red-three .carousel-slide-indicator:eq(1)').attr('id','selected'); 
    });
    $('.red-three').on("click", ".formnextsecond", function() {
      $(".form .third").addClass("showgrid");
      $(".thirdformv").show();
      $(".form .second, .formnextsecond").addClass("hide");
      $(".secondformv").hide();
      $('.red-three .carousel-slide-indicator:eq(1)').removeAttr('id'); 
      $('.red-three .carousel-slide-indicator:eq(2)').attr('id','selected'); 
    }); 
    $('.red-three').on("click", ".formnextthird", function() {
      $(".button .example").addClass("textshow");
      $(".button .recordstory").addClass("fullshow");
      $(".dyncontent").show();
      $(".recordexample-wrapper").show();
      $(".form .third, .formnextthird").addClass("hide");
      $(".thirdformv").hide();
      $(".default-content-wrapper p").hide();
      $(".indicators-wrapper").hide();
    });
    $('.red-three').on("click", ".recordstory", function() {
      $(".countdown-wrapper").show();
      $('.red-three').css("background-color","#EB1000");
      $('.red-three').css("color","white");
      $(".button .example").removeClass("textshow");
      $(".button .recordstory").removeClass("fullshow");
      $(".recordexample-wrapper").hide();

      /*UPDATE TIMING HERE*/
      $(".button .stoprecording").delay(10000).queue(function(next){
        $(this).addClass("fullshow");
        next();
      });
      $(".button .continue").delay(30000).queue(function(next){
          $(this).addClass("fullshow");
          $('.button .stoprecording').removeClass("fullshow");
          $(".dyncontent").hide();
          $('.form-container .default-content-wrapper h2').show();
          console.log("continue");
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
      $(".form-container .default-content-wrapper h2").show();
      $(".form-container .default-content-wrapper h2").first().hide();
     // $('.form .submit-wrapper').show();
      $('.redorec').addClass("textshow");
      $('.red-three').css("background-color","white");
      $('.red-three').css("color","#EB1000");
      $(".dyncontent").hide();
      $('.form-container .default-content-wrapper h2').show(); 
    });

    /*form buttons*/
    $(".formbutton").on("click", ".firstformv", function() {
      $('#form-believed').val("");
      $('#form-believed').val($(this).html());
      $(".formnextfirst").show();    
    });
    $(".formbutton").on("click", ".secondformv", function() {
      $('#form-describe').val("");
      $('#form-describe').val($(this).html());
      $(".formnextsecond").show();  
    }); 
    $(".formbutton").on("click", ".thirdformv", function() {
      $('#form-makefeel').val("");
      $('#form-makefeel').val($(this).html());
      $(".formnextthird").show();    
    });
    $(".form").on("input", "#form-believed", function() {
      $(".formnextfirst").show();
    });
    $(".form").on("input", "#form-describe", function() {
      $(".formnextsecond").show();
    });
    $(".form").on("input", "#form-makefeel", function() {
      $(".formnextthird").show();
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
$(".blue-end-four").on("click", ".button", function() {
  console.log("test");
  $(".blue-end-five").show();
  $(".blue-end-four").hide();
});
$('.button').on("click", ".blueendfive", function() {
  $(".blue-end-six").show();
  $(".blue-end-five").hide();
}); 
     

    });