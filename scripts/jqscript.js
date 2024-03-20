$(document).ready (function() {
  /*Blue One - Intro Get Started*/
  $(".blue-one").delay(500).show("slide", { direction: "left" }, 1200);
  $(".blue-one h1").hide();
  setTimeout(function() {
    $(".blue-one h1").slideDown(600);
  }, 1260);
  $('.button').on("click", ".blueonebutton", function() {
    initAudio();
    playMusic("MUS_Staccato.mp3");
    $(".blue-one").hide();
    $(".blue-two").delay(400).fadeIn('slow','','');
  });
  $('.blue-one p:last-child').addClass("headphones");
  /*Blue Two - Legal*/
  $('.button').on('click', '.acceptbutton', function () {
    playAudioRandom(TapSounds);
    $('.blue-two')
      .fadeOut();
    $('.blue-three')
      .delay(400)
      .fadeIn();
  });
  $('.button').on('click', '.declinebutton', function () {
    playAudio('SFX_UI_Decline.mp3');
    stopCurrentMusic();
    $('.blue-one')
      .show();
    $('.blue-two')
      .hide();
  });
 /*Blue Three - Create Story*/
$('.button').on('click', '.bluethreebutton', function () {
    playAudioRandom(TapSounds);
    $('.blue-three')
      .hide();
    $('.green-one')
      .delay(400)
      .fadeIn('slow', '', '');
  });
  /*Green One - Full Color*/
  $('.button').on('click', '.greenonebutton', function () {
        playAudioRandom(TapSounds);
        $('.green-one')
          .hide('slide', { direction: 'left' }, 1200);
        $('.green-two')
          .delay(400)
          .show('slide', { direction: 'right' }, 1200);
        repeatAnimGreen();
  });
    /*Animation on words for next green two slide*/
    function repeatAnimGreen() {
      $('.green-two h4')
        .each(function (index) {
          $(this)
          .delay(3000 * index)
          .delay(2000 * index)
          .slideDown(500, function () {
            if (index == 4) {
              //console.log("Last One");
            } else {
              $(this)
              .delay(2500)
              .fadeOut();
          }
        });

    });
}
  /*Green Two - Animation Above*/
  $('.button').on('click', '.greentwobutton', function () {
        playAudioRandom(TapSounds);
        $('.green-two')
          .fadeOut();
        $('.green-three')
          .delay(400)
          .fadeIn()
          .addClass('greencar');
  });

  /*Green Three - carousel*/

  /*Red One - Full Color*/
    $('.button').on('click', '.redonebutton', function () {
        musicTransitionTo('MUS_Orchestral.mp3');
        playAudioRandom(TapSounds);
        $('.red-one')
          .hide('slide', { direction: 'left' }, 1200);
        $('.red-two')
          .delay(400)
          .show('slide', { direction: 'right' }, 1200);
        /*Add auto trans here
       $(".red-one").delay(6000).hide("slide", { direction: "left" }, 1200);
       $(".red-two").delay(6600).show("slide", { direction: "right" }, 1200);*/
        repeatAnimRed();
      });

    /*Animation on words -red two*/
    function repeatAnimRed() {
      $('.red-two h4')
        .each(function (index) {
          $(this)
            .delay(3000 * index)
            .slideDown(1000, function () {
              if (index == 2) {
                //console.log("Last One");
              } else {
                $(this)
                  .delay(2000)
                  .fadeOut();
              }
            });
        });
    }
 /*Red Two - Animation from Above*/
    $('.button').on('click', '.redtwobutton', function () {
        playAudioRandom(TapSounds);
        $('.red-two')
          .fadeOut();
        $('.red-three')
          .delay(400)
          .fadeIn()
          .addClass('redcar');
        $('.red-three .carousel-slide-indicator:eq(0)')
          .attr('id', 'selected');
      });

  /*Red Three -- Form Section*/
    $('.red-three').on('click', '.formnextfirst', function () {
        playAudioRandom(TapSounds);
        $('.form .first, .formnextfirst')
          .hide('slide', { direction: 'left' }, 200);
        $('.firstformv')
          .hide('slide', { direction: 'left' }, 200);
        setTimeout(showForm, 660);

        function showForm() {
          $('.form .second')
            .show('slide', { direction: 'right' }, 200)
            .addClass('showgrid');
          $('.red-three .default-content-wrapper')
            .show('slide', { direction: 'right' }, 200);
          $('.secondformv')
            .parent()
            .parent()
            .show('slide', { direction: 'right' }, 200);
        }

        $('.red-three .carousel-slide-indicator:eq(0)')
          .removeAttr('id');
        $('.red-three .carousel-slide-indicator:eq(1)')
          .attr('id', 'selected');
      });
      $('.red-three').on('click', '.formnextsecond', function () {
        playAudioRandom(TapSounds);
        $('.form .second')
          .removeClass('showgrid');
        $('.form .second, .formnextsecond')
          .hide('slide', { direction: 'left' }, 600);
        $('.secondformv')
          .hide('slide', { direction: 'left' }, 600);
        setTimeout(showSecForm, 660);

        function showSecForm() {
          $('.form .third')
            .show('slide', { direction: 'right' }, 200)
            .addClass('showgrid');
          $('.red-three .default-content-wrapper')
            .show('slide', { direction: 'right' }, 200);
          $('.thirdformv')
            .parent()
            .parent()
            .show('slide', { direction: 'right' }, 200);
        }

        $('.red-three .carousel-slide-indicator:eq(1)')
          .removeAttr('id');
        $('.red-three .carousel-slide-indicator:eq(2)')
          .attr('id', 'selected');
      });

    $('.red-three').on('click', '.formnextthird', async function () {
        playAudioRandom(TapSounds);
        $('.red-three')
          .hide();
        $('.red-four')
          .show();

        const responses = {
          'firstResponse': $('#form-believed')
            .val(),
          'secondResponse': $('#form-describe')
            .val(),
          'thirdResponse': $('#form-makefeel')
            .val()
        };

        $.get('https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/fourthPromptAction.json', responses, function (response) {
          $('#give-us-just-a-moment')
            .text(response.response);
        });
      });

    /*Red Three - form buttons & Input Fields*/
    $('.formbutton').on('click', '.firstformv', function () {
        playAudioRandom(TapSounds);
        $('#form-believed')
          .val('');
        $('#form-believed')
          .val($(this)
            .html());
        $('.red-three .default-content-wrapper')
          .hide();
        $('.firstformv')
          .hide();
        $('.formnextfirst')
          .show();
      });
    $('.formbutton').on('click', '.secondformv', function () {
        playAudioRandom(TapSounds);
        $('#form-describe')
          .val('');
        $('#form-describe')
          .val($(this)
            .html());
        $('.red-three .default-content-wrapper')
          .hide();
        $('.secondformv')
          .hide();
        $('.formnextsecond')
          .show();
      });
    $('.formbutton').on('click', '.thirdformv', function () {
        playAudioRandom(TapSounds);
        $('#form-makefeel').val('');
        $('#form-makefeel').val($(this).html());
        $('.red-three .default-content-wrapper').hide();
        $('.thirdformv').hide();
        $('.formnextthird').show();
      });
    $('.form').on('input', '#form-believed', function () {
        $('.red-three .default-content-wrapper')
          .hide();
        $('.firstformv')
          .hide();
        $('.formnextfirst')
          .show();
      });
    $('.form').on('input', '#form-describe', function () {
        $('.red-three .default-content-wrapper')
          .hide();
        $('.secondformv')
          .hide();
        $('.formnextsecond')
          .show();
      });
    $('.form').on('input', '#form-makefeel', function () {
        $('.red-three .default-content-wrapper')
          .hide();
        $('.thirdformv')
          .hide();
        $('.formnextthird')
          .show();
      });
    /*Red Four - Record Story*/
    $('.red-four').on("click", ".recordstory", function() {
      stopCurrentMusic();
      playAudioRandom(TapSounds);
      $('.red-four').css('background-color', '#EB1000');
      $('.red-four').css('color', 'white');
      $('.recordstory').hide();
      $('.recordexample-wrapper').hide();
      $("#startRecording").hide();
      $("#stopRecording").hide();
      $('.countdown-wrapper').show();
      $('.audiorecorder-wrapper').hide();
      setTimeout(function() {
        $('.audiotimer-wrapper').show();
      }, 4000);


      $(".button .stoprecording").delay(3000).queue(function(next){
        $(this).addClass("fullshow");
        next();
      });
      $(".button .continue").delay(93000).queue(function(next){
          $(this).addClass("fullshow");
          $('.button .stoprecording').removeClass("fullshow");
          $('.audiotimer label, .audiotimer span').hide();
          next();
          });
      });
    $('.button').on('click', '.stoprecording', function () {
        playAudioRandom(TapSounds);
        $(this).removeClass('fullshow');
        $('.continue').addClass('fullshow');
        $('.audiotimer label, .audiotimer span').hide();
      });
    $('.button').on('click', '.continue', function () {
        playAudioRandom(TapSounds);
        $(this).stop();
        $(this).removeClass('fullshow');
        $('.redorec').addClass('textshow');
        $('.red-four').css('background-color', 'white');
        $('.red-four').css('color', '#EB1000');
        $('.dyncontent').hide();
        $('.red-four .default-content-wrapper p').hide();
        $('.red-four .default-content-wrapper h2').show();
        $('.audiorecorder-wrapper').show();
        $('.audiotimer-wrapper').hide();
        $('.example').hide();
        $('.hideexample').hide();
        $('.create').show();
      });

      //**THANK YOU PAGE STARTS HERE */
  /*Blue End One*/
  $('.blue-end-one').delay(600).fadeIn('slow', '', '');
  $('.button').on('click', '.blueendonebutton', function () {
      initAudio();
      playMusic('MUS_Staccato.mp3');
      playAudioRandom(TapSounds);
      $('.blue-end-one')
        .fadeOut();
      $('.blue-end-two')
        .delay(400)
        .fadeIn();
      repeatAnim();
    });

    var stopFunc = false;
    function repeatAnim() {
      if (stopFunc == false) {
            $('.blue-end-two h4')
              .each(function (index) {
                $(this).delay(7000 * index).fadeIn(4000, function () {
                $(this).delay(3000).fadeOut(function() {
                        if(index === 2) {
                            repeatAnim();
                        }
                      })
                    
                  });
              });
            }
          }
/*Blue End Two - Animation from Above*/
  $('.button').on('click', '.blueendtwobutton', function () {
      playAudioRandom(TapSounds);
      stopCurrentMusic();
      /*JOSH - CALL THIS INTO API WHEN VIDEO RETURNS*/
      stopFunc = true;
      $('.blue-end-two')
        .hide('slide', { direction: 'left' }, 1200);
      $('.blue-end-three')
        .delay(400)
        .show('slide', { direction: 'right' }, 1200);
    });

/*Blue End Three*/
  $('.button').on('click', '.blueendthreebutton', function () {
      playAudioRandom(TapSounds);
      playMusic('MUS_Staccato.mp3');
      $('.blue-end-three')
        .fadeOut();
      $('.blue-end-four')
        .delay(400)
        .fadeIn();
    });

  $('.form').on('input', '#form-email', function () {
      playAudioRandom(TapSounds);
      $('.blue-end-four .submit-wrapper')
        .delay(400)
        .fadeIn();
    });
/*Blue End Four*/
  $('.blue-end-four').on('click', '.button', function () {
      playAudioRandom(TapSounds);
      $('.blue-end-four')
        .fadeOut();
      $('.blue-end-five')
        .delay(400)
        .fadeIn();
    });
/*Blue End Five*/
  $('.button').on('click', '.blueendfivebutton', function () {
      stopCurrentMusic();
      playAudioRandom(TapSounds);
      $('.blue-end-five')
        .fadeOut();
      $('.blue-end-six')
        .delay(400)
        .fadeIn();
    });
  $('.button').on('click', '.startover', function () {
      playAudioRandom(TapSounds);
      location.href = '/';
    });


});
