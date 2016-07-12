//まだ何もいじってません(7/12)

console.log("start audio.js");

function play(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.play();
}

function pause(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.pause();
}

function skip10sec(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.currentTime = audio.currentTime + 10;
}

function back10sec(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.currentTime = audio.currentTime - 10;
}

function stop(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.currentTime = audio.currentTime - audio.currentTime;
  audio.pause();
}

function mute(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.muted = true;
}

function volumeDown(){
  // audio 要素を探す
  var audio, newVolume;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  newVolume = audio.volume - 0.1
  audio.volume = newVolume
  //audio.volume() = Math.max(0, audio.volume - 0.1) ;
}

function volumeUp(){
  // audio 要素を探す
  var audio, newVolume;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  newVolume = audio.volume + 0.1
  audio.volume = newVolume
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
