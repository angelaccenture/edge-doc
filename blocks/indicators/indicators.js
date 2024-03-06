import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ol = document.createElement('ol');
  ol.className = 'carousel-slide-indicators';
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className="carousel-slide-indicator";
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ol.append(li);
  });
  block.textContent = '';
  block.append(ol);
}
