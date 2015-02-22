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