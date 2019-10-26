function orgFloor(value, base) {
  return (Math.floor(value * base) / base) + 0.1;
}

function mainVizOpacity() {
  var contentHeight = document.getElementById('content').offsetHeight;
  var raw = window.pageYOffset / (contentHeight - window.innerHeight);
  var calcTransparent = orgFloor(raw, 10);
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