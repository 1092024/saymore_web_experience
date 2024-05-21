let happyTxt = document.getElementById("happyTxt");
let angryTxt = document.getElementById("angryTxt");
let sadTxt = document.getElementById("sadTxt");
let scaredTxt = document.getElementById("scaredTxt");
let allBG = document.getElementById("allBG");
let videoPlayer = document.getElementById("videoPlayer");
let videoBG = document.getElementById("videoBG");
let videoBlackBG = document.getElementById("videoBlackBG");

happyTxt.addEventListener("click", () => {
  allBG.style.display = "none";
  videoBG.style.display = "block";
  playRandomHappyVideo();
});

angryTxt.addEventListener("click", () => {
  allBG.style.display = "none";
  videoBG.style.display = "block";
  playRandomAngryVideo();
});

sadTxt.addEventListener("click", () => {
  allBG.style.display = "none";
  videoBG.style.display = "block";
  playRandomSadVideo();
});

scaredTxt.addEventListener("click", () => {
  allBG.style.display = "none";
  videoBG.style.display = "block";
  playRandomScaredVideo();
});

videoPlayer.addEventListener("ended", function () {
  videoBG.style.display = "none";
  videoBlackBG.style.display = "flex";
});

// 重新選擇功能
const selectAgain = videoBlackBG.querySelector("div:nth-child(1)");
selectAgain.addEventListener("click", function () {
  window.location.reload();
  // 你的重新選擇邏輯，例如顯示選擇介面
});

// 回首頁功能
const goHome = videoBlackBG.querySelector("div:nth-child(2)");
goHome.addEventListener("click", function () {
  window.location.href = "https://saymore-web.netlify.app/"; // 導向首頁
});

function playVideo(videoSrc) {
  videoPlayer.style.display = "block";
  videoPlayer.src = videoSrc;
  videoPlayer.play();
}

function playRandomHappyVideo() {
  let happyVideos = ["./video/happy0.mp4", "./video/happy1.mp4"];
  let randomVideo = happyVideos[Math.floor(Math.random() * happyVideos.length)];
  playVideo(randomVideo);
}

function playRandomAngryVideo() {
  let angryVideos = ["./video/angry0.mp4", "./video/angry1.mp4"];
  let randomVideo = angryVideos[Math.floor(Math.random() * angryVideos.length)];
  playVideo(randomVideo);
}

function playRandomSadVideo() {
  let sadVideos = ["./video/sad0.mp4", "./video/sad1.mp4"];
  let randomVideo = sadVideos[Math.floor(Math.random() * sadVideos.length)];
  playVideo(randomVideo);
}

function playRandomScaredVideo() {
  let scaredVideos = ["./video/fear0.mp4", "./video/fear1.mp4"];
  let randomVideo =
    scaredVideos[Math.floor(Math.random() * scaredVideos.length)];
  playVideo(randomVideo);
}
