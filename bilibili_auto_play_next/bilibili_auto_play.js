(function() {
    now_av = window.location.href.split('/')[4];
    now_av_id = now_av.slice(2,);
    if ($('#viewbox_report .video-title .tit').html().indexOf('1818黄金眼') > -1){
        not_1818 = false;
    	function waitLoading(){
            setTimeout(function(){
                video_time = document.getElementsByClassName('bilibili-player-video-time-total')[0];
                if (video_time == undefined) {
                    waitLoading();
                }
                else if (video_time.innerText == '00:00') {
                    waitLoading();
                }
                else{
                    var video_title = $('#viewbox_report .video-title .tit').html();
                    video_title = video_title.slice(8,video_title.length-1).replace(' ','，').replace(/“/g,'</br>“').replace(/”/g,'”</br>');
                    var web_fullscreen_video = document.getElementsByClassName('bilibili-player-video');
                    var append_html = "<div style='margin:0 auto;line-height:25px;position:fixed;width:21px;font-size:21px;white-space:normal;color:white;top:100px;left:20px;'>"+video_title+"</div>";
                    $(web_fullscreen_video).append(append_html);
                    var video_play_button = document.getElementsByClassName('bilibili-player-video-state')[0];
                    var video_web_fullscreen = document.getElementsByClassName('bilibili-player-video-web-fullscreen')[0];
                    $(video_play_button).click();
                    $(video_web_fullscreen).click();
                    var play_time = document.getElementsByClassName('bilibili-player-video-time-now')[0];
                    play_time_now = time2sec(play_time.innerText);
                    get_time_now();
                }
            },50);
        }
        waitLoading();
    }
    else{
        not_1818 = true;
        function waitLoading(){
            setTimeout(function(){
                var video_time = document.getElementsByClassName('bilibili-player-video-time-total')[0];
                if (video_time == undefined) {
                    waitLoading();
                }
                else if (video_time.innerText == '00:00') {
                    waitLoading();
                }
                else{
                    var video_play_button = document.getElementsByClassName('bilibili-player-video-state')[0];
                    $(video_play_button).click();
                    var p_video_ele = document.getElementById('multi_page');
                    if (p_video_ele != undefined) {
                        setTimeout(function(){
                            p_video_list = p_video_ele.getElementsByClassName('list-box')[0].getElementsByTagName('li');
                            for (var i = 0; i < p_video_list.length; i++) {
                                if (p_video_list[i].classList.contains('on')) {
                                    now_av_p = i + 1;
                                    break;
                                }
                            }
                        },2500);
                        var play_time = document.getElementsByClassName('bilibili-player-video-time-now')[0];
                        play_time_now = time2sec(play_time.innerText);
                        get_time_now();
                    } 
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

    function get_time_now(){
        setTimeout(function(){
            var play_time = document.getElementsByClassName('bilibili-player-video-time-now')[0];
            if (play_time == undefined) {
                alert('undefined')
            }
            var video_time = document.getElementsByClassName('bilibili-player-video-time-total')[0];
            play_time_now = time2sec(play_time.innerText);
            surplus_time = time2sec(video_time.innerText) - play_time_now;
            if (not_1818) {
                surplus_time = time2sec(video_time.innerText) - play_time_now - 1;
            }
            if (surplus_time <= 0) {
                if (not_1818) {
                    open_new_p_video();
                }
                else{
                    open_new_video();
                }
            }
            else{
                try{
                    get_time_now();
                }
                catch(err){
                    setTimeout(get_time_now,200);
                }
            }
        },200);
    }

    function open_new_video(){
        var now_av_index = all_video.indexOf(now_av_id);
        if (now_av_index != 0){
            window.location.href = 'https://www.bilibili.com/video/av' + all_video[now_av_index-1];
        }
    }
    function open_new_p_video(){
        if (now_av_p < p_video_list.length) {
            window.location.href = 'https://www.bilibili.com/video/av' + now_av_id + '/?p=' + (now_av_p + 1);
        }
    }
})();