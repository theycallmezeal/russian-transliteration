var box;
var lastString = "";
var key = {};

var backup = {};
backup["Ё"]="YO";backup["Й"]="I";backup["Ц"]="TS";backup["У"]="U";backup["К"]="K";backup["Е"]="E";backup["Н"]="N";backup["Г"]="G";backup["Ш"]="SH";backup["Щ"]="SCH";backup["З"]="Z";backup["Х"]="H";backup["Ъ"]="'";
backup["ё"]="yo";backup["й"]="i";backup["ц"]="ts";backup["у"]="u";backup["к"]="k";backup["е"]="e";backup["н"]="n";backup["г"]="g";backup["ш"]="sh";backup["щ"]="sch";backup["з"]="z";backup["х"]="h";backup["ъ"]="'";
backup["Ф"]="F";backup["Ы"]="I";backup["В"]="V";backup["А"]="A";backup["П"]="P";backup["Р"]="R";backup["О"]="O";backup["Л"]="L";backup["Д"]="D";backup["Ж"]="ZH";backup["Э"]="E";
backup["ф"]="f";backup["ы"]="i";backup["в"]="v";backup["а"]="a";backup["п"]="p";backup["р"]="r";backup["о"]="o";backup["л"]="l";backup["д"]="d";backup["ж"]="zh";backup["э"]="e";
backup["Я"]="YA";backup["Ч"]="CH";backup["С"]="S";backup["М"]="M";backup["И"]="I";backup["Т"]="T";backup["Ь"]="'";backup["Б"]="B";backup["Ю"]="YU";
backup["я"]="ya";backup["ч"]="ch";backup["с"]="s";backup["м"]="m";backup["и"]="i";backup["т"]="t";backup["ь"]="'";backup["б"]="b";backup["ю"]="yu";

if (document.readyState) {
	box = document.createElement("div");
	document.body.appendChild(box);

	chrome.storage.sync.get("translit_key", function(obj){
		if (chrome.runtime.lastError) {
			return;
		}
		
		if (obj && obj["translit_key"]) {
			key = JSON.parse(obj["translit_key"]);
		} else {
			key = backup;
			var obj = {};
			obj["translit_key"] = JSON.stringify(backup);
			chrome.storage.sync.set(obj, function() {
				console.log('Data saved');
			});
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
		popup(finalString, event.pageX, event.pageY);
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