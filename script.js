const playlist = [
    '/assets/songs/Thriller-Michael_Jackson.mp4',
    '/assets/songs/Mariah_Carey-All_I_Want_for_Christmas_Is_You.mp4',
];


// document.onreadystatechange = function () {
//     if (document.readyState == "interactive") {
//         // const _audio = document.getElementById('player');    
        
//         // const _listen = document.getElementById('mariah');

//         // _listen.addEventListener('click', function() {
    //         //    _audio.src = playlist[1];
    //         //    _audio.play();
    //         // });
    
    //         // _listen.addEventListener('ended', function() {
        //         //     console.log('previous song ended, next is coming...');
        //         //    _audio.load();
        //         //    _audio.src = playlist[0];
        //         //    _audio.play();
        //         // });
        //     }
        // }

        
document.addEventListener("DOMContentLoaded", function(){ 
    console.log('Script is on');
            
    let playing = false;
    const _player = document.getElementById('player');
    const _playBtn = document.getElementById('control-btn');
 
    const playPause = () => {
        console.log('control-btn clicked !');
        if (!playing) {    
            _player.play();
            playing = true;
            _playBtn.src = "/assets/images/pause-icon.svg";
        } else {
            _player.pause();
            _playBtn.src = "/assets/images/play-icon.svg";
            playing = false;
        }
       
    };

    _playBtn.addEventListener('click', playPause)

    document.getElementById('listen').addEventListener('click', function() {
        console.log('Listen btn clicked!', );
        _player.src="/assets/songs/Thriller-Michael_Jackson.mp4";
        playPause();
    });


});