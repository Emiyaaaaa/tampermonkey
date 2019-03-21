
(function() {
    if ($('#viewbox_report .video-title .tit').html().indexOf('1818黄金眼') > -1){
    	function waitLoading(){
    		setTimeout(function(){
    			var wrap_height = document.getElementsByClassName('bilibili-player-video-control-wrap')[0].clientHeight;
			   	var video_time = document.getElementsByClassName('bilibili-player-video-time-total');
			   	if (video_time == undefined) {
			   		waitLoading();
			   	}
    			else if (wrap_height == 0 || wrap_height == undefined || video_time[0].innerText == '00:00' || video_time[0].innerText == undefined) {
    				waitLoading();
    			}
    			else{
    				var video = document.getElementById('bofqi');
    				var v_wrap = document.getElementsByClassName('v-wrap')[0];
			    	var video_slider = document.getElementsByClassName('bilibili-player-video-progress-slider')[0];
			    	var video_sendbar = document.getElementsByClassName('bilibili-player-video-sendbar')[0];
			    	var video_control = document.getElementsByClassName('bilibili-player-video-control-wrap')[0];
			    	var player_wrap = document.getElementById('playerWrap');

			    	var v_wrap_left = v_wrap.style.paddingLeft || $(v_wrap).css('padding-left');
			    	var v_wrap_left = v_wrap.offsetLeft || v_wrap_left.slice(0,v_wrap_left.length-2);
			    	var video_control_left = $(video_control).css('padding-left');
			    	var video_control_left = video_control_left.slice(0,video_control_left.length-2);
			    	var video_sec = time2sec(video_time[0].innerText);
			    	var tof_sec = 4;
			    	var tof_width = video_control.clientWidth * 4 / video_sec;
			    	var tof_left = Number(tof_width) + Number(v_wrap_left) + Number(video_control_left);
			    	var video_bar_top = player_wrap.offsetTop + video_control.offsetTop;
			    	setTimeout(function(){
            			imitateClick(document.body, 187, 690);
			    	},5000);

			    	console.log(tof_left,video_bar_top)
    			}
    		},50);
    	}
    	waitLoading();

    	function time2sec(time){
    		min = time.split(':')[0];
    		sec = time.split(':')[1];
    		all_sec = Number(min)*60 + Number(sec);
    		return all_sec;
    	}
    }
   	// $(document).click(function(event){
	   //    var e = event || window.event;
	   //    console.log(e.clientX,e.clientY)
   	// })

   	function imitateClick(oElement, iClientX, iClientY) {
        var oEvent;
        if (document.createEventObject) { //For IE
            oEvent = document.createEventObject();
            oEvent.clientX = iClientX;
            oEvent.clientY = iClientY;
            oElement.fireEvent("onclick", oEvent);   
        } else {
            oEvent = document.createEvent("MouseEvents");
            oEvent.initMouseEvent("click", true, false, document.defaultView, 3, 0, 0, iClientX, iClientY, false, false, false, false, 0, null); 
            oElement.dispatchEvent(oEvent);
        }
    }
    document.body.onclick = function(event) {
        console.log("clicked at (" + event.clientX + "," + event.clientY + ")");
    };
})();