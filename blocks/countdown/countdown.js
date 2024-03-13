var elements = document.getElementsByClassName("recordstory");

var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
    console.log("TEST Button Click");
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}




var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


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
