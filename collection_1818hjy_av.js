(function () {
	function waitLoading(){
		setTimeout(function(){
			var all_video = document.querySelector('.full-rows .content .small-item');
			if (all_video == null) {
				waitLoading();
			}
			else{
				var txt = 'all_video = (';
				all_video = document.querySelectorAll('.full-rows .content .small-item');
				for (var i = 0; i < all_video.length; i++) {
					av_id = $(all_video[i]).attr('data-aid');
					av_title = $(all_video[i].querySelectorAll('a')[1]).attr('title');
					if (av_title.indexOf('1818黄金眼') == -1) {
						continue;
					}
					txt += "{'av_id':'"+av_id+"','av_title':'"+av_title+"'},";
				}
				txt += ')';
				downloadTextFile(txt);
			}
		},50);
	}
	waitLoading();
	function downloadTextFile(mobileCode) {
	    var file = new File([mobileCode], "avid.js", {type: "text/plain;charset=utf-8"});
	    saveAs(file);
	}
})();