
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);



/*
var elements = document.getElementsByClassName("blueendone");

var myFunction = function() {
  console.log("start progress bar");
    var timeleft = 100;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
      }
      document.getElementById("progressBar").value = 10 - timeleft;
      timeleft -= 1;
    }, 1000);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}*/

export default function decorate(block) {
    const main = document.createElement('div');
    [...block.children].forEach((row) => {
      const button = document.createElement('progress');
      button.setAttribute('value','0');
      button.setAttribute('max','10');
      button.setAttribute('id','progressBar');
      main.append(button);
    });
    block.textContent = '';
    block.append(main);
  }
/*<progress value="0" max="10" id="progressBar"></progress>*/