var elements = document.getElementsByClassName("blueendone");
var myFunction = function() {
  console.log("start progress bar");
    var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

export default function decorate(block) {
  const ul = document.createElement('div');
  ul.setAttribute("id","myProgress");
  [...block.children].forEach((row) => {
    const li = document.createElement('div');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      li.setAttribute("id","myBar");
    });
    ul.append(li);
  });
  block.textContent = '';
  block.append(ul);
}
/*<div id="myProgress">
  <div id="myBar"></div>
</div>*/