var svg = document.getElementById("svg");
var clear_button = document.getElementById("clear_button");
var prevX;
var prevY;
var started = false;

var draw = function(e) {
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", "20");
    c1.setAttribute("fill", "yellow");
    c1.setAttribute("stroke", "yellow");
    svg.appendChild(c1);
    if (!started){
      started = true;
    }
    else {
      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", prevX);
      line.setAttribute("y1", prevY);
      line.setAttribute("x2", e.offsetX);
      line.setAttribute("y2", e.offsetY);
      line.setAttribute("stroke", "#000000");
      svg.appendChild(line);
    }
    prevX = e.offsetX;
    prevY = e.offsetY;
}

var clear = function(e) {
  svg.innerHTML = "";
  started = false;
}

clear_button.addEventListener("click", clear);
svg.addEventListener("click", draw);
