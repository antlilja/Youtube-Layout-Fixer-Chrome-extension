chrome.webRequest.onBeforeRequest.addListener(
	function callback(details) {
		if(details.url.indexOf("disable_polymer") === -1) {
			if(details.url.indexOf("?") > 0) {
				return{redirectUrl: details.url.concat("&disable_polymer=1")};
			} else {
				return{redirectUrl: details.url.concat("?disable_polymer=1")};
			}
		}
	},
	{urls: ["https://www.youtube.com/*"]},
	["blocking"]);