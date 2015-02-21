function russianToEnglish(russian) {
	russian = romanization;
	romanization = romanization.replace("а", "a").replace("б", "b").replace("в", "v").replace("г", "g").replace("д", "d");
	romanization = romanization.replace("е", "ye").replace("ё", "yo").replace("ж", "zh").replace("з", "z").replace("и", "i");
	romanization = romanization.replace("й", "y").replace("к", "k").replace("л", "l").replace("м", "m").replace("н", "n");
	romanization = romanization.replace("о", "o").replace("п", "p").replace("р", "r").replace("с", "s").replace("т", "t");
	romanization = romanization.replace("у", "u").replace("ф", "f").replace("х", "kh").replace("ц", "ts").replace("ч", "ch");
	romanization = romanization.replace("ш", "sh").replace("щ", "shch").replace("ъ", "").replace("ы", "y").replace("ь", "'");
	romanization = romanization.replace("э", "e").replace("ю", "yu").replace("я", "ya").replace("A", "A").replace("Б", "B");
	romanization = romanization.replace("B", "V").replace("Г", "G").replace("Д", "D").replace("E", "Ye").replace("Ё", "Yo");
	romanization = romanization.replace("Ж", "Zh").replace("З", "Z").replace("И", "I").replace("Й", "Y").replace("К", "K");
	romanization = romanization.replace("Л", "L").replace("M", "M").replace("H", "N").replace("О", "O").replace("П", "P");
	romanization = romanization.replace("P", "R").replace("C", "S").replace("T", "T").replace("Ф", "F").replace("X", "Kh");
	romanization = romanization.replace("Ц", "Ts").replace("Ч", "Ch").replace("Ш", "Sh").replace("Щ", "Shch").replace("Ъ", "");
	romanization = romanization.replace("Ы", "Y").replace("Ь", "'").replace("Э", "E").replace("Ю", "Yu").replace("Я", "Ya");
}