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
