
 function neko_1(0){
   if (num == 0) {
   var video;
   video = document.querySelector("neko1");
  }

  else(num == 1)
  {

  }

}

function play(){
  var video;
  video = document.querySelector("video");
  video.play();
}

function pause(){
  var video;
  video = document.querySelector("video");
  video.pause();
}

function skip10sec(){
  var video;
  video = document.querySelector("video");
  video.currentTime = video.currentTime + 10;
}

function back10sec(){
  var video;
  video = document.querySelector("video");
  video.currentTime = video.currentTime - 10;
}

function stop(){
  var video;
  video = document.querySelector("video");
  video.currentTime = video.currentTime - video.currentTime;
  video.pause();
}

function mute(){
  var avideo;
  video = document.querySelector("video");
  audio.muted = true;
}

function volumeDown(){
  var video, newVolume;
  video = document.querySelector("video");
  newVolume = video.volume - 0.1
  video.volume = newVolume
  //video.volume() = Math.max(0, video.volume - 0.1) ;
}

function volumeUp(){
  var videoo, newVolume;
  video = document.querySelector("video");
  newVolume = video.volume + 0.1
  video.volume = newVolume
}

var playButton = document.querySelector("[data-role=play]");
var pauseButton = document.querySelector("[data-role=pause]");
var skip10secButton = document.querySelector("[data-role=skip10sec]");
//idを使うなら、中身が#skip10secになる
var back10secButton = document.querySelector("[data-role=back10sec]");
var stopButton = document.querySelector("[data-role=stop]");
var muteButton = document.querySelector("[data-role=mute]");
var volumeDownButton = document.querySelector("[data-role=volumeDown]");
var volumeUpButton = document.querySelector("[data-role=volumeUp]");

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
skip10secButton.addEventListener("click", skip10sec);
back10secButton.addEventListener("click", back10sec);
stopButton.addEventListener("click", stop);
muteButton.addEventListener("click", mute);
volumeDownButton.addEventListener("click", volumeDown);
volumeUpButton.addEventListener("click", volumeUp);
