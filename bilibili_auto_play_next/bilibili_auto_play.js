(function() {
    if ($('#viewbox_report .video-title .tit').html().indexOf('1818黄金眼') > -1){
        now_av = window.location.href.split('/')[4];
        now_av_id = now_av.slice(2,)
        
    	function waitLoading(){
            setTimeout(function(){
                video_time = document.getElementsByClassName('bilibili-player-video-time-total')[0];
                console.log(video_time)
                if (video_time == undefined) {
                    waitLoading();
                }
                else if (video_time.innerText == '00:00') {
                    waitLoading();
                }
                else{
                    var video_play_button = document.getElementsByClassName('bilibili-player-video-state')[0];
                    var video_fullscreen = document.getElementsByClassName('bilibili-player-video-btn-fullscreen')[0];
                    $(video_play_button).click();
                    $(video_fullscreen).click();
                    var play_time = document.getElementsByClassName('bilibili-player-video-time-now')[0];
                    play_time_now = time2sec(play_time.innerText);
                    get_time_now();

                }
            },50);
        }
        waitLoading();
    }
    else{
        var video_play_button = document.getElementsByClassName('bilibili-player-video-state')[0];
        $(video_play_button).click();
    }

    function time2sec(time){
        min = time.split(':')[0];
        sec = time.split(':')[1];
        all_sec = Number(min)*60 + Number(sec);
        return all_sec;
    }

    function get_time_now(){
        setTimeout(function(){
            var play_time = document.getElementsByClassName('bilibili-player-video-time-now')[0];
            play_time_now = time2sec(play_time.innerText);
            surplus_time = time2sec(video_time.innerText) - play_time_now - 2;
            if (surplus_time <= 0) {
                open_new_video();
            }
            else{
                get_time_now();
            }
            
        },200);
    }
    function open_new_video(){
        var now_av_index = all_video.indexOf(now_av_id);
        if (now_av_index != 0) {
            window.location.href = 'https://www.bilibili.com/video/av' + all_video[now_av_index-1];
        }
    }
})();