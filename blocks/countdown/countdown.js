export default function decorate(block) {
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const button = document.createElement('div');
    button.setAttribute('id','countdown');
    main.append(button);
  });
  block.textContent = '';
  block.append(main);

  const audioTimerm = document.createElement('label');
  audioTimerm.setAttribute('id', 'minutes');
  audioTimerm.innerText = '00';

  //const audioTimerd = document.createElement(':');

  const audioTimers = document.createElement('label');
  audioTimers.setAttribute('id', 'seconds');
  audioTimers.innerText = '00';

  block.appendChild(audioTimerm);
  // block.appendChild(audioTimerd);
   block.appendChild(audioTimers);
 
  // audioTimer();
}

var elements = document.getElementsByClassName("recordstory");

var myFunction = function() {
    var timeleft = 3;
    var downloadTimer = setInterval(function(){
     
 if(timeleft <= 0){
    clearInterval(downloadTimer);
    var recorder = document.getElementsByClassName("record-wrapper");
     document.getElementsByClassName("countdown-wrapper")[0].setAttribute("style","display:none");
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}


function audioTimer() {
  /*Audio Timer*/
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  setInterval(setTime, 1000);
  
    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
  
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
  
  }
  
  


