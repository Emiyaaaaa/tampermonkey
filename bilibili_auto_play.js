
(function() {
    if ($('#viewbox_report .video-title .tit').html().indexOf('1818黄金眼') > -1){
    	function waitLoading(){
            setTimeout(function(){
                var video_time = document.getElementsByClassName('bilibili-player-video-time-total')[0];
                console.log(video_time)
                if (video_time == undefined) {
                    waitLoading();
                }
                else if (video_time.innerText == '00:00') {
                    waitLoading();
                }
                else{
                    var video_play_button = document.getElementsByClassName('bilibili-player-video-state')[0];
                    var video_volume_button = document.getElementsByClassName('bilibili-player-video-btn-volume')[0];
                    $(video_play_button).click();
                    $(video_volume_button).click()
                    console.log(video_volume_button)
                }
            },50);
        }
        waitLoading();
    }
    function time2sec(time){
        min = time.split(':')[0];
        sec = time.split(':')[1];
        all_sec = Number(min)*60 + Number(sec);
        return all_sec;
    }
})();