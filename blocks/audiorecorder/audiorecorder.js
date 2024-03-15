/*
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
}
