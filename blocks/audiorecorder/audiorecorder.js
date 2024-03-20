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
      AWS.config.update({
        accessKeyId: 'ASIA3FLDZRVKSRIYQIWM',
        secretAccessKey: 'BL5ruHyAFgffaLunZuU9GepdbgPcwLMYA3EBwo6G'
      });

      // Create an S3 instance
      const s3 = new AWS.S3();

      function uploadFile() {
        const fileInput = document.getElementById('audioElement');
        const file = fileInput.files[0];

        const uploadParams = {
          Bucket: '276036-01-pub',
          Key: 'audio-recordings',
          Body: file,
          ACL: 'public-read'
        };

        // Upload file to S3
        s3.upload(uploadParams, (err, data) => {
          if (err) {
            console.error('Error uploading file:', err);
          } else {
            console.log('File uploaded successfully:', data.Location);
            fetch('https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/audioAction', {
              method: 'POST',
              cache: 'no-cache',
              body: { 'location': data.location },
              headers: {
                'X-OW-EXTRA-LOGGING': 'on'
              }
            }).then(() => {
              //location.href = '/thankyou';
            });
          }
        });
      }

      uploadFile();
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
