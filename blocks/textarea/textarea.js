import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const textarea = document.createElement('textarea');
 
  block.append(textarea);
}
