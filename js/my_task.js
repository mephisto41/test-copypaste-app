var r = 1.0;
var g = 0.0;
var b = 0.5;

drawScene = function(glContext) {
  glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);
  glContext.clearColor(r > 1 ? 2 - r : r, 
                g > 1 ? 2 - g : g, 
                b > 1 ? 2 - b : b, 
                1.0);

  r += 0.1;
  if (r > 2) {
    r -= 2;
  }

  g += 0.1;
  if (g > 2) {
    g -= 2;
  }

  b += 0.1;
  if (b > 2) {
    b -= 2;
  }
}

var can2;
var gl2;

onmessage = function (oEvent) {
  can2 = oEvent.data;
  gl2 = can2.getContext("webgl");

};

rendering = function() {
  if (gl2) {
    drawScene(gl2);
    can2.commit();
  }
  postMessage("Rendered");
}

var intervalID = setInterval(rendering, 33)
