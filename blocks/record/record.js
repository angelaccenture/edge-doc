$('<script src="/scripts/recorder.js"></' + 'script>').appendTo(document.body);
$('<script src="/scripts/app.js"></' + 'script>').appendTo(document.body);

export default function decorate(block) {
  const main = document.createElement('div');
  main.setAttribute("id","controls");
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.setAttribute('id', row.firstElementChild.innerHTML);
    button.setAttribute('disabled',"");
    row.firstElementChild.remove();
    const recordB = document.getElementById('recordButton');
    if (recordB != null) {
      recordB.setAttribute("disabled","false");
    }
  
    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {
      const removediv = div.parentNode;
      removediv.insertBefore(div.firstChild, div);
      removediv.removeChild(div);
   });
   main.append(button);
  });
  block.textContent = '';
  block.append(main);
  recorderInit();
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
