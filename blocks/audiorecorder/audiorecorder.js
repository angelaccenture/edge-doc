import { getuuid } from '../../scripts/jqscript-four.js';

async function uploadFile(blob, presignedUrl) {
  try {
    const audioElement = document.getElementById('audioElement');
    const audioUrl = audioElement.src;

    fetch(audioUrl)
      .then(response => response.blob())
      .then(async audioBlob => {
        const audioFile = new File([audioBlob], 'audio.m4a', { type: 'audio/m4a' });
        await fetch(presignedUrl, {
          method: 'PUT',
          body: audioFile
        });
      })
      .then(response => {
        let settings = {
          url: 'https://api.cleanvoice.ai/v1/edits',
          method: 'POST',
          timeout: 0,
          headers: {
            'X-API-Key': '7gKSf2Ca2SHnp7fYm6bPciE3DdneF2cA',
            'Content-Type': 'application/json'
          },
          data: {
            input: {
              files: [presignedUrl],
              config: {}
            }
          }
        };

        $.ajax(settings).done(function (response) {
          debugger;
          console.log(response);
        });
      })
      .catch(error => {
        console.error('Error uploading audio:', error);
      });
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
            blob = new Blob(audioChunks, { type: "audio/m4a" });
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
      let settings = {
        "url": "https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/uploadAction.json",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "X-OW-EXTRA-LOGGING": "on"
        },
      };

      let uuid = '';
      $.ajax(settings).done(function (response) {
        uuid = response.uuid;
        uploadFile(blob, response.signedUrl).then((result) => {
          $.post({
            url: 'https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/audioAction',
            cache: false,
            data: JSON.stringify({ 'presignedUrl': response.signedUrl, 'uuid': uuid }),
            headers: {
              'Content-Type': 'application/json',
              'X-OW-EXTRA-LOGGING': 'on'
            }
          }, function(success) {
            getuuid(uuid);
            console.log('Successful call to audioAction: ', success);
          });
        });
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
