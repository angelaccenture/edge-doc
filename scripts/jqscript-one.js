/*Initial Blue Section - now purple*/

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
 /*Blue Three - First Create Your Story Button*/
$('.button').on('click', '.bluethreebutton', function () {
    playAudioRandom(TapSounds);
    $('.blue-three')
      .hide();
    $('.green-one')
      .delay(400)
      .fadeIn('slow', '', '');
  });
});
