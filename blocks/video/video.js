export default function decorate(block) {
   const video = document.createElement('video');
    video.setAttribute("id","video");
    video.setAttribute("controls","");
   // video.setAttribute("autoplay","");
   video.setAttribute("src","blob:https://genheroes.accenture.com/5e2fbb60-b44c-49b1-9049-b022f1cbeeb1");
    [...block.children].forEach((row) => {
      const li = document.createElement('source');
    // li.setAttribute("src","/blocks/video/stream.m3u8");
     // li.setAttribute("type","application/vnd.apple.mpegurl");
      while (row.firstElementChild) li.append(row.firstElementChild);
      [...li.children].forEach((div) => {
        //removediv.removeChild(div);
      });
      video.append(li);
    });
    block.textContent = '';
    block.append(video);

    playVideo();
  }


  export async function playVideo () {
    console.log("playVideo");
    var video = document.getElementById('video');
    var videoSrc = 'https://genheroes.accenture.com/test/stream/stream.m3u8';
    if (Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(videoSrc);
          hls.attachMedia(video);
        }
    // HLS.js is not supported on platforms that do not have Media Source
    // Extensions (MSE) enabled.
    //
    // When the browser has built-in HLS support (check using `canPlayType`),
    // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
    // element through the `src` property. This is using the built-in support
    // of the plain video element, without using HLS.js.
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = videoSrc;
        }
  }
    
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
