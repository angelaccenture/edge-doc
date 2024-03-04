import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    row.firstElementChild.innerHTML;
    console.log(row.firstElementChild);
    if (row.firstElementChild) button.className="first";
    else button.className="second";
    console.log("test new 2");

    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {

      if (row.firstElementChild) div.className="first";
      else div.className="second";
      //if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      //else div.className = 'cards-card-body';
    });
    main.append(button);
  });
  main.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(main);
}


/*<button type="button" class="VAR" title="VAR">VAR</button>*/
