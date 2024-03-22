/*Section Four - the final section with Video Player*/
$(document).ready (function() {    
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
    videoWait();
  });
var stopFunc = false;
function repeatAnim() {
if (stopFunc == false) {
     $('.blue-end-two h4')
       .each(function (index) {
         $(this).delay(7000 * index).fadeIn(4000, function () {
         $(this).delay(3000).fadeOut(function() {
                 if(index === 13) {
                     repeatAnim();
                 }
               })
             
           });
       });
     }
   }


/*Blue End Two - Animation from Above*/

function videoWait() {
  $.get('https://genheroes.accenture.com/test/stream/stream.m3u8', function(data){ 
      console.log("yes good");
    }).fail(function() {
      console.log("repeat function");
      delay(1000).videoWait();
  });
}




/*Use this code after loop is true and then add a 10 sec delay*/
$('.button').on('click', '.blueendtwobutton', function () {
                  playAudioRandom(TapSounds);
                  stopCurrentMusic();
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
    $('.blue-end-four .submit-wrapper').delay(400).fadeIn();
});
/*Blue End Four -- Email gets submitted here -- put API call here*/
$('.button').on('click', '.blueendfourbutton', function () {
    playAudioRandom(TapSounds);
    $('.blue-end-four').fadeOut();
    $('.blue-end-five').delay(400).fadeIn();
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
