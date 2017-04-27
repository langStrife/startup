document.addEventListener("DOMContentLoaded", init);

window.onload = function () {
	document.getElementsByClassName("sec")[0].style.visibility = "visible";
}

var button = document.getElementsByClassName("jokes-button")[0];

function init() {
	button.addEventListener('click', getData);
}

function getData() {
	function reqListener (){
		var json = {};
		try{
			json = JSON.parse(this.responseText);
		} catch (e) {}

		console.log(json);
		attachSection(json);
	}
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.addEventListener("load", reqListener);
	xmlhttp.open("GET", "js\\data.json");
	xmlhttp.send();
}

function attachSection(json) {
	JSON.stringify(json);
	var para = document.createElement("P");
	var section = document.querySelector("section");
	para.innerHTML =json.value.joke;
	document.querySelector("section").appendChild(para);    
}