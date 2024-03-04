import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  console.log("test 1");
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.className="first";
    
    if (row.firstElementChild);
    else innerHTML;

    console.log(row.firstElementChild);

    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {
      
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';

    });
    main.append(button);
  });
  block.textContent = '';
  block.append(main);
}


/*<button type="button" class="VAR" title="VAR">VAR</button>*/
