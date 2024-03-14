export default function decorate(block) {
    console.log("Video Player");
    const video = document.createElement('video');
    video.setAttribute("width","320");
    video.setAttribute("height","240");
    video.setAttribute("controls","");
    [...block.children].forEach((row) => {
      const li = document.createElement('source');
      li.setAttribute("src","movie.mp4");
      li.setAttribute("type","video/mp4");
      while (row.firstElementChild) li.append(row.firstElementChild);
      [...li.children].forEach((div) => {
        //removediv.removeChild(div);
      });
      video.append(li);
    });
    block.textContent = '';
    block.append(video);
  }
  /*<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>*/
