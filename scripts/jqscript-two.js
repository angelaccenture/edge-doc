/*Second Section - Green -- now it's Blue*/

$(document).ready (function() {
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
          $(this).delay(4000 * index).fadeIn(2000, function () {
            if (index == 4) {
              //console.log("Last One");
            } else {
              $(this).delay(1820).fadeOut();
          }
        });

    });
}
/*
function repeatAnimGreen-ORIGINAL() {
  $('.green-two h4')
    .each(function (index) {
      $(this).delay(3000 * index).slideDown(1000, function () {
        if (index == 4) {
          //console.log("Last One");
        } else {
          $(this).delay(2000).fadeOut();
      }
    });

});
}*/
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

  /*Green Three - carousel.js has all of this code -- pre-built block*/
});
