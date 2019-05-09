(function () {
	page = 2;
	function waitLoading(){
		setTimeout(function(){
			var all_video = document.querySelector('.section .clearfix .small-item');
			if (all_video == null) {
				waitLoading();
			}
			else{
				var txt = 'all_video = new Array(';
				if (page == 1) {
					getVideoAv(document);
				}
				else if (page > 1) {
					for (var i = 2; i <= page; i++) {
						$.ajax({
							url:'https://space.bilibili.com/354077280/video/',
							type:'GET',
		        			data:{"page":String(i)},
							success:function(data){
								console.log(data)
							}
						})
						getVideoAv();
					}
				}
				// downloadTextFile(txt);
			}
		},50);
	}
	waitLoading();

	function getVideoAv(document){
		all_video = document.querySelectorAll('.section .clearfix .small-item');
		for (var i = 0; i < all_video.length; i++) {
			av_id = $(all_video[i]).attr('data-aid');
			av_title = $(all_video[i].querySelectorAll('a')[1]).attr('title');
			if (av_title.indexOf('1818黄金眼') == -1) {
				continue;
			}
			txt += "'" + av_id + "'" + ",";
		}
		return txt;
	}

	function downloadTextFile(mobileCode) {
	    var file = new File([mobileCode], "avid.js", {type: "text/plain;charset=utf-8"});
	    saveAs(file);
	}
})();