//$('<script src="/scripts/recorder.js"></' + 'script>').appendTo(document.body);
//$('<script src="/scripts/app.js"></' + 'script>').appendTo(document.body);

export default function decorate(block) {
  const main = document.createElement('div');
  main.setAttribute("id","controls");
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.setAttribute('id', row.firstElementChild.innerHTML);
    row.firstElementChild.remove();
    const pauseB = document.getElementById('pauseButton');
  /*  if (pauseB != null) {
      pauseB.setAttribute("disabled","");
    }
    const stopB = document.getElementById('stopButton');
    if (stopB != null) {
      stopB.setAttribute("disabled","");
    }*/
  
    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {
      const removediv = div.parentNode;
      removediv.insertBefore(div.firstChild, div);
      removediv.removeChild(div);
   });
    button.appeand("<test></test>")
   main.append(button);
  });
  block.textContent = '';
  block.append(main);
  recorderInit();
  appInit();
}
 /*HTML*
 
 <div id="controls">
  	 <button id="recordButton">Record</button>
  	 <button id="pauseButton" disabled>Pause</button>
  	 <button id="stopButton" disabled>Stop</button>
    </div>
    <div id="formats">Format: start recording to see sample rate</div>
  	<p><strong>Recordings:</strong></p>
  	<ol id="recordingsList"></ol>
  */
