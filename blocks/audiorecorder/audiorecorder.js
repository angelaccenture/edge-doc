function setup() {
  const recordButtons = document.getElementsByClassName("recordstory");

  for (let i = 0; i < recordButtons.length; i++) {
    recordButtons[i].addEventListener('click', initRecording, false);
  }

  const isRecording = document.getElementById("isRecording");

  function initRecording() {
    setTimeout(async function() {
      isRecording.textContent = "Recording...";

      let audioChunks = [];
      let mediaRecorder;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        mediaRecorder.ondataavailable = function(e) {
          audioChunks.push(e.data);
          if (mediaRecorder.state === "inactive") {
            const blob = new Blob(audioChunks, { type: "audio/ogg; codecs=opus" });
            console.log(blob);
            document.getElementById("audioElement").src = URL.createObjectURL(blob);
          }
        };

        mediaRecorder.onstop = function() {
          isRecording.textContent = "Click play button to start listening";
        };
      } catch (error) {
        console.error("Error accessing microphone: ", error);
        alert("Failed to access microphone. Please ensure it's enabled and try again.");
      }

      setTimeout(function() {
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
        }
      }, 90000);

    }, 4000);
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
  audio.setAttribute('controlslist',"nodownload noplaybackrate");
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
