import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const li = document.createElement('button');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
     // if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      div.className = 'var';
    });
    main.append(li);
  });
  main.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(main);
}


/*<button type="button" class="VAR" title="VAR">VAR</button>*/
