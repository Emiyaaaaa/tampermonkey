
(function() {
    if ($('#viewbox_report .video-title .tit').html().indexOf('1818黄金眼') > -1){
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
                    var play_time = document.getElementsByClassName('bilibili-player-video-time-now')[0];
                    play_time_now = time2sec(play_time.innerText);
                    get_time_now();

                }
            },50);
        }
        waitLoading();
    }

    $.ajax({
        url:"http://www.emiya.com.cn",
        type:"GET",
        data:{},
        success:function(data){
            console.log(data)
        }
    })

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
            surplus_time = time2sec(video_time.innerText) - play_time_now - 3;
            if (surplus_time >= 0) {
                open_new_video();
            }
            else{
                get_time_now();
            }
            
        },200);
    }
    function open_new_video(){
        
    }
})();