const _control = document.createElement('img');
const _audio = document.getElementById('player');

function playPause(){
    if(_audio.paused){
        _audio.play();
        _control.src = "/assets/images/pause-btn.svg";
        _control.width = 100;
        _control.height = 85;
        playbtn.appendChild(_control);
    } else {
        _audio.pause();
        playbtn.style.background = "url(/assets/images/control-btn.svg) no-repeat";
    }
}
function mute(){
    if(_audio.muted){
        _audio.muted = false;
        mutebtn.img = "url(/assets/images/volume.svg)";
        // mutebtn.style.background = "url(/assets/images/volume.svg) no-repeat";
    } else {
        _audio.muted = true;
        mutebtn.style.background = "url(/assets/images/muted.svg) no-repeat";
    }
}
function seek(event){
    if(seeking){
        seekslider.value = event.clientX - seekslider.offsetLeft;
        seekto = audio.duration * (seekslider.value / 100);
        audio.currentTime = seekto;
    }
}
function setvolume(){
    audio.volume = volumeslider.value / 100;
}


let audio,
    playbtn,
    mutebtn,
    seekslider,
    volumeslider,
    seeking = false,
    seekto;

function initAudioPlayer(){
    console.log('started!!');
    // audio = new Audio();
    _audio.src = "/assets/songs/Thriller-Michael_Jackson.mp4";
    // _audio.loop = true;
    // audio.play();
    // _audio.play();
    // Set object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    seekslider = document.getElementById("seekslider");
    volumeslider = document.getElementById("volumeslider");
    // Add Event Handling
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
    seekslider.addEventListener("mousemove", function(event){ seek(event); });
    seekslider.addEventListener("mouseup",function(){ seeking=false; });
    volumeslider.addEventListener("mousemove", setvolume);
    // Functions
}