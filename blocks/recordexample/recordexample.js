import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    main.append(li);
  });
  block.append(main);
}
