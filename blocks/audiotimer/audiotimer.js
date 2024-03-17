export default async function decorate(block) {
  const audioTimer = document.createElement('label');
  startBtn.setAttribute('id', 'startRecording');
  startBtn.innerText = 'Start Recording';

  block.appendChild(startBtn);
}




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

