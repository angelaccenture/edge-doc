$('<script src="recorder.js"></' + 'script>').appendTo(document.body);
$('<script src="app.js"></' + 'script>').appendTo(document.body);

export default function decorate(block) {
    const record = document.createElement('div');
    record.setAttribute("id","controls");
     [...block.children].forEach((row) => {
       const li = document.createElement('button');
       li.setAttribute("id","recordButton");
       while (row.firstElementChild) li.append(row.firstElementChild);
       [...li.children].forEach((div) => {
         //removediv.removeChild(div);
       });
       record.append(li);
     });
     block.textContent = '';
     block.append(record);
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