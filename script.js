var box;
var lastString = "x";
window.onload = function () {
	box = document.createElement("div");
	document.body.appendChild(box);
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

var key = [];
key["Ё"]="YO";key["Й"]="I";key["Ц"]="TS";key["У"]="U";key["К"]="K";key["Е"]="E";key["Н"]="N";key["Г"]="G";key["Ш"]="SH";key["Щ"]="SCH";key["З"]="Z";key["Х"]="H";key["Ъ"]="'";
key["ё"]="yo";key["й"]="i";key["ц"]="ts";key["у"]="u";key["к"]="k";key["е"]="e";key["н"]="n";key["г"]="g";key["ш"]="sh";key["щ"]="sch";key["з"]="z";key["х"]="h";key["ъ"]="'";
key["Ф"]="F";key["Ы"]="I";key["В"]="V";key["А"]="A";key["П"]="P";key["Р"]="R";key["О"]="O";key["Л"]="L";key["Д"]="D";key["Ж"]="ZH";key["Э"]="E";
key["ф"]="f";key["ы"]="i";key["в"]="v";key["а"]="a";key["п"]="p";key["р"]="r";key["о"]="o";key["л"]="l";key["д"]="d";key["ж"]="zh";key["э"]="e";
key["Я"]="YA";key["Ч"]="CH";key["С"]="S";key["М"]="M";key["И"]="I";key["Т"]="T";key["Ь"]="'";key["Б"]="B";key["Ю"]="YU";
key["я"]="ya";key["ч"]="ch";key["с"]="s";key["м"]="m";key["и"]="i";key["т"]="t";key["ь"]="'";key["б"]="b";key["ю"]="yu";

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
	lastString = "x";
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