var finalString;
// gets selected text
document.onmouseup = function (e) {
	var t = '';
    t = (document.all) ? document.selection.createRange().text : document.getSelection();
    finalString = transliterate(t); // transliterates
    document.getElementById('romanised').value = finalString;
}
if (!document.all) document.captureEvents(Event.MOUSEUP);

var A = [];
A["Ё"]="YO";A["Й"]="I";A["Ц"]="TS";A["У"]="U";A["К"]="K";A["Е"]="E";A["Н"]="N";A["Г"]="G";A["Ш"]="SH";A["Щ"]="SCH";A["З"]="Z";A["Х"]="H";A["Ъ"]="'";
A["ё"]="yo";A["й"]="i";A["ц"]="ts";A["у"]="u";A["к"]="k";A["е"]="e";A["н"]="n";A["г"]="g";A["ш"]="sh";A["щ"]="sch";A["з"]="z";A["х"]="h";A["ъ"]="'";
A["Ф"]="F";A["Ы"]="I";A["В"]="V";A["А"]="A";A["П"]="P";A["Р"]="R";A["О"]="O";A["Л"]="L";A["Д"]="D";A["Ж"]="ZH";A["Э"]="E";
A["ф"]="f";A["ы"]="i";A["в"]="v";A["а"]="a";A["п"]="p";A["р"]="r";A["о"]="o";A["л"]="l";A["д"]="d";A["ж"]="zh";A["э"]="e";
A["Я"]="YA";A["Ч"]="CH";A["С"]="S";A["М"]="M";A["И"]="I";A["Т"]="T";A["Ь"]="'";A["Б"]="B";A["Ю"]="YU";
A["я"]="ya";A["ч"]="ch";A["с"]="s";A["м"]="m";A["и"]="i";A["т"]="t";A["ь"]="'";A["б"]="b";A["ю"]="yu";

function transliterate(word) {
	word = word.toString();
	var result = "";
	for (var i = 0; i < word.length; i++) {
		var cyrillic = A[word.charAt(i) + ""];
		if (cyrillic != undefined) {
			result += cyrillic;
		} else {
			result += word.charAt(i) + "";
		}
	}
	console.log(result);
    return result;
}