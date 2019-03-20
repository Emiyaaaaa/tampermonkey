(function() {
    if ($('#viewbox_report .video-title .tit').html().indexOf('1818黄金眼')>-1){
    	console.log($(".bilibili-player-video video"))
    	video_slider = document.getElementsByClassName('bilibili-player-video-progress-slider');
    	a = document.getElementById('playerWrap')
    	console.log(a.offsetTop)
    }
})();