/*Section Four - the final section with Video Player*/
import { playVideo } from '../blocks/video/video.js';

//var videourl = "https://genheroes.accenture.com/test/stream/stream.m3u8";
var videourl = "";
  /*Make this URL dynamic*/
  export async function getuuid(uuid) {
      console.log("YES");
      console.log(uuid);
      videourl = "https://genheroes.accenture.com/streams/" + uuid + "/stream.m3u8";
      console.log(videourl);
}

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
    setTimeout(function () {
      videoWait();
    }, 30000);
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

function videoWait() {
  $.ajax({
          context: document.body,
          url: videourl,
          type: "get",
          success: function() { 
            console.log("Yes video ready");
            console.log(videourl);
            setTimeout(function () {
              videoscreens();
            }, 10000);
          },
          error : function () {
             setTimeout(function () {
              videoWait();
            }, 10000);
            }
      });

}

function videoscreens() {
    stopCurrentMusic();
    stopFunc = true;
    $('.blue-end-two')
    .hide('slide', { direction: 'left' }, 1200);
    $('.blue-end-three')
    .delay(400)
  .show('slide', { direction: 'right' }, 1200);
    playVideo(videourl);
}


/*DUMMY DELETE ME BUTTON*/
$('.button').on('click', '.blueendtwobutton', function () {
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
