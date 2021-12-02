


// document.onreadystatechange = function () {
//     if (document.readyState == "interactive") {
//         // const _player = document.getElementById('player');    
        
//         // const _listen = document.getElementById('mariah');

//         // _listen.addEventListener('click', function() {
    //         //    _player.src = playlist[1];
    //         //    _player.play();
    //         // });
    
    
    
    
    document.addEventListener("DOMContentLoaded", function(){ 
        console.log('Script is on');
        const playlist = [
            '/assets/songs/Thriller-Michael_Jackson.mp4',
            '/assets/songs/Mariah_Carey-All_I_Want_for_Christmas_Is_You.mp4',
        ];
        // Ref to elem in the DOM
        let playing = false,
        seeking = false,
        seekTo;
        const _player = document.getElementById('player');
        const _controlBtn = document.getElementById('control-btn');
        const _volumeSlider = document.getElementById("volumeslider");
        const _seekSlider = document.getElementById("seekslider");
        const _listen = document.getElementById("listen");

        _player.addEventListener('ended', function() {
            console.log('previous song ended, next is coming...');
            _player.load();
            _player.src = playlist[1];
            _player.play();
        });
    // Init
    _seekSlider.value = 0;
    _volumeSlider.value = 30;
    
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
    
    document.getElementById("listen").addEventListener('click', function() {
        console.log('Listen btn clicked!');
        playing = false;
        _player.oncanplaythrough = () => {
            // TODO: fix seek slider + make it move as song goes
            _seekSlider.max = _player.duration.toFixed(1);
            console.log('duration :::', _player.duration);
            _seekSlider.step = (_player.duration / 1000);
            
            // to fixed = 313.66
        };
        _player.src=playlist[0];
        playPause();
    });

    _volumeSlider.addEventListener("mousemove", function() {_player.volume = this.value / 100 });
    _seekSlider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
	_seekSlider.addEventListener("mousemove", function(event) { seek(event); });
	_seekSlider.addEventListener("mouseup",function() { seeking = false; });
});