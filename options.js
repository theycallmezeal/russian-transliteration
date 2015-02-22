var key = {};
var button;

<button type="button" onclick="chooseLang('russian')">Russian</button><button type="button" onclick="chooseLang('greek')">Greek</button>

var russian = {};
russian["Ё"]="Yo";russian["Й"]="I";russian["Ц"]="Ts";russian["У"]="U";russian["К"]="K";russian["Е"]="E";russian["Н"]="N";russian["Г"]="G";russian["Ш"]="Sh";russian["Щ"]="Sch";russian["З"]="Z";
russian["Х"]="H";russian["Ъ"]="'";russian["ё"]="yo";russian["й"]="i";russian["ц"]="ts";russian["у"]="u";russian["к"]="k";russian["е"]="e";russian["н"]="n";russian["г"]="g";russian["ш"]="sh";
russian["щ"]="sch";russian["з"]="z";russian["х"]="h";russian["ъ"]="'";russian["Ф"]="F";russian["Ы"]="I";russian["В"]="V";russian["А"]="A";russian["П"]="P";russian["Р"]="R";russian["О"]="O";
russian["Л"]="L";russian["Д"]="D";russian["Ж"]="Zh";russian["Э"]="E";russian["ф"]="f";russian["ы"]="i";russian["в"]="v";russian["а"]="a";russian["п"]="p";russian["р"]="r";russian["о"]="o";
russian["л"]="l";russian["д"]="d";russian["ж"]="zh";russian["э"]="e";russian["Я"]="Ya";russian["Ч"]="Ch";russian["С"]="S";russian["М"]="M";russian["И"]="I";russian["Т"]="T";russian["Ь"]="'";
russian["Б"]="B";russian["Ю"]="Yu";russian["я"]="ya";russian["ч"]="ch";russian["с"]="s";russian["м"]="m";russian["и"]="i";russian["т"]="t";russian["ь"]="'";russian["б"]="b";russian["ю"]="yu";

var greek = {};
greek["Α"]="A";greek["Β"]="V";greek["Γ"]="G";greek["Δ"]="D";greek["Ε"]="E";greek["Ζ"]="Z";greek["Η"]="I";greek["Θ"]="Th";greek["ι"]="I";greek["Ι"]="I";greek["Κ"]="K";greek["Λ"]="L";greek["Μ"]="M";
greek["Ν"]="N";greek["Ξ"]="X";greek["Ο"]="O";greek["Π"]="P";greek["Ρ"]="R";greek["Σ"]="S";greek["Τ"]="T";greek["Υ"]="Y";greek["Φ"]="F";greek["Χ"]="X";greek["Ψ"]="Ps";greek["Ω"]="O";greek["α"]="a";
greek["β"]="v";greek["ϐ"]="v";greek["γ"]="g";greek["δ"]="d";greek["ε"]="e";greek["ϵ"]="e";greek["ζ"]="z";greek["η"]="i";greek["θ"]="th";greek["ϑ"]="th";greek["ι"]="i";greek["i"]="i";greek["κ"]="k";
greek["ϰ"]="k";greek["λ"]="l";greek["μ"]="m";greek["ν"]="n";greek["ξ"]="x";greek["ο"]="o";greek["π"]="p";greek["ρ"]="R";greek["ϱ"]="r";greek["σ"]="s";greek["ϱ"]="s";greek["τ"]="t";greek["υ"]="y";
greek["ϕ"]="f";greek["φ"]="f";greek["χ"]="x";greek["ψ"]="ps";greek["ω"]="o";

window.onload = function (e) {
	e.preventDefault();
	chrome.storage.sync.get("translit_key", function(obj){
		if (chrome.runtime.lastError) {
			return;
		}
		
		if (obj) {
			key = JSON.parse(obj["translit_key"]);
			for (var x in key) {
				console.log(x + "+" + key[x]);
				addRow(x, key[x]);
			}
		}
	});
	
    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" name="letter' + '"/></td>';
        cols += '<td><input type="text" name="translit' + '"/></td>';

        cols += '<td><input type="button" class="ibtnDel"  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        $('#addrow').attr('disabled', false).prop('value', "Add Row");
    });
	
	button = document.getElementById("save");
	button.onclick = saveLetters;
};

function addRow(col1, col2) {
	var newRow = $("<tr>");
	var cols = "";
	
	console.log('trying to add row' + col1 + col2);
	
	cols += '<td><input type="text" name="letter" value="' + col1 + '"></td>';
	cols += '<td><input type="text" name="translit" value="' + col2 + '"></td>';

	cols += '<td><input type="button" class="ibtnDel"  value="Delete"></td>';
	newRow.append(cols);
	$("table.order-list").append(newRow);1
}

function saveLetters() {
	var rows = document.getElementsByTagName("tr");
	for (var x in rows) {
		var letter = rows[x].children;
		console.log(letter);
	}
}