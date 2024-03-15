/*
 * Audio Recorder Block
 * Record audio from the end user
 */
export default async function decorate(block) {
  const input = document.createElement('input');
  block.appendChild(input);
}
