/*Third Section - Red and stayed Red -- Form and Audio Recorder are here*/
$(document).ready (function() {
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
        $(this).delay(3000 * index).fadeIn(3000, function () {
          if (index == 2) {
            //console.log("Last One");
          } else {
            $(this).delay(3000).hide();
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
         $('.red-three .form .first').hide('slide', { direction: 'left' }, 200);
        $('.formnextfirst').hide();
        $('.firstformv').hide('slide', { direction: 'left' }, 200);
        setTimeout(showForm, 260);

        function showForm() {
          $('.red-three .form .second')
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
        $('.red-three .form .second').removeClass('showgrid');
        $('.red-three .form .second').hide('slide', { direction: 'left' }, 200);
        $('.formnextsecond').hide();
        $('.secondformv').hide('slide', { direction: 'left' }, 200);
        setTimeout(showSecForm, 260);

        function showSecForm() {
          $('.red-three .form .third').show('slide', { direction: 'right' }, 200)
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
        $('.firstformv').hide();
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
        $('.red-three .default-content-wrapper').hide();
        $('.secondformv').hide();
        $('.formnextsecond').show();
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
      $('.recordstory').hide();
      $('.recordexample-wrapper').hide();
      $("#startRecording").hide();
      $("#stopRecording").hide();
      $('.audiorecorder-wrapper').hide();

     // $('.red-four').css('background-color', '#EB1000').delay(400).fadeIn('slow','','');
      $('.red-four').animate({backgroundColor: '#EB1000'}, 'slow');
      $('.red-four').css('color', 'white');
      $('.countdown-wrapper').show();
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
        $('.red-four').animate({backgroundColor: 'white'}, 'slow');
       // $('.red-four').css('background-color', 'white');
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
      $('.button').on('click', '.create', function () {
        playAudioRandom(TapSounds);
        $('.red-four').hide();
        $('.blue-end-one').delay(600).fadeIn('slow', '', '');
      });
      

});
