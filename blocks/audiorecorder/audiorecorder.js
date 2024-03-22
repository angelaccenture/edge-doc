async function uploadFile(file, presignedUrl, headers) {
  try {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      headers: headers,
      body: file
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
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      const data = {
        'secret': 'gA2jj/dYrpI6ZXiGjFmZ9MSX1lZ544a8',
        'object_name': 'recording.m4a'
      };

      $.ajax({
        'url': 'https://genheroes.accenture.com/api/upload?object_name=' + data.object_name + '&secret=' + encodeURIComponent(data.secret),
        'headers': headers,
        success: function(response) {
          const sampleResponse = {
            "message": "success!",
            "signed-url": {
              "fields": {
                "AWSAccessKeyId": "ASIA3FLDZRVKZUXO6QWU",
                "key": "recording.m4a",
                "policy": "eyJleHBpcmF0aW9uIjogIjIwMjQtMDMtMjJUMDI6MzM6NDRaIiwgImNvbmRpdGlvbnMiOiBbeyJidWNrZXQiOiAiMjc2MDM2LTAxLXB1YiJ9LCB7ImtleSI6ICJyZWNvcmRpbmcubTRhIn0sIHsieC1hbXotc2VjdXJpdHktdG9rZW4iOiAiSVFvSmIzSnBaMmx1WDJWakVDRWFDWFZ6TFdWaGMzUXRNU0pITUVVQ0lDeUYxdVFVMmpYVy9xbjhPYjRKL1h2M09GSXNYNFdhUkJTMWpSSXY0KzduQWlFQXRZODlPaStMRzhkSFFUVFlBRTJjdTM3eFNwUkQzNzQ2R0dnVXAvMGc1OXdxdkFVSU9oQUFHZ3czTmpjek9UYzRNalU0TnpjaUREdmo2WTJwMy80blk4U2h4Q3FaQmJEN2lQb1hRZmU5eXFGeFFTZmRocjRnNWp4enplOFVFOUZMUENNVGt6RnJBUUtrY1MzSzlsQ1d1ZEpTOWF2VkcxY3BlKzRBVTlwdUlLZ0lRaG9RbHllRUJEblNjT292TWtRT0JjN1BROThNcGQ0RU01NjFWR1lHdmp2R2doc1l2aW4wQUJPWWdtM0lqYTg0RWlEL1pTUFFzTnVjQXE2NUZqNklibHM5NXBESU5RR2I4NmV4MFFJbkw2aHpYcW9Cc0dqalBHS2J0Ni9jQlZkbDBLcURXWEw1UGpybWR0N1lQWFJpMzI4MXNoNFVxV0ZvQ2dJSklXK3lFTWZPbStIbjVhQmt3cElrT0hkL3IvOFh6SUp0M052Z0h3NnBIaDlSeGZrV2kreTVVVm1aK1MrRlRCOGtyTDh0Q056eFg4T2pvT1JaNkZJZGJnQ2lCQUxjMzl0OU5CODR5YkhJZmM4cmtaL0JpMDd6V1RuZUJCcEt2aHpZaXZaNml1aTYxbUtyZEZaK3ZTeTlOeU54alVHT2FXNCtnZFRKc284c2RnQ2IzVzNJZ1phTU42N1B6TWpuRERBV3lrcEhHWmRvM1NkNUFXbit2UjJGVzR5QXh0MGlFbFhyYkkyMWR4cDMwRE9kMGZ4VE53UTFtYWEyeGo0WXBuNUtZRXBxSjZaRk1Xekt2bzFsM01EOTVQL0FGbTVCaVJYODE4cUgrWE9BeDYxUDdlM2lHWTQvM2sxRjJTK0VwdXRqZ3F4M1Z0dktRT0pTTFJsVm5DY1FOZ0V1cGV2M0MyanY5MFVCTW9vU2FVSVZQYStoUzJWVnNhNFNycy9EU3FDcEk5OUxZc2t5elpycXlyVXZBbnZtMVJVeklKbjNQbGthR0l5MXdXdHRyWHVXVnRFNUZVRkplR1hNOGxtaUpjVFNSR2hsQXJFL0sxU3JpTWs5dXhkdE8ybHQrTnBrRkRTQVJLZU5rL0lkOUVoV1gwOEtzTERvcEV1bHhBMk10RlJvU1drU1dweVhWbU80WjlWVHJkcUdmUzhabklnMzdmaFVPZUx2eDVoYVVhU0lUdnVDYTJQcHhlaW9idStBeHcyK3IwQVpueFc5Wk1XWVZKUlJBZkRkWlV2NTluT2kwcExyZFhDaXBncld6ejVNalpNWU02ZTFSOGhCR1g5blV4aGdqbFRvTVArdzg2OEdPckVCRlBjZmtDRWRkVnBKL0xpbUZtNDJRNDlGbmpCZ0hQTjdqb3V6RUkvbG5uVmszMzNkcGl4STgwcEJNSEttdlJRbllCdDh5eFZqd1FmZldvZVV5UkpZOUJ0UE5pQ2kxa2NkZ29DdExRM2lIdHNLbm5MNGRpSGlzWVNFZ3BmZ2s1Q0hSZjVLUC9hOGxrVldDUW8vaUhDRU83V3ZieTMwYlZpS01MMEJzRkNISDBmYTVEUW42b3FRVmhOQnRxL0FKckRjNEh2UzEzSUx2VXJTQzVGbWhZUkN0czdlU3NQRzUyNEQxa0hRQXBlNWJHZUwifV19",
                "signature": "OylvBSzamzxYYns9D8xZSNZDACA=",
                "x-amz-security-token": "IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJHMEUCICyF1uQU2jXW/qn8Ob4J/Xv3OFIsX4WaRBS1jRIv4+7nAiEAtY89Oi+LG8dHQTTYAE2cu37xSpRD3746GGgUp/0g59wqvAUIOhAAGgw3NjczOTc4MjU4NzciDDvj6Y2p3/4nY8ShxCqZBbD7iPoXQfe9yqFxQSfdhr4g5jxzze8UE9FLPCMTkzFrAQKkcS3K9lCWudJS9avVG1cpe+4AU9puIKgIQhoQlyeEBDnScOovMkQOBc7PQ98Mpd4EM561VGYGvjvGghsYvin0ABOYgm3Ija84EiD/ZSPQsNucAq65Fj6Ibls95pDINQGb86ex0QInL6hzXqoBsGjjPGKbt6/cBVdl0KqDWXL5Pjrmdt7YPXRi3281sh4UqWFoCgIJIW+yEMfOm+Hn5aBkwpIkOHd/r/8XzIJt3NvgHw6pHh9RxfkWi+y5UVmZ+S+FTB8krL8tCNzxX8OjoORZ6FIdbgCiBALc39t9NB84ybHIfc8rkZ/Bi07zWTneBBpKvhzYivZ6iui61mKrdFZ+vSy9NyNxjUGOaW4+gdTJso8sdgCb3W3IgZaMN67PzMjnDDAWykpHGZdo3Sd5AWn+vR2FW4yAxt0iElXrbI21dxp30DOd0fxTNwQ1maa2xj4Ypn5KYEpqJ6ZFMWzKvo1l3MD95P/AFm5BiRX818qH+XOAx61P7e3iGY4/3k1F2S+Eputjgqx3VtvKQOJSLRlVnCcQNgEupev3C2jv90UBMooSaUIVPa+hS2VVsa4Srs/DSqCpI99LYskyzZrqyrUvAnvm1RUzIJn3PlkaGIy1wWttrXuWVtE5FUFJeGXM8lmiJcTSRGhlArE/K1SriMk9uxdtO2lt+NpkFDSARKeNk/Id9EhWX08KsLDopEulxA2MtFRoSWkSWpyXVmO4Z9VTrdqGfS8ZnIg37fhUOeLvx5haUaSITvuCa2Ppxeiobu+Axw2+r0AZnxW9ZMWYVJRRAfDdZUv59nOi0pLrdXCipgrWzz5MjZMYM6e1R8hBGX9nUxhgjlToMP+w868GOrEBFPcfkCEddVpJ/LimFm42Q49FnjBgHPN7jouzEI/lnnVk333dpixI80pBMHKmvRQnYBt8yxVjwQffWoeUyRJY9BtPNiCi1kcdgoCtLQ3iHtsKnnL4diHisYSEgpfgk5CHRf5KP/a8lkVWCQo/iHCEO7Wvby30bViKML0BsFCHH0fa5DQn6oqQVhNBtq/AJrDc4HvS13ILvUrSC5FmhYRCts7eSsPG524D1kHQApe5bGeL"
              },
              "url": "https://276036-01-pub.s3.amazonaws.com/"
            }
          };

          //const url = sampleResponse['signed-url'].url + sampleResponse['signed-url'].fields.key + '?x-amz-security-token=' + encodeURIComponent(sampleResponse['signed-url'].fields['x-amz-security-token']) + '&policy=' + sampleResponse['signed-url'].fields.policy + '&signature=' + encodeURIComponent(sampleResponse['signed-url'].fields.signature) + '&AWSAccessKeyId=' + sampleResponse['signed-url'].fields.AWSAccessKeyId;
          //const url = sampleResponse['signed-url']['url'] + sampleResponse['signed-url']['fields']['key'];
          const urlSearchParams = new URLSearchParams(response['signed-url'].fields);
          const url = response['signed-url'].url + response['signed-url'].fields.key + "?" + urlSearchParams.toString();

          $.ajax({
            'url': url,
            'method': 'PUT',
            'body': blob,
            success: function(success) {
              debugger;
            },
            error: function(error) {
              debugger;
            }
          });
        },
        error: function(error) {
          debugger;
        }
      });

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
