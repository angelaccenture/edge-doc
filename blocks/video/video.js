export default function decorate(block) {
    console.log("Video Player");
    const video = document.createElement('video');
    video.setAttribute("id","video-player");
    video.setAttribute("width","640");
    video.setAttribute("height","480");
    video.setAttribute("controls","");
    [...block.children].forEach((row) => {
      const li = document.createElement('source');
      li.setAttribute("src","/blocks/video/seed-225721745_scene-0_profile-colorful_strength-100.mp4");
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

  const video = document.getElementById("video-player"); 
    
   // Play the video 
   video.play(); 
    
   // Pause the video 
   video.pause(); 
    
   // Set the current time of the video 
   video.currentTime = 10; 
    
   // Add an event listener for when the video ends 
   video.addEventListener("ended", function() { 
      console.log("Video ended"); 
   }); 
  /*<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>*/
