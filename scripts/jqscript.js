$(document).ready (function() {
  /*onload animation*/
  $(".blue-one").delay(400).show("slide", { direction: "left" }, 1200);
 // $(".blue-one h1").delay(400).show("slide", { direction: "down" }, 1200);

 /*buttons*/
  $('.button').on("click", ".blueonebutton", function() {
    initAudio();
    playMusic("MUS_Main.mp3");
    playAudioRandom(TapSounds);
    $(".blue-one").hide();
    $(".blue-two").delay(400).fadeIn('slow','','');
  });
  $('.blue-one p:last-child').addClass("headphones");

  $('.button').on("click", ".acceptbutton", function() {
    playAudioRandom(TapSounds);
    $(".blue-two").fadeOut();
    $(".blue-three").delay(400).fadeIn();
   });
  $('.button').on("click", ".declinebutton", function() {
    playAudioRandom(TapSounds);
    $(".blue-one").show();
    $(".blue-two").hide();
  });
  $('.button').on("click", ".bluethreebutton", function() {
    playAudioRandom(TapSounds);
    $(".blue-three").hide();
    $(".green-one").delay(400).fadeIn('slow','','');

    /*Add auto trans here
    $(".green-one").delay(6000).hide("slide", { direction: "left" }, 1200);
    $(".green-two").delay(6600).show("slide", { direction: "right" }, 1200);*/

  });
  $('.button').on("click", ".greenonebutton", function() {
    playAudioRandom(TapSounds);
    $(".green-one").hide("slide", { direction: "left" }, 1200);
    $(".green-two").delay(400).show("slide", { direction: "right" }, 1200);

    /*Animation on words - green two
    $( ".green-three strong" ).each(function( index ) {
      console.log("animation")
        console.log( index + ": " + $( this ).text() );
    });*/
  });
  $('.button').on("click", ".greentwobutton", function() {
    playAudioRandom(TapSounds);
    $(".green-two").fadeOut();
    $(".green-three").delay(400).fadeIn().addClass('greencar');
  });
   /*Green Three is a carousel*/

   $('.button').on("click", ".redonebutton", function() {
    playAudioRandom(TapSounds);
    $(".red-one").hide("slide", { direction: "left" }, 1200);
    $(".red-two").delay(400).show("slide", { direction: "right" }, 1200);
     /*Add auto trans here
    $(".red-one").delay(6000).hide("slide", { direction: "left" }, 1200);
    $(".red-two").delay(6600).show("slide", { direction: "right" }, 1200);*/

  });
  $('.button').on("click", ".redtwobutton", function() {
        $(".red-two").fadeOut();
        $(".red-three").delay(400).fadeIn().addClass('redcar');
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
   /*   $(".button .example").addClass("textshow");
      $(".button .recordstory").addClass("fullshow");
      $(".dyncontent").show();
      $(".recordexample-wrapper").show();
      $(".form .third, .formnextthird").addClass("hide");
      $(".thirdformv").hide();
      $(".default-content-wrapper p").hide();
      $(".indicators-wrapper").hide();*/
      $(".red-four").show();
      $('.red-three').hide();
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


    $('.red-three').on("click", ".recordstory", function() {
      $(".recordexample-wrapper").hide();
      $(".countdown-wrapper").delay(400).fadeIn('slow','','');
      $('.red-three').css("background-color","#EB1000");
      $('.red-three').css("color","white");
      $(".button .example").removeClass("textshow");
      $(".button .recordstory").removeClass("fullshow");

      /*UPDATE TIMING HERE*/
      $(".button .stoprecording").delay(10000).queue(function(next){
        $(this).addClass("fullshow");
        next();
      });
      $(".button .continue").delay(30000).queue(function(next){
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
      $('.redorec').addClass("textshow");
      $('.red-three').css("background-color","white");
      $('.red-three').css("color","#EB1000");
      $(".dyncontent").hide();
      $('.form-container .default-content-wrapper h2').show(); 
      $('.create').show();
    });
    

   
  $('.red-three').on("click", ".create", function() {
      //go to thankyou page
      location.href = "/thankyou";
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
$(".form").on("input", "#form-email", function() {
  $(".blue-end-four .submit-wrapper").show();
});
$(".blue-end-four").on("click", ".button", function() {
  $(".blue-end-five").show();
  $(".blue-end-four").hide();
});
$('.button').on("click", ".blueendfive", function() {
  $(".blue-end-six").show();
  $(".blue-end-five").hide();
}); 
$('.button').on("click", ".startover", function() {
  location.href = "/";
});
     

    });