chrome.webRequest.onBeforeRequest.addListener(
	function callback(details) {
		if(details.url.search("&disable_polymer=true") != -1) {
			return;
		} else {
			return{redirectUrl: details.url.concat("&disable_polymer=true")};
		}
	},
	{urls: ["https://www.youtube.com/watch*", 
			"https://www.youtube.com/playlist*",
			"https://www.youtube.com/results?search_query=*"
			]},
	["blocking"]);
	
chrome.webRequest.onBeforeRequest.addListener(
	function callback(details) {
		if(details.url.search("disable_polymer=true") != -1) {
			return;
		} else {
			return{redirectUrl: details.url.concat("/?disable_polymer=true")};
		}
	},
	{urls: ["https://www.youtube.com/", 
			"https://www.youtube.com/feed/*",
			"https://www.youtube.com/user/*",
			"https://www.youtube.com/channel/*"
			]},
	["blocking"]);