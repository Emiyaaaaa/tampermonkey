(function () {
	page = 2;
	txt = 'all_video = new Array(';

	function waitLoading(){
		setTimeout(function(){
			var all_video = document.querySelector('.section .clearfix .small-item');
			if (all_video == null) {
				waitLoading();
			}
			else{
				all_video = document.querySelectorAll('.section .clearfix .small-item');
				console.log(all_video)

				for (var i = 0; i < all_video.length; i++) {
					av_id = $(all_video[i]).attr('data-aid');
					av_title = $(all_video[i].querySelectorAll('a')[1]).attr('title');
					if (av_title.indexOf('1818黄金眼') == -1) {
						continue;
					}
					txt += "'" + av_id + "'" + ",";
					// console.log(txt)
				}
				document.getElementsByClassName('be-pager-next')[0].click();
			}
		},50);
	}

	function downloadTextFile(mobileCode) {
	    var file = new File([mobileCode], "avid.js", {type: "text/plain;charset=utf-8"});
	    saveAs(file);
	}

	function waitLoading2(){
		setTimeout(function(){
			var next_page = document.getElementsByClassName('be-pager-next')[0];
			if (next_page == null) {
				waitLoading2();
			}
			else{
				for (var i = 0; i < page; i++) {
					waitLoading();
					if((i + 1) != page){
						console.log($(next_page).click());
						$(next_page).click();
					}
				}
			}
		},50);
	}
	waitLoading2();
})();