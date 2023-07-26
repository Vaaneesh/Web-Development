window.onresize=screen;
window.onload=screen;

function screen(){
    Width=window.innerWidth;
    document.getElementById("size").innerHTML="Width : "+ Width + " px";
}