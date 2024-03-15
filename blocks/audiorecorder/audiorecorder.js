/*
 * Audio Recorder Block
 * Record audio from the end user
 */
export default async function decorate(block) {
  block.innerHtml('<input type="file" accept="audio/*" capture id="recorder" />');
}
