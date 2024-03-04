import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  console.log("test 6");
  const main = document.createElement('div');
  [...block.children].forEach((row) => {
    const button = document.createElement('button');
    button.setAttribute('type','button');
    button.className="first";
    console.log(row.firstElementChild);

    while (row.firstElementChild) button.append(row.firstElementChild);
    [...button.children].forEach((div) => {
      //     div.remove();
      //After I pull class name, then remove these
    });
    main.append(button);
  });
  block.textContent = '';
  block.append(main);
}


/*<button type="button" class="VAR">VAR</button>*/
