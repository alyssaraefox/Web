function w3_open(){
  document.getElementsByClassName("w3-topnav")[0].style.display = "block";
}
function w3_close() {
  document.getElementsByClassName("w3-topnav")[0].style.display = "none";
}
document.getElementById('foot01').innerHTML =
"<p>&copy; " +new Date().getFullYear() +"IronicFox. All rights reserved.</p>";
document.getElementById('nav01').innerHTML =
"<ul id='menu'>" +
"<li><a href= 'index.html'>Home</a></li>" +
"<li><a href='abt.html'>About</a></li>" +
"</ul>";
