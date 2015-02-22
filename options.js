var key = {};
var button;

window.onload = function (e) {
	e.preventDefault();
	chrome.storage.sync.get("translit_key", function(obj){
		if (chrome.runtime.lastError) {
			return;
		}
		
		if (obj) {
			key = JSON.parse(obj["translit_key"]);
			for (var x in key) {
				addRow(x, key[x]);
			}
		}
	});
	
    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" name="letter"/></td>';
        cols += '<td><input type="text" name="translit"/></td>';

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
	
	cols += '<td><input type="text" name="letter" maxlength="1" value="' + col1 + '"></td>';
	cols += '<td><input type="text" name="translit" value="' + col2 + '"></td>';

	cols += '<td><input type="button" class="ibtnDel"  value="Delete"></td>';
	newRow.append(cols);
	$("table.order-list").append(newRow);
}

function saveLetters() {
	var allLetters = [];
	var rows = document.getElementsByTagName("input");
	for (var x in rows) {
		var letter = rows[x];
		if (letter.type == "text") {
			allLetters.push(letter.value);
		}
	}
	
	var key = {};
	while (allLetters.length > 0) {
		var one = allLetters.pop();
		var two = allLetters.pop();
		key[two] = one;
	}
	
	var obj = {};
	obj["translit_key"] = JSON.stringify(key);
	chrome.storage.sync.set(obj, function() {
		console.log('Data saved');
	});
}