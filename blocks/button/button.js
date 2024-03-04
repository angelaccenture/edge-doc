import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
 const ul = document.createElement('button');

  block.append(ul);
}


/*<button type="button" class="VAR" title="VAR">VAR</button>*/
