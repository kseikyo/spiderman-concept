function detectMobile() {
  const isUserAgentMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile/i.test(navigator.userAgent);
  
  // If device is mobile, don't even waste user's mobile data loading video
  if (!isUserAgentMobile) {

      // Create video element
      const video = document.createElement("video");

      // Append data to video
      video.src = "https://github.com/nyousefali/youtube/blob/master/spiderman/video/spiderman2.mp4?raw=true"
      video.autoplay = true;
      video.muted = true;
      video.loop = true;

      // Appending video to bg__video section
      document.getElementsByClassName("bg__video")[0].appendChild(video);
  }
}

window.onload = detectMobile;