function randomColor() {
  var charset;
  var color;
  var i;

  charset = "0123456789ABCDEF";
  color = "#";
  i = 0;

  while (i < 6) {
    color += charset[Math.floor(Math.random() * 16)];
    i++;
  }
  return color;
}
function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}
