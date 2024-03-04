import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
 const ul = document.createElement('button');
 // [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      //if (div.children.length === 1 && div.querySelector('picture')) div.className = 'buttonmain';
      //else div.className = 'cards-card-body';
      div.className = "var";
    });
    ul.append(li);
  //});
 // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(li);
}


/*<button type="button" class="VAR" title="VAR">VAR</button>*/
