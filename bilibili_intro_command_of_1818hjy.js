(function() {
    if ($('#viewbox_report .video-title .tit').html().indexOf('1818黄金眼') > -1){
    	video = $(".bilibili-player-video video")[0]
    	video_slider = document.getElementsByClassName('bilibili-player-video-progress-slider')["0"];
    	video_sendbar = document.getElementsByClassName('bilibili-player-video-sendbar')[0];
    	video_control = document.getElementsByClassName('bilibili-player-video-control-wrap');
    	player_wrap = document.getElementById('playerWrap');
    	console.log(player_wrap.offsetTop,video.clientHeight,video_sendbar.clientHeight,$(video_control).height(),video_slider)
    	setTimeout(function(){console.log(document.getElementsByClassName('bilibili-player-video-control-wrap')[0].clientHeight)},2000)
    }
})();