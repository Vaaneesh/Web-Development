let value=false;
document.getElementsByClassName("container");
function changeName(){
    if(value){
        document.getElementsByClassName("container").innerHTML= "yo Vaaneesh this side!!";
        value=!value;

    }
    else{
        document.getElementsByClassName("container").innerHTML="Whats going on??";
        value=!value;
    }
}