chrome.webRequest.onBeforeRequest.addListener(
	function callback(details) {
		if(details.url.search("&disable_polymer=true") == true) {
			console.log(details.url);
			return;
		} else {
			var fixer = "&disable_polymer=true";
			var url = details.url.concat(fixer);
			return{redirectUrl: url};
		}
	},
	{urls: ["https://www.youtube.com/watch*"]},
	["blocking"]);
	
chrome.webRequest.onBeforeRequest.addListener(
	function callback(details) {
		if(details.url.search("/?disable_polymer=true") == true) {
			console.log(details.url);
			return;
		} else {
			var fixer = "/?disable_polymer=true";
			var url = details.url.concat(fixer);
			return{redirectUrl: url};
		}
	},
	{urls: ["https://www.youtube.com/", "https://www.youtube.com/feed/subscriptions"]},
	["blocking"]);