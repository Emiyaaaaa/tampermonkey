(function () {
	page = 3;
	txt = 'all_video = new Array(';
	// now_page = window.location.search[window.location.search.indexOf('page=')+'page='.length];
	// function ToFirstPage(){
	// 	setTimeout(function(){
	// 		var first_page = document.getElementsByClassName('be-pager-item')[0];
	// 		if (first_page == null) {
	// 			ToFirstPage();
	// 		}
	// 		else{
	// 			first_page.click();
	// 			setTimeout(function(){waitLoading();}, 500)

	// 		}
	// 	},50);
	// }
	// if(now_page != undefined && now_page != 1) {
	// 	ToFirstPage();
	// }
	// else{
	// 	waitLoading();
	// }

	function waitLoading(){
		setTimeout(function(){
			var all_video = document.querySelector('.section .clearfix .small-item a');
			if (all_video == null) {
				waitLoading();
			}
			else{
				all_video = document.getElementsByClassName('small-item');
				for (var i = 0; i < all_video.length; i++) {
					av_id = $(all_video[i]).attr('data-aid');
					av_title = $(all_video[i].querySelectorAll('a')[1]).attr('title');
					if (av_title.indexOf('1818黄金眼') == -1) {
						continue;
					}
					txt += "'" + av_id + "',";
				}
				
				setTimeout(function(){
					document.getElementsByClassName('be-pager-next')[0].click();
					now_page = window.location.search[window.location.search.indexOf('page=')+'page='.length];
					if (now_page <= page){
						setTimeout(function(){waitLoading();},500);
					}
					else{
						txt = txt.slice(0,txt.length - 1) + ');';
						downloadTextFile(txt);
						document.getElementsByClassName('be-pager-item')[0].click();
					}
				},800);
			}
		},50);
	}
	waitLoading();

	function downloadTextFile(mobileCode) {
	    var file = new File([mobileCode], "avid.js", {type: "text/plain;charset=utf-8"});
	    saveAs(file);
	}
})();