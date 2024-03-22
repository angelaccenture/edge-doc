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
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      const data = {
        'secret': 'gA2jj/dYrpI6ZXiGjFmZ9MSX1lZ544a8',
        'object_name': crypto.randomUUID() + '/recording.m4a'
      };

      const sampleResponse = {
        "message": "success!",
        "signed-url": {
          "fields": {
            "AWSAccessKeyId": "ASIA3FLDZRVKQVPGFKE2",
            "key": "foo.aac",
            "policy": "eyJleHBpcmF0aW9uIjogIjIwMjQtMDMtMjJUMDA6MzE6NTJaIiwgImNvbmRpdGlvbnMiOiBbeyJidWNrZXQiOiAiMjc2MDM2LTAxLXB1YiJ9LCB7ImtleSI6ICJmb28uYWFjIn0sIHsieC1hbXotc2VjdXJpdHktdG9rZW4iOiAiSVFvSmIzSnBaMmx1WDJWakVCd2FDWFZ6TFdWaGMzUXRNU0pJTUVZQ0lRQ0ZNSW9VdUJpY3JMcW1nV2NLc3R2UDhyNHlUUXovd1RUaTNiaEFFNTJCZ2dJaEFQN1d1TUxXaUxNQ0t6djVPQXQyTGo3TkJVdzZGR3EwVmxDUGg5Vm5JYklTS3J3RkNEVVFBQm9NTnpZM016azNPREkxT0RjM0lnd2h5cWViemFSTTdWaXhibjhxbVFYN2diaVVjd0llRkcxUVhpME1OMVE3eWRncVMwS0Z5TXNLWmZSb1J4Z3p6MTVvYi9LOVltQ2lIeUl2RzV6WWFQaXFyMTRoQWhnR1hibEhBVjVGOFhKZU4wc25iU0NOM3F1alVEVklFTnZ1WFZ6eFF3YUtJcFREbVRSV3lkZ1lIelV3Z2lkbnNDVHZFQlJsS2hBMXRTOXcvZTg3dVZTZWsybkliUzhvdlB6OXlVenJFQTI2ZEcvMnBYelA4emRISHp2UjRsNkRhS0VwMHdMSGJLU1dLS243cEFWVVV5K1JMU1NLci9GSUFCOVprdEFZeVowY0ZFTnNiZGtoVjV6WEJCUzU4Q0NhclRKblpUT05ScnpJQmtVUGtiYWFlYlB5NVZjK3YwTW1jd2Vid3ovWjVmb1QwODRrbFNHVm1MVE44SklhSVhVYWc3OFFUcTNaZFNnWU1yd0piaEI1Mzl1TGVDMWdyRG9sSm1IbU83dzJERGZpRzZPTWlnVFhnc05mMHM3OWJ2cWIwYUljNk1jRnBxNXFQTHZQWkduYlEwZjRPcUJUUXMycDBJWmJTQmhCY1c2N2FjbHdPZ1Z5Z2U1emRyU1dNdy9QeFBhZ1FsVisydHpINkpRZUtTM2QrVlkvaDVydkxwMmkvTUVtTkNBNjBVbTNjTXFiak9XZ1prNkZCdVU0L2swMGkxNS9qVStFY3VBN0FZOFJQNmphMnIwMlEyYzhwNEozeEdNZlNhZGNKMTUyTDVIL2NHbFZGeUZ5TGJRdVJiMG5aSFlQVmFtOGdjSjZXa1c5UFloaDFMZ2NBM25DaDdtSTJtUndLWUpsVWs0RGZrWHh6d3k4bmR5a0JYcEl3aXFBQ1ZseVRuZ0hMMlMwb2l0WjhEaWFKK1I1enFZZVhmSUcyd05RaVg1RjNOcGNXYVFaa25hbUE2OXFDa0EzVEtiLzhPZ3BhTkRaMTd5OVArTUk3ZlR1Q1pBaXAvcXU1TFg2U010YzlpTHJ6bTZ1cFV4TU9ycU5QTzRlL2daMnJLY2FvbGFIYk9EckZMQ0tFMGNrQmV0MEhrVUgxOFgzRTNnR1g1U2UvY3k3VUE0RlRnd01GMVRicDdGVDRUKytvSjFOVmlHK0pLa2lnM2RnNHYzaUdLeXdJejk0K21lbmJ1ZVl1NW4vRnVpcnBWM3U3WllsSWpDR3BmS3ZCanF3QWFKd2d1UVNQSk9CUmFzUncvOHhyMzZxOE4xTlRLcDFhSERXdG5FY1VBM0picTFhMk9NSnhkUFIySzE2NTZsQ0xXUUlvSjZIa3pCTjNRb2hKQjN3c2Zva2ROSkZNUmNwVHd3RFh1N1dHVm9nZlNvVWhKU1FuZ0d1SjVqZG8zZGpQR3VBREoraTRSVmhTTXBKRGsybGxYRkhOTjlXb0JrOVJJa1lIckxQOE9sUFpucGZZeUkwTjFZcmZnU0lSV29HeUNWWDlxSzBZdnI0R2dBYmM3dndsUVFBWkhyVzRjSkpBZFRwMmU3S3QxNHAifV19",
            "signature": "IbvXrJDjWqmPPg7XlE93PRAuECQ=",
            "x-amz-security-token": "IQoJb3JpZ2luX2VjEBwaCXVzLWVhc3QtMSJIMEYCIQCFMIoUuBicrLqmgWcKstvP8r4yTQz/wTTi3bhAE52BggIhAP7WuMLWiLMCKzv5OAt2Lj7NBUw6FGq0VlCPh9VnIbISKrwFCDUQABoMNzY3Mzk3ODI1ODc3IgwhyqebzaRM7Vixbn8qmQX7gbiUcwIeFG1QXi0MN1Q7ydgqS0KFyMsKZfRoRxgzz15ob/K9YmCiHyIvG5zYaPiqr14hAhgGXblHAV5F8XJeN0snbSCN3qujUDVIENvuXVzxQwaKIpTDmTRWydgYHzUwgidnsCTvEBRlKhA1tS9w/e87uVSek2nIbS8ovPz9yUzrEA26dG/2pXzP8zdHHzvR4l6DaKEp0wLHbKSWKKn7pAVUUy+RLSSKr/FIAB9ZktAYyZ0cFENsbdkhV5zXBBS58CCarTJnZTONRrzIBkUPkbaaebPy5Vc+v0Mmcwebwz/Z5foT084klSGVmLTN8JIaIXUag78QTq3ZdSgYMrwJbhB539uLeC1grDolJmHmO7w2DDfiG6OMigTXgsNf0s79bvqb0aIc6McFpq5qPLvPZGnbQ0f4OqBTQs2p0IZbSBhBcW67aclwOgVyge5zdrSWMw/PxPagQlV+2tzH6JQeKS3d+VY/h5rvLp2i/MEmNCA60Um3cMqbjOWgZk6FBuU4/k00i15/jU+EcuA7AY8RP6ja2r02Q2c8p4J3xGMfSadcJ152L5H/cGlVFyFyLbQuRb0nZHYPVam8gcJ6WkW9PYhh1LgcA3nCh7mI2mRwKYJlUk4DfkXxzwy8ndykBXpIwiqACVlyTngHL2S0oitZ8DiaJ+R5zqYeXfIG2wNQiX5F3NpcWaQZknamA69qCkA3TKb/8OgpaNDZ17y9P+MI7fTuCZAip/qu5LX6SMtc9iLrzm6upUxMOrqNPO4e/gZ2rKcaolaHbODrFLCKE0ckBet0HkUH18X3E3gGX5Se/cy7UA4FTgwMF1Tbp7FT4T++oJ1NViG+JKkig3dg4v3iGKywIz94+menbueYu5n/FuirpV3u7ZYlIjCGpfKvBjqwAaJwguQSPJOBRasRw/8xr36q8N1NTKp1aHDWtnEcUA3Jbq1a2OMJxdPR2K1656lCLWQIoJ6HkzBN3QohJB3wsfokdNJFMRcpTwwDXu7WGVogfSoUhJSQngGuJ5jdo3djPGuADJ+i4RVhSMpJDk2llXFHNN9WoBk9RIkYHrLP8OlPZnpfYyI0N1YrfgSIRWoGyCVX9qK0Yvr4GgAbc7vwlQQAZHrW4cJJAdTp2e7Kt14p"
          },
          "url": "https://276036-01-pub.s3.amazonaws.com/"
        }
      };

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      const raw = JSON.stringify({
        "object_name": "foo.aac",
        "secret": "gA2jj/dYrpI6ZXiGjFmZ9MSX1lZ544a8"
      });

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("https://genheroes.accenture.com/api/upload", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
        /*uploadFile(blob, response.presignedUrl).then((result) => {
          $.post({
            url: 'https://adobeioruntime.net/api/v1/web/18501-631graycheetah/default/audioAction',
            cache: false,
            data: JSON.stringify({ 'presignedUrl': response.presignedUrl }),
            headers: {
              'Content-Type': 'application/json',
              'X-OW-EXTRA-LOGGING': 'on'
            }
          }, function() {
            location.href = '/thankyou';
          });
        });*/
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
