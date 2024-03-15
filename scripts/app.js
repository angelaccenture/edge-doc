let rec;
let gumStream;
let recordingsList;

function appInit() {
  URL = window.URL || window.webkitURL;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioContextb; //audio context to help us record

  const recordButton = document.getElementById('recordButton');
  const stopButton = document.getElementById('stopButton');
  const pauseButton = document.getElementById('pauseButton');

  recordButton.addEventListener('click', startRecording);
  stopButton.addEventListener('click', stopRecording);
  pauseButton.addEventListener('click', pauseRecording);
}

function startRecording() {

  const constraints = {
    audio: true,
    video: false
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
      console.log('getUserMedia() success, stream created, initializing Recorder.js ...');

      let audioContextb = new AudioContext();

      //update the format
      document.getElementById('formats').innerHTML = 'Format: 1 channel pcm @ ' + audioContextb.sampleRate / 1000 + 'kHz';

      /*  assign to gumStream for later use  */
      let gumStream = stream;

      /* use the stream */
      let input = audioContextb.createMediaStreamSource(stream);

      /*
        Create the Recorder object and configure to record mono sound (1 channel)
        Recording 2 channels  will double the file size
      */
      let rec = new Recorder(input, { numChannels: 1 });
      rec.record();
    }).catch(function (err) {
      console.error('Error during recording: ', err);
    });
}

function pauseRecording() {
  if (rec.recording) {
    rec.stop();
    pauseButton.innerHTML = 'Resume';
  } else {
    rec.record();
    pauseButton.innerHTML = 'Pause';

  }
}

function stopRecording() {
  console.log('stopButton clicked');

  //disable the stop button, enable the record too allow for new recordings
  /*
  stopButton.disabled = true;
  recordButton.disabled = false;
  pauseButton.disabled = true;*/

  //reset button just in case the recording is stopped while paused
  pauseButton.innerHTML = 'Pause';

  //tell the recorder to stop the recording
  rec.stop();

  //stop microphone access
  gumStream.getAudioTracks()[0].stop();

  //create the wav blob and pass it on to createDownloadLink
  rec.exportWAV(createDownloadLink);
}

function createDownloadLink(blob) {

  const url = URL.createObjectURL(blob);
  const au = document.createElement('audio');
  const li = document.createElement('li');
  const link = document.createElement('a');

  //name of .wav file to use during upload and download (without extendion)
  const filename = new Date().toISOString();

  //add controls to the <audio> element
  au.controls = true;
  au.src = url;

  //save to disk link
  link.href = url;
  link.download = filename + '.wav'; //download forces the browser to donwload the file using the  filename
  link.innerHTML = 'Save to disk';

  //add the new audio element to li
  li.appendChild(au);

  //add the filename to the li
  li.appendChild(document.createTextNode(filename + '.wav '));

  //add the save to disk link to li
  li.appendChild(link);

  //upload link
  const upload = document.createElement('a');
  upload.href = '#';
  upload.innerHTML = 'Upload';
  upload.addEventListener('click', function (event) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
      if (this.readyState === 4) {
        console.log('Server returned: ', e.target.responseText);
      }
    };
    const fd = new FormData();
    fd.append('audio_data', blob, filename);
    xhr.open('POST', 'upload.php', true);
    xhr.send(fd);
  });
  li.appendChild(document.createTextNode(' '));//add a space in between
  li.appendChild(upload);//add the upload link to li

  //add the li element to the ol
  recordingsList.appendChild(li);
}
