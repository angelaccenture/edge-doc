import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
 const divclass = document.getElementsByClassName("indicators");
 divclass[0].className="carousel indicators block";
 console.log(divclass[0]);
 
  const ol = document.createElement('ol');
   ol.className = 'carousel-slide-indicators';
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className="carousel-slide-indicator";
    const firstli = document.getElementsByClassName('carousel-slide-indicator');
    const button = document.createElement('button');
    button.setAttribute('type','button');
    li.append(button);
     while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      console.log(firstli[0]);   
      //removeChild(div);
    });
    ol.append(li);
  });
  block.textContent = '';
  block.append(ol);
}
