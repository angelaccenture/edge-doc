function setup() {
 var elements = document.getElementsByClassName("recordstory");

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', initFunction, false);
  }
  

 // document.getElementById("startRecording").addEventListener("click", initFunction);
  let isRecording = document.getElementById("isRecording");
  function initFunction() {
    setTimeout(function() {
    async function getUserMedia(constraints) {
      if (window.navigator.mediaDevices) {
        return window.navigator.mediaDevices.getUserMedia(constraints);
      }
      let legacyApi =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (legacyApi) {
        return new Promise(function (resolve, reject) {
          legacyApi.bind(window.navigator)(constraints, resolve, reject);
        });
      } else {
        alert("user api not supported");
      }
    }

    isRecording.textContent = "Recording...";

    let audioChunks = [];
    let rec;
    function handlerFunction(stream) {
      rec = new MediaRecorder(stream);
      rec.start();
      rec.ondataavailable = (e) => {
        audioChunks.push(e.data);
        if (rec.state === "inactive") {
          let blob = new Blob(audioChunks, { type: "audio/mp3" });
          console.log(blob);
          document.getElementById("audioElement").src = URL.createObjectURL(blob);
        }
      };
    }

    function startusingBrowserMicrophone(boolean) {
      getUserMedia({ audio: boolean }).then((stream) => {
        handlerFunction(stream);
      });
    }

    startusingBrowserMicrophone(true);
/*Stop Recording Button*/
var elementsstop = document.getElementsByClassName("stoprecording");
  for (var i = 0; i < elementsstop.length; i++) {
    elementsstop[i].addEventListener("click", (e) => {
      rec.stop();
      isRecording.textContent = "Click play button to start listening";
    });
  }
  document.getElementById("stopRecording").addEventListener("click", (e) => {
      rec.stop();
      isRecording.textContent = "Click play button to start listening";
  });

   /*End Recording After Time*/ 
   function newTimeout() {
    endingTimeout(function(){
      rec.stop();
      isRecording.textContent = "Recording hit end of timer";
      }, 93000);
    }
   
  }, 4000)
  newTimeout();
}
}

/**
 * Audio Recorder Block
 * Record audio from the end user
 */
export default async function decorate(block) {
  const startBtn = document.createElement('button');
  startBtn.setAttribute('id', 'startRecording');
  startBtn.innerText = 'Start Recording';

  const stopBtn = document.createElement('button');
  stopBtn.setAttribute('id', 'stopRecording');
  stopBtn.innerText = 'Stop Recording';

  const audio = document.createElement('audio');
  audio.setAttribute('controls', '');
  audio.setAttribute('id', 'audioElement');

  const isRecording = document.createElement('p');
  isRecording.setAttribute('id', 'isRecording');
  isRecording.innertText = 'Click start button to record';

  block.appendChild(startBtn);
  block.appendChild(stopBtn);
  block.appendChild(isRecording);
  block.appendChild(audio);

  setup();
}
