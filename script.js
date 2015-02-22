var box;
var lastString = "";
var key = {};

if (document.readyState) {
	box = document.createElement("div");
	document.body.appendChild(box);
	
	chrome.storage.sync.get("translit_key", function(obj){
		if (chrome.runtime.lastError) {
			return;
		}
		
		if (obj) {
			key = JSON.parse(obj["translit_key"]);
		}
	});
}

document.onmouseup = function(event) {
	var t = (document.all) ? document.selection.createRange().text : document.getSelection();
	if (t == undefined)
		return;
	var finalString = transliterate(t);
	if (event.target.className != "popup") {
		clearPopups();
	}
	if (finalString != null && finalString != lastString) {
		popup(finalString, event.clientX, event.clientY);
		clearSelection();
	}
	
	lastString = finalString;
};

function transliterate(word) {
	word = word.toString();
	var result = "";
	var changed = false;
	for (var i = 0; i < word.length; i++) {
		var cyrillic = key[word.charAt(i) + ""];
		if (cyrillic != undefined) {
			result += cyrillic;
			changed = true;
		} else {
			result += word.charAt(i) + "";
		}
	}
	if (changed)
		return result;
	return null;
}

function popup(word, x, y) {
	var popupbox = document.createElement("p");
	popupbox.innerHTML = word;
	popupbox.className = "popup";
	popupbox.style.top = y + "px";
	popupbox.style.left = x + "px";
	box.appendChild(popupbox);
	popupbox.onclick = function() {
	
	}
}

function clearPopups() {
	box.innerHTML = "";
	lastString = "";
}

function clearSelection () {
	if (window.getSelection) {
		if (window.getSelection().empty) {  // Chrome
		window.getSelection().empty();
		} else if (window.getSelection().removeAllRanges) {  // Firefox
			window.getSelection().removeAllRanges();
		}
	} else if (document.selection) {  // IE?
		document.selection.empty();
	}
}