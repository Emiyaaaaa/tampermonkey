window.onload=function(){

updateLink();
addUrlChangeListener();// url更新时更新a标签并为 submit-video 绑定事件(100ms检测一次)




function addUrlChangeListener(handle){
	var location = window.location,
		oldURL = location.href;

	// 每隔100ms检测一下location.href是否发生变化
	setInterval(function() {
		var newURL = location.href;
		// 如果hash发生了变化
		if ( newURL != oldURL) {
			// 更新a标签
			updateLink();
			// 为 submit-video 绑定事件
			var submitVideo = document.getElementById('submit-video');
			if (submitVideo) {
				ObserveUtil.addAttributesHander(submitVideo,['class'],function(){
					if(!submitVideo.classList.contains('loading')){
						updateLink();
					}
				});
			}
			oldURL = newURL;// 更新url
		}
	}, 100);
}

function updateLink(){
	updateUrlList();
	replaceUrl();
}

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
}