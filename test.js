
//表示・非表示のボタン

function neko_1(num)
{
  if (num == 0)
  {
    document.getElementById("neko_1").style.visibility="visible";
  }
  else
  {
    document.getElementById("neko_1").style.visibility="hidden";
  }
}

function neko_2(num)
{
  if (num == 2)
  {
    document.getElementById("neko_2").style.visibility="visible";
  }
  else
  {
    document.getElementById("neko_2").style.visibility="hidden";
  }
}
function neko_3(num)
{
  if (num == 4)
  {
    document.getElementById("neko_3").style.visibility="visible";
  }
  else
  {
    document.getElementById("neko_3").style.visibility="hidden";
  }
}
function neko_4(num)
{
  if (num == 6)
  {
    document.getElementById("neko_4").style.visibility="visible";
  }
  else
  {
    document.getElementById("neko_4").style.visibility="hidden";
  }
}
function dog_1(num)
{
  if (num == 8)
  {
    document.getElementById("dog_1").style.visibility="visible";
  }
  else
  {
    document.getElementById("dog_1").style.visibility="hidden";
  }
}
function dog_2(num)
{
  if (num == 10)
  {
    document.getElementById("dog_2").style.visibility="visible";
  }
  else
  {
    document.getElementById("dog_2").style.visibility="hidden";
  }
}
function dog_3(num)
{
  if (num == 12)
  {
    document.getElementById("dog_3").style.visibility="visible";
  }
  else
  {
    document.getElementById("dog_3").style.visibility="hidden";
  }
}

//neko_1の再生ボタン

 function play(){
   var video;
   video = document.querySelector("#neko_1");
   video.play();
 }

 function pause(){
   var video;
   video = document.querySelector("#neko_1");
   video.pause();
 }

 function skip10sec(){
   var video;
   video = document.querySelector("#neko_1");
   video.currentTime = video.currentTime + 10;
 }

 function back10sec(){
   var video;
   video = document.querySelector("#neko_1");
   video.currentTime = video.currentTime - 10;
 }

 function stop(){
   var video;
   video = document.querySelector("#neko_1");
   video.currentTime = video.currentTime - video.currentTime;
   video.pause();
 }

 function mute(){
   var avideo;
   video = document.querySelector("#neko_1");
   audio.muted = true;
 }

 function volumeDown(){
   var video, newVolume;
   video = document.querySelector("#neko_1");
   newVolume = video.volume - 0.1
   video.volume = newVolume
   //video.volume() = Math.max(0, video.volume - 0.1) ;
 }

 function volumeUp(){
   var videoo, newVolume;
   video = document.querySelector("#neko_1");
   newVolume = video.volume + 0.1
   video.volume = newVolume
 }

function init(){
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
}
