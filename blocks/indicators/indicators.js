import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
 const divclass = getElmentsByClassName("indicators");
 console.log(divclass);
 
  const ol = document.createElement('ol');
   ol.className = 'carousel-slide-indicators';
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className="carousel-slide-indicator";
    const button = document.createElement('button');
    button.setAttribute('type','button');
    li.append(button);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      //removeChild(div);
    });
    ol.append(li);
  });
  block.textContent = '';
  block.append(ol);
}
