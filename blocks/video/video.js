export default function decorate(block) {
   const video = document.createElement('video');
    video.setAttribute("id","video-player");
    video.setAttribute("width","640");
    video.setAttribute("height","480");
    video.setAttribute("controls","");
    video.setAttribute("autoplay","");
    [...block.children].forEach((row) => {
      const li = document.createElement('source');
      li.setAttribute("src","/blocks/video/seed-225721745_scene-0_profile-colorful_strength-100.mp4");
      li.setAttribute("type","video/mp4");
    //   li.setAttribute("src","https://10.89.130.229/test/stream_0/stream.m3u8");
    //  li.setAttribute("type","video/x-mpegURL");
      while (row.firstElementChild) li.append(row.firstElementChild);
      [...li.children].forEach((div) => {
        //removediv.removeChild(div);
      });
      video.append(li);
    });
    block.textContent = '';
    block.append(video);
  }

    var video = document.getElementById("video-player");
    console.log(video);
/*New HTML*

<video controls autoplay>
<source src="
https://10.89.130.229/test/stream_0/stream.m3u8"
type="application/x-mpegURL">
</video>
*/
  //const video = document.getElementById("video-player"); 

  /*  
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
*/ 
  /*<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>*/
