$(document).ready(function() {
	updateUrlList();
	replaceUrl();

	var submitVideo = document.getElementById('submit-video');
	ObserveUtil.addAttributesHander(submitVideo,['class'],function(){
		if(!submitVideo.classList.contains('loading')){
			updateUrlList();
			replaceUrl();
		}
	});

	function updateUrlList(){
		urlList = [];
		var videoItems = document.getElementsByClassName('small-item');
		for (let i = 0; i < videoItems.length; i++) {
			videoItemsUrl = videoItems[i].getElementsByTagName('a')[0].href;//完整链接
			videoBV = videoItemsUrl.split('/')[4];//提取BV号
			urlList.push(videoBV);//加入数组
		}
	}

	// 在默认url后添加参数
	function replaceUrl(){
		urlListString = urlList.join('-')
		var videoItems = document.getElementsByClassName('small-item');
		for (let i = 0; i < videoItems.length; i++) {
			videoItemsLink = videoItems[i].getElementsByTagName('a');//只有两个a标签就不做循环了
			videoItemsLink[0].href = videoItemsLink[1].href = videoItemsLink[0].href+"?allVideo="+urlListString;
		}
	}
});