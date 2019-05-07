(function () {
	page = 1;
	function waitLoading(){
		setTimeout(function(){
			var all_video = document.querySelector('.section .clearfix .small-item');
			if (all_video == null) {
				waitLoading();
			}
			else{
				var txt = 'all_video = new Array(';
				all_video = document.querySelectorAll('.section .clearfix .small-item');
				for (var i = 0; i < all_video.length; i++) {
					av_id = $(all_video[i]).attr('data-aid');
					av_title = $(all_video[i].querySelectorAll('a')[1]).attr('title');
					if (av_title.indexOf('1818黄金眼') == -1) {
						continue;
					}
					txt += "'" + av_id + "'" + ",";
				}
				txt = txt.slice(0,txt.length - 1) + ');';
				a = document.getElementsByClassName('be-pager-item')
				console.log(a)
				// $(a[4]).click()
				// downloadTextFile(txt);
			}
		},50);
	}
	waitLoading();
	function downloadTextFile(mobileCode) {
	    var file = new File([mobileCode], "avid.js", {type: "text/plain;charset=utf-8"});
	    saveAs(file);
	}
})();