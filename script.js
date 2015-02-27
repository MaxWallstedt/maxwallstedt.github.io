function rndUrl(num, min, max) {
	var rndUrl = "https://www.random.org/integers/";

	rndUrl += "?num=" + num +
	          "&min=" + min +
	          "&max=" + max +
	          "&col=" + num +
	          "&base=10&format=plain&rnd=new";

	return rndUrl;
}

function getRnd() {
	var xmlhttp;
	var out;
	var url;

	out = document.getElementById("output");
	out.value = "...";
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			out.value = xmlhttp.responseText;
		}
	};
	url = rndUrl(1, 0, 100);
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function initPage() {
	document.getElementById("rndBtn").onclick = function() {
		getRnd();
	};
}

window.onload = function() {
	initPage();
};
