function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}
var creating = browser.tabs.create({
  url:"https://www.youtube.com"
});
creating.then(onCreated);

function moveRainbow() {
  document.getElementById("bg").style.backgroundSize = "100% 50%";
}
function moveNyan() {
  document.getElementById("cat").style.top = "43%";
}

function moveBoth() {
  moveRainbow();
  moveNyan();
}

function smallMoveRainbow() {
  var val = document.getElementById("bg").style.backgroundSize;
  val = Number(val.slice(5,-1));
  if (val < 100) {
    val ++;
    document.getElementById("bg").style.backgroundSize = "100% " + val.toString() +  "%";;
  } else {
    clearInterval();
  }
}

function nyanFrames() {
  var urls = [
      "url(images/0.png)",
      "url(images/1.png)",
      "url(images/2.png)",
      "url(images/3.png)",
      "url(images/4.png)",
      "url(images/5.png)",
  ];
  var cat_vis = document.getElementById("cat");
  var imgStr =cat_vis.style.backgroundImage;
  imgStr = imgStr.slice(12,-6);
  imgNum = Number(imgStr);
  if (imgNum == 5) {
      imgNum = 0;
  } else {
      imgNum ++;
  }
  cat_vis.style.backgroundImage = urls[imgNum];
}

function smallMoveNyan() {
  var val = document.getElementById("cat").style.top;
  val = Number(val.slice(0,-1));
  var pic = document.getElementById("cat").backgroundImage;
  if (val > -17) {
    val -= 1;
    document.getElementById("cat").style.top = val.toString() +  "%";
    nyanFrames();
  } else {
  clearInterval();
  }
}
  
function smallMoveBoth() {
  smallMoveRainbow();
  smallMoveNyan();
}

setInterval(smallMoveBoth, 50);

