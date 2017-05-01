document.addEventListener("DOMContentLoaded", run);

//ex1 - Movie Object
function Movie (title, year, duration) {
	EventEmitter.call(this);
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.actors = [];

    this.play = function() {
    	console.log("Playing:", title);
    	this.emit("play");
    };
    this.pause = function() {
    	console.log("Paused:", title);
    	this.emit("pause");
    };
    this.resume = function() {
    	console.log("Resumed:", title);
    	this.emit("resume");
    };
    this.addCast = function (cast){
    	this.actors = this.actors.concat(cast);
    }
}

//ex 3 - Create EventEmitter
function EventEmitter() {
	this.map = Object.create(null);

	this.on = function (event, action) {
		this.map[event] = action;
	};

	this.emit = function (event) {
		if (this.map[event]!=null){
			this.map[event](event);
		}
	};

	this.off = function(event){
		delete this.map[event];
	};
}

//ex 4 - Make Movie a subclass of EventEmitter
Movie.prototype = Object.create(EventEmitter.prototype);

//ex 5 Make Logger class with a method that will output info to the console
function Logger(){
	this.log = function(info) {
		console.log("The " + info + " event has been emitted");
	}
}

//ex 6 - create object Social
var social = {
	share: function(friendName){
		return "Share " + this.title + " with " + friendName;
	},
	like: function(friendName){
		return friendName +" likes "+ this.title;
	}
}

//ex 7 - Create an Actor class
function Actor(name,age){
	this.name = name;
	this.age = age;
}

//----------------------------------------------------
function run() {
	var logger = new Logger();

	console.log("Exercise 2{")
	let terminator = new Movie("The Terminator","1984","108");
	terminator.play();
	terminator.pause();
	terminator.resume();
	let scanners = new Movie("Scanners","1981","103");
	scanners.play();
	scanners.pause();
	scanners.resume();
	console.log("}end Exercise 2");
	console.log("");
//----------------------------------------------------
	console.log("Exercise 5{")
	terminator.on("play",logger.log);
	terminator.on("pause",logger.log);
	terminator.on("resume",logger.log);
	terminator.play();
	terminator.pause();
	terminator.resume();
	terminator.off("play");
	terminator.off("pause");
	terminator.off("resume");
	console.log("");

	scanners.on("play",logger.log);
	scanners.on("pause",logger.log);
	scanners.on("resume",logger.log);
	scanners.play();
	scanners.pause();
	scanners.resume();
	scanners.off("play");
	scanners.off("pause");
	scanners.off("resume");
	console.log("}end Exercise 5");
	console.log("");
//----------------------------------------------------
	console.log("Exercise 6 {")
	Object.assign(terminator, social);
	Object.assign(scanners, social);
	console.log(terminator.share('Mike Blossom'));
	console.log(scanners.like('Brittney Elaine'));
	console.log("}end Exercise 6");
	console.log("");
//----------------------------------------------------
	console.log("Exercises 7, 8 {")
	let arnold = new Actor('Arnold Schwarzenegger', 50);
	
	let cast = [
	new Actor('Paul Winfield', 50),
	new Actor('Michael Biehn', 50),
	new Actor('Linda Hamilton', 50)];

	terminator.addCast(arnold);
	terminator.addCast(cast);
	console.log(terminator.actors);

	cast = [
	new Actor('Kyle MacLachlan', 58),
	new Actor('Michael Ironside', 67),
	new Actor("Jennifer O'Neill", 69),];
	scanners.addCast(cast);
	console.log(scanners.actors);

	console.log("}end Exercises 7, 8");
}