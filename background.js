// const backend='http://localhost:80'
const backend='https://www.openscreenshot.com'

chrome.browserAction.onClicked.addListener(screenshot)

function screenshot(){
	chrome.tabs.captureVisibleTab(data=>{
		var filename=random()
		$.ajax({
			url: `${backend}/upload3.asp`,
			type: 'post',
			data: {
				data,
				filename
			}
		})
		window.open(`${backend}/` + filename)
	})
}

function random(){
	a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_1234567890'
	s=''
	for(var i=0;i<20;i++){
	s+= a[parseInt(Math.random()*a.length)]
	}
	return s
}