export default async function decorate(block) {
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

  audioTimer();
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
  
  