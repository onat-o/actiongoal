$(document).ready(function() {
  $("html").click(myFunc)
  $("#questionMark").click(function(e) {
    e.stopPropagation();
  });
});


function myFunc(e) {
  var x = e.clientX;
  var y = e.clientY;

  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.innerHTML = "whatever";
  div.contentEditable = true;
  div.onclick = function(e) {
    e.stopPropagation();
  }
  $(div).draggable();
  
  document.body.appendChild(div);
}