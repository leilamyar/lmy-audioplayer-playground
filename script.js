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
    console.log('script on');
    
    const _player = document.getElementById('player');
    const _playBtn = document.getElementById('play-btn');
    
    _playBtn.addEventListener('click', () => {
        console.log('play btn clicked !');
        _player.play();
    })
});