/*
 * Audio Recorder Block
 * Record audio from the end user
 */
export default async function decorate(block) {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'audio/*');
  input.setAttribute('capture', '');
  input.setAttribute('id', 'recorder');
  block.appendChild(input);
}
