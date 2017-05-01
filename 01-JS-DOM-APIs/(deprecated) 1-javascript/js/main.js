//------------------Section Fade In Opacity------------------
window.onload = function () {
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
//------------------------------------------------------------

//------------------------Jokes Button------------------------
document.addEventListener("DOMContentLoaded", init);
function init() {
	var button1 = document.getElementsByClassName("jokes-button")[0];
	button1.addEventListener('click', getJoke);
	var button2 = document.getElementsByClassName("error-button")[0];
	button2.addEventListener('click', getError);
}

function reqListenerJoke (){
	var json = {};
	try{
		json = JSON.parse(this.responseText);
	} catch (e) {}
	console.log(json);
	attachSection(json);
}

function getJoke() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.addEventListener("load", reqListenerJoke);
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
//---Show section content in red when a server error occurs---

function getError() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.addEventListener("load", reqListenerError);
	xmlhttp.open("GET", "http://httpstat.us/500");
	xmlhttp.send();
}

function reqListenerError (){
	var json = {};
	try{
		json = JSON.parse(this.responseText);
	} catch (e) {}
	if (this.status == 500){
		document.getElementsByClassName("sec")[0].style.background = "red";
	}
}
//---------------------------------Ex9---------------------------------
//--------------Standard Function to GET XmlHttpRequests--------------
var repo = document.getElementById("chosen-repo")

function getData(url, reqListenerStandard){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){
            reqListenerStandard(request.responseText);
        }
    }; 
    request.open('GET', url);
    request.send();
}

function reqListenerStandard(data) {
   console.log(data);
}

function repoButtonclick(repoValue) {
	getData("https://api.github.com/search/repositories?q="+repoValue, reqListenerStandard);
}

function repositoriosPedidos() {		
	var repositoriosFullNames = JSON.parse(this.responseText).items;
	if(repositoriosFullNames !== undefined) {
		repositoriosFullNames.forEach(function(elem) {
			appendNodeWithText(seccionRepositorio,"p",elem["full_name"]);
			var lista = document.createElement("ul");
			seccionRepositorio.appendChild(lista);
			crearliDeListas(lista,elem.owner,"login");
			crearliDeListas(lista,elem,"description","url","watchers_count");
		});
	}
}

//--------------------------------------------------------------
//Funciones para punto 10 --------------------------------------
function eliminarTagsFromParent(parent,nodoTag) {
	var nodosNoArray = seccionRepositorio.getElementsByTagName(nodoTag);
	var nodosArray = Array.prototype.slice.call(nodosNoArray);
	nodosArray.forEach(function(elem){parent.removeChild(elem)})
}

function teclaPressBuscador(){
		eliminarTagsFromParent(seccionRepositorio,"p");
		eliminarTagsFromParent(seccionRepositorio,"ul");

		seccionRepositorio.getElementsByTagName("span")[0].innerText = repoBuscadoCampo.value;
		pedirRecurso("GET", "https://api.github.com/search/repositories?q="+repoBuscadoCampo.value, true , repositoriosPedidos);
	}
}