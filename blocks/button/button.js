import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  console.log("test 4");
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.setAttribute('type','button');
    button.className=row.firstElementChild.contents();
    row.firstElementChild.remove();
   
    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {
      //div.remove();
      $("div").replaceWith(function() { return $(this).contents(); });
    });
    main.append(button);
  });
  block.textContent = '';
  block.append(main);
}


/*<button type="button" class="VAR">VAR</button>*/
