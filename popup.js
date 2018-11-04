function f() {
	var enabled = document.getElementById('cb').checked;
	chrome.storage.local.set({'FixYoutube': enabled});
}

chrome.storage.local.get(['FixYoutube'], function(result) {
	document.getElementById('cb').checked = result.FixYoutube;
});

document.getElementById('cb').addEventListener('change', f);