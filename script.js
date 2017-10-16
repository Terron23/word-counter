var max = 300;

function textCounter(x, y) {
  if(x.value.length > max) {
    x.value = x.value.substring(0, max);
  }
  else {
    y.value = max - x.value.length;
  }
}