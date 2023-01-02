var box = document.getElementById("box");
// var btn=document.getElementById('btn');
var cont = document.getElementById("container");
var max_hit = cont.clientHeight;
var max_wid = cont.clientWidth;

var c_left_margin = 0;
var c_top_margin = 0;
window.addEventListener("keypress", function (e) {
  var k = e.key;
  if (k == "a" && c_left_margin > 0) {
    c_left_margin -= 50;
    box.style.marginLeft = c_left_margin + "px";
  } else if (k == "s" && c_top_margin < max_hit - 115) {
    c_top_margin += 50;
    box.style.marginTop = c_top_margin + "px";
  } else if (k == "d" && c_left_margin < max_wid - 140) {
    c_left_margin += 50;
    box.style.marginLeft = c_left_margin + "px";
  } else if (k == "w" && c_top_margin > 0) {
    c_top_margin -= 50;
    box.style.marginTop = c_top_margin + "px";
  }
});
