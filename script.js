const video = document.getElementById("video");
const play = document.getElementById("play");
const stopEvent = document.getElementById("stop");
const progress = document.getElementById("progress");
const timeStamp = document.getElementById("timestamp");

//Play and Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Update Play icon
function updatePlayIcon() {
  return true;
}

//Updates progress
function updateProgress() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//Set video time = progress
function setVideoProgress() {
  return true;
}

//Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event Lisenter
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stopEvent.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
