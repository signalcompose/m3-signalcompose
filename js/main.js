function orgFloor(value, base) {
  return Math.floor(value * base) / base;
}

function mainVizOpacity() {
  var contentHeight = document.getElementById('content').offsetHeight;
  var raw = window.pageYOffset / (contentHeight - window.innerHeight);
  var calcTransparent = orgFloor(raw, 10) > 0.1 ? orgFloor(raw, 10) - 0.2 : 0;
  document.getElementById('mv').style.opacity = 1 - calcTransparent;
  console.log('run');
}

window.addEventListener('scroll', _.throttle(mainVizOpacity, 200));

mainVizOpacity();

var rellax = new Rellax('.rellax', {
  speed: 2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});