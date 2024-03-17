export default function decorate(block) {
  const audiotimer = document.createElement('label');
  audiotimer.setAttribute("id","video-player");
   [...block.children].forEach((row) => {
     while (row.firstElementChild) li.append(row.firstElementChild);
     [...li.children].forEach((div) => {
       //removediv.removeChild(div);
     });
     audiotimer.append(li);
   });
   block.textContent = '';
   block.append(audiotimer);
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

