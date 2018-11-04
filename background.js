chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.storage.local.set({'FixYoutube': true});
    }
});

var FixYoutube;
chrome.storage.local.get(['FixYoutube'], function(result) {
	FixYoutube = result.FixYoutube;
});

chrome.webRequest.onBeforeRequest.addListener(
	modifyUrl,
	{urls: ["https://www.youtube.com/*"]},
	["blocking"]
);

function modifyUrl(details) {
	if(FixYoutube) {
		if(details.url.indexOf("disable_polymer") === -1) {
			if(details.url.indexOf("?") > 0) {
				return{redirectUrl: details.url.concat("&disable_polymer=1")};
			} else {
				return{redirectUrl: details.url.concat("?disable_polymer=1")};
			}
		}
	}
}

chrome.storage.onChanged.addListener(function(changes, area) {
    if (area == "local" && "FixYoutube" in changes) {
        FixYoutube = changes.FixYoutube.newValue;
    }
});