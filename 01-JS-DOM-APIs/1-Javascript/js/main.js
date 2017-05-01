document.addEventListener("DOMContentLoaded",init);

//reusable function to append text
function appendText(parent, newHtmlTag, text){
	var newTag = document.createElement(newHtmlTag);
	var data2append = document.createTextNode(text);
	newTag.appendChild(data2append);
	parent.appendChild(newTag);
}
//reusable AJAX calls function
function getData(url, handler) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.addEventListener("load", handler);
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//---------------ex4 - Fades in First Section---------------
function sectionFadeIn(){
	var sec = document.getElementsByClassName("sec")[0];
    var op = 0.1;  // initial opacity
    sec.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        sec.style.opacity = op;
        sec.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
//-----------------------------------------------------------
//--------------------ex6 - Jokes Button.--------------------
function appendJoke() {
	var section = document.querySelector("section");
	var joke = JSON.parse(this.responseText);
	if (section.childElementCount > 1){
		cleanJoke(section, "p");
	}
	appendText(section,"p",joke.value.joke);
}

function askJoke() {
	getData("http://api.icndb.com/jokes/random", appendJoke);
}

function cleanJoke(parent,tag2delete) {
	var deleteThis = parent.getElementsByTagName(tag2delete);
	parent.removeChild(parent.childNodes[3]);
/*
	var deleteThis = parent.getElementsByTagName(tag2delete);
	var deleteThisArray = Array.prototype.slice.call(deleteThis);
	deleteThisArray.forEach(function(elem){parent.removeChild(elem)});
*/
}
//-----------------------------------------------------------
// ex8 - Show section content in red when a server error occurs.
function askError() {
	getData("http://httpstat.us/500", errorHandler);
}

function errorHandler() {
	if(this.status==500) {
		document.getElementsByClassName("sec")[0].style.background = "red";
	}
}
//-----------------------------------------------------------
// ex9 - display repository's full_name as a list in the right side of the screen
function repoHandler (){
	var sectionAppend = document.body.getElementsByClassName("search-repo")[0];
	var responseArray = JSON.parse(this.responseText).items;
	responseArray.forEach(function(elem) {
		appendText(sectionAppend, "p",elem["full_name"]);
		var list = document.createElement("ul");
		sectionAppend.appendChild(list);
		listCreator(list,elem.owner,"login");
		listCreator(list,elem,"description","url","id","score");
	})
}

function listCreator(parent, object){
	var cantArguments = arguments.length;
	var i = 2;
	for(i;i<cantArguments;i++) {
		var text2append = arguments[i] + ": "+ object[arguments[i]];
		appendText(parent,"li",text2append);
	}
}
//-----------------------------------------------------------
//-------------ex10 - search for any repository.-------------
function sendRepoInput(){
	var chosenRepo = document.getElementById("chosen-repo");
	var chosenRepoSection = document.body.getElementsByTagName("section")[1];
	cleanDocument(chosenRepoSection,"p");
	cleanDocument(chosenRepoSection,"ul");
	getData("https://api.github.com/search/repositories?q="+chosenRepo.value, repoHandler);
}

function cleanDocument(parent,tag2delete) {
	var deleteThis = parent.getElementsByTagName(tag2delete);
	var deleteThisArray = Array.prototype.slice.call(deleteThis);
	deleteThisArray.forEach(function(elem){parent.removeChild(elem)});
}
//-----------------------------------------------------------
//---ex12 - input a matrix of data. Attach it to the body.---
var peopleMatrix = [{name:"John",age:"23",car:"Ford"},{name:"Machun",age:"32",car:"BMW"},
				{name:"Letha",age:"12",car:"None"},{name:"Alex.",age:"64",car:"Fiat"}];

function crearTabla(matrix){
	var tabla = document.body.getElementsByTagName("table")[0];
	var linea;
	matrix.forEach(function(elem){
		linea = document.createElement("tr");
		tabla.appendChild(linea);
		appendText(linea,"td",elem.name);
		appendText(linea,"td",elem.age);
		appendText(linea,"td",elem.car);
	})
}

function init() {
	//exercise 4
	sectionFadeIn();

	//exercise 6
	document.body.getElementsByClassName("jokes-button")[0].addEventListener('click', askJoke);
	
	//exercise 8
	document.body.getElementsByClassName("error-button")[0].addEventListener('click', askError);

	//exercise 9
	var initialSearch = "Javascript";
	getData("https://api.github.com/search/repositories?q="+initialSearch, repoHandler);
	
	//exercise 10
	document.body.getElementsByClassName("repo-button")[0].addEventListener('click', sendRepoInput);

	//exercise 10
	crearTabla(peopleMatrix);

}