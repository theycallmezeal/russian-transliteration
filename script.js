var finalString;
// gets selected text
document.onmouseup = function gText(e) {
	var t = '';
    t = (document.all) ? document.selection.createRange().text : document.getSelection();
    finalString = transliterate(t); // transliterates
    document.getElementById('romanised').value = finalString;
}
if (!document.all) document.captureEvents(Event.MOUSEUP);

var a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"A","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};
// transliterates text selected with gText
function transliterate(word){
	return word.split('').map(function (char) {
		return a[char] || char;
	}).join("");
}