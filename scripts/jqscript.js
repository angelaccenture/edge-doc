$(document).ready (function() {
  /*onload animation*/
  $(".blue-one").delay(400).show("slide", { direction: "left" }, 1200);
 // $(".blue-one h1").delay(400).show("slide", { direction: "down" }, 1200);

 /*buttons*/
  $('.button').on("click", ".blueonebutton", function() {
    initAudio();
    playMusic("MUS_Staccato.mp3");
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
    playAudio("SFX_UI_Decline.mp3");
    stopCurrentMusic();
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
    musicTransitionTo("MUS_Orchestral.mp3");
    playAudioRandom(TapSounds);
    $(".red-one").hide("slide", { direction: "left" }, 1200);
    $(".red-two").delay(400).show("slide", { direction: "right" }, 1200);
     /*Add auto trans here
    $(".red-one").delay(6000).hide("slide", { direction: "left" }, 1200);
    $(".red-two").delay(6600).show("slide", { direction: "right" }, 1200);*/

  });
  $('.button').on("click", ".redtwobutton", function() {
    playAudioRandom(TapSounds);

        $(".red-two").fadeOut();
        $(".red-three").delay(400).fadeIn().addClass('redcar');
            $('.red-three .carousel-slide-indicator:eq(0)').attr('id','selected');        
  });  
     /*Red Three -- Form Section*/
    $('.red-three').on("click", ".formnextfirst", function() {
      playAudioRandom(TapSounds);
      $(".form .second").addClass("showgrid");
      $(".secondformv").show();
      $(".red-three .default-content-wrapper").show();
      $(".form .first, .formnextfirst").addClass("hide");
      $(".firstformv").hide();
      $('.red-three .carousel-slide-indicator:eq(0)').removeAttr('id'); 
      $('.red-three .carousel-slide-indicator:eq(1)').attr('id','selected'); 
    });
    $('.red-three').on("click", ".formnextsecond", function() {
      playAudioRandom(TapSounds);
      $(".form .third").addClass("showgrid");
      $(".thirdformv").show();
      $(".red-three .default-content-wrapper").show();
      $(".form .second, .formnextsecond").addClass("hide");
      $(".secondformv").hide();
      $('.red-three .carousel-slide-indicator:eq(1)').removeAttr('id'); 
      $('.red-three .carousel-slide-indicator:eq(2)').attr('id','selected'); 
    }); 
    $('.red-three').on("click", ".formnextthird", function() {
      playAudioRandom(TapSounds);
      $(".red-four").show();
      $('.red-three').hide();
    });
     /*form buttons*/
     $(".formbutton").on("click", ".firstformv", function() {
      playAudioRandom(TapSounds);
      $('#form-believed').val("");
      $('#form-believed').val($(this).html());
      $(".red-three .default-content-wrapper").hide();
      $(".firstformv").hide();
      $(".formnextfirst").show();    
    });
    $(".formbutton").on("click", ".secondformv", function() {
      playAudioRandom(TapSounds);
      $('#form-describe').val("");
      $('#form-describe').val($(this).html());
      $(".red-three .default-content-wrapper").hide();
      $(".secondformv").hide();
      $(".formnextsecond").show();  
    }); 
    $(".formbutton").on("click", ".thirdformv", function() {
      playAudioRandom(TapSounds);
      $('#form-makefeel').val("");
      $('#form-makefeel').val($(this).html());
      $(".red-three .default-content-wrapper").hide();
      $(".thirdformv").hide();
      $(".formnextthird").show();    
    });
    $(".form").on("input", "#form-believed", function() {
      $(".red-three .default-content-wrapper").hide();
      $(".firstformv").hide();
      $(".formnextfirst").show();
    });
    $(".form").on("input", "#form-describe", function() {
      $(".red-three .default-content-wrapper").hide();
      $(".secondformv").hide();
      $(".formnextsecond").show();
    });
    $(".form").on("input", "#form-makefeel", function() {
      $(".red-three .default-content-wrapper").hide();
      $(".thirdformv").hide();
      $(".formnextthird").show();
    });
    /*End of Form Buttons*/
    $('.red-four').on("click", ".recordstory", function() {
      stopCurrentMusic();
      playAudioRandom(TapSounds);
      $('.red-four').hide(); 
      $(".red-five").delay(400).fadeIn('slow','','');


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
      playAudioRandom(TapSounds);
      $(this).removeClass("fullshow");
      $('.continue').addClass("fullshow");
    });
    $(".button").on("click", ".continue", function() {
      playAudioRandom(TapSounds);
      $(this).stop();
      $(this).removeClass("fullshow");
      $('.redorec').addClass("textshow");
      $('.red-five').css("background-color","white");
      $('.red-five').css("color","#EB1000");
      $(".dyncontent").hide();
      $('.red-five .default-content-wrapper h2').show(); 
      $('.create').show();    
    }); 
  $('.red-five').on("click", ".create", function() {
      //go to thankyou page
      location.href = "/thankyou";
  });

/*Thank You Page*/
$(".blue-end-one").delay(600).fadeIn('slow','','');

$('.button').on("click", ".blueendone", function() {
  initAudio();
  playMusic("MUS_Staccato.mp3");
  playAudioRandom(TapSounds); 
  $(".blue-end-one").fadeOut();     
  $(".blue-end-two").delay(400).fadeIn();
 /*Animation on words - green two*/
 function repeatAnim() {
    $( ".blue-end-two h4" ).each(function(index) {
      console.log("Test Item" + index);
     $(this).hide().delay(7000 * index).show(300);
     /*$(item).delay(7000*index).show(300, function() {
            $(this).delay(7000).hide(300);
      });*/
    });
  }
    repeatAnim();
});
$('.button').on("click", ".blueendtwo", function() {
  playAudioRandom(TapSounds);
  stopCurrentMusic();
  $(".blue-end-two").hide("slide", { direction: "left" }, 1200);
  $(".blue-end-three").delay(400).show("slide", { direction: "right" }, 1200);
}); 
$('.button').on("click", ".blueendthree", function() {
  playAudioRandom(TapSounds);
  playMusic("MUS_Staccato.mp3");
  $(".blue-end-three").fadeOut();
  $(".blue-end-four").delay(400).fadeIn();
}); 
$(".form").on("input", "#form-email", function() {
  playAudioRandom(TapSounds);
  $(".blue-end-four .submit-wrapper").delay(400).fadeIn();
});
$(".blue-end-four").on("click", ".button", function() {
  playAudioRandom(TapSounds);
  $(".blue-end-four").fadeOut();
  $(".blue-end-five").delay(400).fadeIn();
});
$('.button').on("click", ".blueendfive", function() {
  stopCurrentMusic();
  playAudioRandom(TapSounds);
  $(".blue-end-five").fadeOut();
  $(".blue-end-six").delay(400).fadeIn();
}); 
$('.button').on("click", ".startover", function() {
  playAudioRandom(TapSounds);
  location.href = "/";
});
     

    });