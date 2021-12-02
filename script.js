const playlist = [
    '/assets/songs/Thriller-Michael_Jackson.mp4',
    '/assets/songs/Mariah_Carey-All_I_Want_for_Christmas_Is_You.mp4',
];


// document.onreadystatechange = function () {
//     if (document.readyState == "interactive") {
//         // const __player = document.getElementById('player');    
        
//         // const _listen = document.getElementById('mariah');

//         // _listen.addEventListener('click', function() {
    //         //    __player.src = playlist[1];
    //         //    __player.play();
    //         // });
    
    //         // _listen.addEventListener('ended', function() {
        //         //     console.log('previous song ended, next is coming...');
        //         //    __player.load();
        //         //    __player.src = playlist[0];
        //         //    __player.play();
        //         // });
        //     }
        // }

        
document.addEventListener("DOMContentLoaded", function(){ 
    console.log('Script is on');
    
    // Ref to elem in the DOM
    let playing = false,
        seeking = false,
        seekTo;
    const _player = document.getElementById('player');
    const _controlBtn = document.getElementById('control-btn');
    const _volumeSlider = document.getElementById("volumeslider");
    const _seekSlider = document.getElementById("seekslider");

    // Functions
    const playPause = () => {
        console.log('control-btn clicked !');
        if (!playing) {    
            _player.play();
            playing = true;
            _controlBtn.src = "/assets/images/pause-icon.svg";
        } else {
            _player.pause();
            _controlBtn.src = "/assets/images/play-icon.svg";
            playing = false;
        }
    };
    function seek(event){
        if(seeking){
            _seekSlider.value = event.clientX - _seekSlider.offsetLeft;
	        seekto = _player.duration * (_seekSlider.value / 100);
	        _player.currentTime = seekto;
	    }
    }
    
    // Handle player events
    _controlBtn.addEventListener('click', playPause);
    
    document.getElementById('listen').addEventListener('click', function() {
        console.log('Listen btn clicked!');
        _seekSlider.value = 0;
        _volumeSlider.value = 30;
        _player.oncanplaythrough = () => { 
            _seekSlider.max = _player.duration;
            console.log('duration :::', _player.duration);
        };
        _player.src="/assets/songs/Thriller-Michael_Jackson.mp4";
        playPause();
    });

    _volumeSlider.addEventListener("mousemove", function() {_player.volume = this.value / 100 });
    _seekSlider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
	_seekSlider.addEventListener("mousemove", function(event) { seek(event); });
	_seekSlider.addEventListener("mouseup",function() { seeking = false; });
});