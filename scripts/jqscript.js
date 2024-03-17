$(document).ready(function() {
  /*onload animation*/
  $(".blue-one").delay(500).show("slide", { direction: "left" }, 1200);
  $(".blue-one h1").hide().delay(1260).slideDown(600);

  /* Function to handle blue one button click */
  function handleBlueOneButtonClick() {
    initAudio();
    playMusic("MUS_Staccato.mp3");
    $(".blue-one").hide();
    $(".blue-two").delay(400).fadeIn('slow', '');
  }

  function handleBlueThreeButtonClick() {
    playAudioRandom(TapSounds);
    $('.blue-three').hide();
    $('.green-one').delay(400).fadeIn('slow', '', '');
  }

  /* Function to handle accept button click */
  function handleAcceptButtonClick() {
    playAudioRandom(TapSounds);
    $('.blue-two').fadeOut();
    $('.blue-three').delay(400).fadeIn();
  }

  /* Function to handle decline button click */
  function handleDeclineButtonClick() {
    playAudio('SFX_UI_Decline.mp3');
    stopCurrentMusic();
    $('.blue-one').show();
    $('.blue-two').hide();
  }

  /* Function to handle green one button click */
  function handleGreenOneButtonClick() {
    playAudioRandom(TapSounds);
    $('.green-one').hide('slide', { direction: 'left' }, 1200);
    $('.green-two').delay(400).show('slide', { direction: 'right' }, 1200);
    repeatAnimGreen();
  }

  /* Function to handle green one button click */
  function handleGreenTwoButtonClick() {
    playAudioRandom(TapSounds);
    $('.green-two').fadeOut();
    $('.green-three').delay(400).fadeIn().addClass('greencar');
  }

  /* Function to handle red one button click */
  function handleRedOneButtonClick() {
    musicTransitionTo('MUS_Orchestral.mp3');
    playAudioRandom(TapSounds);
    $('.red-one').hide('slide', { direction: 'left' }, 1200);
    $('.red-two').delay(400).show('slide', { direction: 'right' }, 1200);
    repeatAnimRed();
  }

  /* Function to handle form next first button click */
  function handleFormNextFirstButtonClick() {
    playAudioRandom(TapSounds);
    $('.form .first, .formnextfirst').hide('slide', { direction: 'left' }, 600);
    $('.firstformv').hide('slide', { direction: 'left' }, 600);
    setTimeout(showForm, 660);
  }

  /* Function to handle form next second button click */
  function handleFormNextSecondButtonClick() {
    playAudioRandom(TapSounds);
    $('.form .second').removeClass('showgrid');
    $('.form .second, .formnextsecond').hide('slide', { direction: 'left' }, 600);
    $('.secondformv').hide('slide', { direction: 'left' }, 600);
    setTimeout(showSecForm, 660);
  }

  /* Function to handle form next third button click */
  async function handleFormNextThirdButtonClick() {
    playAudioRandom(TapSounds);
    $('.red-three').hide();
    $('.red-four').show();
    const responses = {
      'firstResponse': $('#form-believed').val(),
      'secondResponse': $('#form-describe').val(),
      'thirdResponse': $('#form-makefeel').val()
    };
    $.get('https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/fourthPromptAction.json', responses, function(response) {
      $('#give-us-just-a-moment').text(response.response);
    });
  }

  /* Animation on words - green two */
  function repeatAnimGreen() {
    $('.green-two h4').each(function(index) {
      $(this).delay(3000 * index).slideDown(1000, function() {
        if (index !== 4) {
          $(this).delay(2000).fadeOut();
        }
      });
    });
  }

  /* Animation on words - red two */
  function repeatAnimRed() {
    $('.red-two h4').each(function(index) {
      $(this).delay(3000 * index).slideDown(1000, function() {
        if (index !== 2) {
          $(this).delay(2000).fadeOut();
        }
      });
    });
  }

  /* Event handlers */
  let $button = $('.button');
  let $redThree = $('.red-three');

  $button.on('click', '.blueonebutton', handleBlueOneButtonClick);
  $button.on('click', '.bluethreebutton', handleBlueThreeButtonClick);
  $button.on('click', '.acceptbutton', handleAcceptButtonClick);
  $button.on('click', '.declinebutton', handleDeclineButtonClick);
  $button.on('click', '.greenonebutton', handleGreenOneButtonClick);
  $button.on('click', '.greentwobutton', handleGreenTwoButtonClick);
  $button.on('click', '.redonebutton', handleRedOneButtonClick);
  $redThree.on('click', '.formnextfirst', handleFormNextFirstButtonClick);
  $redThree.on('click', '.formnextsecond', handleFormNextSecondButtonClick);
  $redThree.on('click', '.formnextthird', handleFormNextThirdButtonClick);

  // Other event handlers...
});
