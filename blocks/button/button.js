import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  console.log("test 3");
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.setAttribute('type','button');
    button.className="first";
    console.log(row);
    console.log(row.firstElementChild.innerHTML);

    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {
      console.log(firstElementChild);
      //div.remove();
    });
    main.append(button);
  });
  block.textContent = '';
  block.append(main);
}


/*<button type="button" class="VAR">VAR</button>*/
