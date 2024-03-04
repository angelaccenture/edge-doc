import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  console.log("test 3");
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.setAttribute('type','button');
    button.className="first";
    $("test").insertAfter(button);
    
    //button.insertAfter.row.firstElementChild.innerHTML;

    console.log(row.firstElementChild.innerHTML);

    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {
      
      if (div.children.length === 1) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';

    });
    main.append(button);
  });
  block.textContent = '';
  block.append(main);
}


/*<button type="button" class="VAR">VAR</button>*/
