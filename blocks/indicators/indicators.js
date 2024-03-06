import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ol = document.createElement('ol');
  ol.className = 'carousel-slide-indicators';
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className="carousel-slide-indicator";
    const button = document.createElement('button');
    li.append(button);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      //const removediv = div.parentNode;
      //removediv.insertBefore(div.firstChild, div);
      //removediv.removeChild(div);
    });
    ol.append(li);
  });
  block.textContent = '';
  block.append(ol);
}