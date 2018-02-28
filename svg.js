
var toggle = document.getElementById("toggle_button");
var clear = document.getElementById("clear_button");
var toggle_status = true;
var prevX;
var prevY;
var started = false;

var shape_maker = function(e) {
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", "20");
    c1.setAttribute("fill", "yellow");
    c1.setAttribute("stroke", "yellow");
    if (!started){
      started = true;
    }
    else {
      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", prevX);
      line.setAttribute("y1", prevY);
      line.setAttribute("x2", e.offsetX);
      line.setAttribute("y2", e.offsetY);
    }
    prevX = e.offsetX;
    prevY = e.offsetY;
}

var clear_canvas = function(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  started = false;
}

var toggler = function(e) {
  toggle_status = !toggle_status;
}

clear.addEventListener("click", clear_canvas);
toggle.addEventListener("click", toggler);
