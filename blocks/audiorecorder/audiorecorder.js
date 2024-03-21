async function uploadFile(file, presignedUrl) {
  try {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': 'audio/mp3' // Set the content type based on your file type
      }
    });

    if (response.ok) {
      console.log('File uploaded successfully!');
    } else {
      console.error('Failed to upload file:', response.statusText);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

function setup() {
  let elements = document.getElementsByClassName("recordstory"),
      blob;

  for (let i = 0; i < elements.length; i++) {
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
            blob = new Blob(audioChunks, { type: "audio/mp3" });
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
      let elementsstop = document.getElementsByClassName("stoprecording");
      for (let i = 0; i < elementsstop.length; i++) {
        elementsstop[i].addEventListener("click", (e) => {
          rec.stop();
          isRecording.textContent = "Click play button to start listening";
        });
      }

      document.getElementById("stopRecording").addEventListener("click", (e) => {
        rec.stop();
        isRecording.textContent = "Click play button to start listening";
      });

      setInterval(function(){
        rec.stop();
        isRecording.textContent = "Recording hit end of timer";
      }, 90000);

    }, 4000);

    $('.red-four').on('click', '.create', function () {
      debugger;
      $.get('https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/uploadAction.json', function(response) {
        uploadFile(blob, response.presignedUrl).then((result) => {
          $.post('https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/audioAction', { 'presignedUrl': response.presignedUrl }, function (success) {
            //location.href = '/thankyou';
          });
        })
      });
    });
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

  const hidden = document.createElement('input');
  hidden.setAttribute('id', 'audiofileinput');
  hidden.setAttribute('type', 'file');
  hidden.innerText = 'Stop Recording';

  const audio = document.createElement('audio');
  audio.setAttribute('controlslist',"nodownload noplaybackrate noremoteplayback");
  audio.setAttribute('controls', '');
  audio.setAttribute('disableremoteplayback',"false");
  audio.setAttribute('id', 'audioElement');

  const isRecording = document.createElement('p');
  isRecording.setAttribute('id', 'isRecording');
  isRecording.innertText = 'Click start button to record';

  const border = document.createElement('div');
  border.setAttribute('id', 'redborder');
  border.innertText = '&nbsp;';

  block.appendChild(startBtn);
  block.appendChild(stopBtn);
  block.appendChild(isRecording);
  block.appendChild(audio);
  block.appendChild(border);

  setup();
}
