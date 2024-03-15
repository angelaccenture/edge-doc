function setup() {
  const player = document.getElementById('player');

  const handleSuccess = function (stream) {
    if (window.URL) {
      player.srcObject = stream;
    } else {
      player.src = stream;
    }
  };

  const handleAudioSuccess = async function(stream) {
    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);

    await context.audioWorklet.addModule("processor.js");
    const worklet = new AudioWorkletNode(context, "worklet-processor");

    source.connect(worklet);
    worklet.connect(context.destination);
  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(handleSuccess);

  navigator.mediaDevices
    .getUserMedia({audio: true, video: false})
    .then(handleAudioSuccess);
}

/**
 * Audio Recorder Block
 * Record audio from the end user
 */
export default async function decorate(block) {
  const audio = document.createElement('audio');
  audio.setAttribute('controls', '');
  audio.setAttribute('id', 'player');

  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'audio/*');
  input.setAttribute('capture', '');
  input.setAttribute('id', 'recorder');

  block.appendChild(audio);
  block.appendChild(input);

  setup();
}
