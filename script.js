var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
 
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}   


function show(){
document.getElementById("redeem-btn").style.background="black"
 document.getElementById("redeem-btn").style.color="white"
}
function out(){
    document.getElementById("redeem-btn").style.background="white"
    document.getElementById("redeem-btn").style.color="black"   
}
function showed(){
    document.getElementById("redeem-btn-first").style.background="black"
document.getElementById("redeem-btn-first").style.color="white"
}
function oute(){
    document.getElementById("redeem-btn-first").style.background="white"
    document.getElementById("redeem-btn-first").style.color="black"
}
function showing(){
    document.getElementById("redeem-btn-mid").style.background="black"
document.getElementById("redeem-btn-mid").style.color="white"
}
function outer(){
    document.getElementById("redeem-btn-mid").style.background="white"
    document.getElementById("redeem-btn-mid").style.color="black"
}
function shows(){
    document.getElementById("redeem-btn-last").style.background="black"
document.getElementById("redeem-btn-last").style.color="white"
}
function outs(){
    document.getElementById("redeem-btn-last").style.background="white"
    document.getElementById("redeem-btn-last").style.color="black"
}
