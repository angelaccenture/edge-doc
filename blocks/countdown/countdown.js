var elements = document.getElementsByClassName("recordstory");
var recorder = document.getElementsByClassName("record-wrapper").setAttribute('id','startrec');

var myFunction = function() {
    var timeleft = 3;
    var downloadTimer = setInterval(function(){
    
   
 if(timeleft <= 0){
    clearInterval(downloadTimer);
    //document.getElementById("countdown").innerHTML = "Recorder";
    console.log(recorder);
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

export default function decorate(block) {
    const main = document.createElement('div');
    [...block.children].forEach((row) => {
      const button = document.createElement('div');
      button.setAttribute('id','countdown');
      main.append(button);
    });
    block.textContent = '';
    block.append(main);
  }
