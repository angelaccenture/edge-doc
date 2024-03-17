export default async function decorate(block) {
  const audioTimerm = document.createElement('label');
  audioTimerm.setAttribute('id', 'minutes');
  audioTimerm.innerText = '00';

  //const audioTimerd = document.createElement(':');

  const audioTimers = document.createElement('label');
  audioTimers.setAttribute('id', 'seconds');
  audioTimers.innerText = '00';

  block.appendChild(audioTimerm);
 // block.appendChild(audioTimerd);
  block.appendChild(audioTimers);

 // audioTimer();
}


