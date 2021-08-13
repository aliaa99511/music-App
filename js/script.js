
window.onload=function(){


var songs=[

    {
        imgsrc:"images/aks el shayfinha.jpg",
        actorname:"elissa",
        songname:"aks el shayfinha",
        songsrc:"sounds/aks el shayfinha.mp3"
    },
    {
        imgsrc:"images/ma bairef.jpg",
        actorname:"Yara",
        songname:"ma bairef",
        songsrc:"sounds/ma bairef.mp3"

    },
    {
        imgsrc:"images/krahny.jpg",
        actorname:"elissa",
        songname:"krahny",
        songsrc:"sounds/krahny.mp3"

    },
    {
        imgsrc:"images/kalina zay ma ehna.jpg",
        actorname:"Hamaki",
        songname:"kalina zay ma ehna",
        songsrc:"sounds/kalina zay ma ehna.mp3"
    },
    {
        imgsrc:"images/maktoba lek.jpg",
        actorname:"elissa",
        songname:"maktoba lek",
        songsrc:"sounds/maktoba lek.mp3"
    },
    {
        imgsrc:"images/sebt farag kabir.jpg",
        actorname:"Amr Diab",
        songname:"sebt farag kabir",
        songsrc:"sounds/sebt farag kabir.mp3"

    },
    {
        imgsrc:"images/Taman ikhtiyar.jpg",
        actorname:"Tamer Hosney",
        songname:"Taman ikhtiyar",
        songsrc:"sounds/Taman ikhtiyar.mp3"

    }
]

var count= 0;
var isplaying=false;
var duration=0;
var currentTime=0;


var myaudio=document.querySelector("audio")
var volumedown=document.getElementById("volumedown")
var volumeslider=document.getElementById("volumeslider")
var volumeup=document.getElementById("volumeup")
var image=document.getElementById("image")
var actor=document.getElementById("actor")
var song=document.getElementById("song")
var startime=document.getElementById("startime")
var seekslider=document.getElementById("seekslider")
//var currentime=document.getElementById("currentime")
var repeat=document.getElementById("repeat")
var prev=document.getElementById("prev")
var playbtn=document.getElementById("playbtn")
var playicon=document.getElementById("playicon")
var next=document.getElementById("next")
var full=document.getElementById("full");


            /************************ */

starting();
function starting(){
    myaudio.src= songs[count].songsrc;
    image.src= songs[count].imgsrc;
    actor.innerHTML= songs[count].actorname;
    song.innerHTML= songs[count].songname;
}

            /************************ */

            /************************ */

playbtn.addEventListener("click",function playpause(){


    if(myaudio.paused){
        myaudio.play();
        isplaying=true;
        duration=myaudio.duration;
        seekslider.max=duration;
        playicon.classList.remove("fa-play");
        playicon.classList.add("fa-pause");
    }else{
        myaudio.pause();
        isplaying=false;
        playicon.classList.add("fa-play");
    }

    seekslider.addEventListener("change",function(){
        myaudio.currentTime=seekslider.value;
    })

    myaudio.addEventListener("timeupdate",function(){
        seekslider.value=myaudio.currentTime
    })
})
            /************************ */
            /************************ */

next.addEventListener("click",function(){

    count++;

    if(count >= songs.length){
        count=0;
    }

    starting();

    myaudio.play();
    playicon.classList.add("fa-pause");
    playicon.classList.remove("fa-play");

}) 

        /******************** */
        /************************** */

prev.addEventListener("click",function(){

    count--;

    if(count ==0){
        count=songs.length-1;
    }

    starting();

    myaudio.play();
    playicon.classList.add("fa-pause");
    playicon.classList.remove("fa-play");

}) 
                /************************** */
                /************************** */

full.addEventListener("click",function(){

    if(myaudio.muted == false){
        myaudio.muted = true;
        full.src="images/mute.png"
    }else{
        myaudio.muted = false
        full.src="images/full.png"
    }
    
})
                /************************** */
                /************************** */
repeat.addEventListener("click",function(){

    if(myaudio.loop == false){
        myaudio.loop = true;
        repeat.src="images/once.png"
    }else{
        myaudio.loop = false
        repeat.src="images/repeat.png"
    }
    
})

                /************************** */
                /************************** */






}
/*************************end window**************************** */


/*playbtn.addEventListener("click",function playpause(){


    if(myaudio.paused){
        myaudio.play();
        playicon.classList.remove("fa-play");
        playicon.classList.add("fa-pause");
    }else{
        myaudio.pause();
        playicon.classList.add("fa-play");
    }
})*/





/*
var seeking=false;

seekslider.addEventListener("mousedown",function(event){
    seeking=true;
    seek(event)
})
seekslider.addEventListener("mouseup",function(event){
    seek(event)
})
seekslider.addEventListener("mousemove",function(){
    seeking=false;
})

function seek(event){

    if(myaudio.duration==0){
        null
    }else{
        if(seeking){
            seekslider.value=event.clientX-seekslider.offsetLeft;
            var seekto=myaudio.duration*(seekslider.value/100);
            myaudio.currentTime=seekto
        }
    }
}
*/