//initializing
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let prev=document.getElementById('previous');
let next=document.getElementById('next');
let masterSongname=document.getElementById("masterSongName");
let vol_slider=document.getElementById("vol-slider");
let songs=[
    {songName:"The Hills -The Weeknd",filePath:"songs/1.mp3",coverPath:"songList/L1.avif"},
    {songName:"Starboy -The Weeknd",filePath:"songs/2.mp3",coverPath:"songList/L2.jpeg"},
    {songName:"Creepin' -The Weeknd & Metro",filePath:"songs/3.mp3",coverPath:"songList/L3.jpeg"},
    {songName:"After Hours -The Weeknd",filePath:"songs/4.mp3",coverPath:"songList/L4.jpeg"},
    {songName:"Is there someone else? -The Weeknd",filePath:"songs/5.mp3",coverPath:"songList/L5.jpeg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();

//play/pause
masterPlay.addEventListener('click',()=>{
    console.log("WELCOME");
    songItems[songIndex].querySelector(".songItemPlay").classList.remove('fa-play-circle');
    songItems[songIndex].querySelector(".songItemPlay").classList.add('fa-pause-circle');
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//listen
audioElement.addEventListener('timeupdate',()=>{
    //updating seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressbar.value=progress;
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressbar.value*audioElement.duration)/100;
})

const makeAllplays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}   

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongname.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

next.addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    masterSongname.innerText=songs[songIndex].songName;
    console.log("playing next song");
    makeAllplays(); 
    songItems[songIndex].querySelector(".songItemPlay").classList.remove('fa-play-circle');
    songItems[songIndex].querySelector(".songItemPlay").classList.add('fa-pause-circle');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
prev.addEventListener('click',(e)=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    makeAllplays();
    songItems[songIndex].querySelector(".songItemPlay").classList.remove('fa-play-circle');
    songItems[songIndex].querySelector(".songItemPlay").classList.add('fa-pause-circle');
    masterSongname.innerText=songs[songIndex].songName;
    console.log("Playing prev song");
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

vol_slider.addEventListener("input",()=>{
    audioElement.volume=vol_slider.value;
    if(audioElement.volume===0){
        document.querySelector(".vol i").classList.replace('fa-volume-high','fa-volume-xmark');
    }
    else{
        document.querySelector(".vol i").classList.replace('fa-volume-xmark','fa-volume-high');
    }
})