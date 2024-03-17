export default async function decorate(block) {
  const audioTimerm = document.createElement('label');
  audioTimerm.setAttribute('id', 'minutes');
  audioTimerm.innerText = '00';

  const audioTimerd = document.createElement('span');
  audioTimerd.innerText = ':';

  const audioTimers = document.createElement('label');
  audioTimers.setAttribute('id', 'seconds');
  audioTimers.innerText = '00';

  block.appendChild(audioTimerm);
  block.appendChild(audioTimerd);
  block.appendChild(audioTimers);
}

var elements = document.getElementsByClassName("recordstory");

function audioTimer() {
  setTimeout(function() {
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
  }, 3000)
  }
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', audioTimer, false);
    }

/*Stop Timing*/
var elementsstop = document.getElementsByClassName("stoprecording");
console.log(elementsstop);
elementsstop.addEventListener('click', myFunction, false);


/*HTML
<label id="minutes">00</label>:<label id="seconds">00</label>*/

  
  