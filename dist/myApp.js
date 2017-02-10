(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
//Brower Actions Scripts
console.log('app.js running');


/*

Requires for this file
*/

let bookmarkData = require('./bookmarks/bookmarkData.js');
let displayBookmarks = require('./bookmarks/displayBookmarks.js');



/*

Initial concept is to have a bookmarks stored within the user s machine. 
There are 5 initial categories. 
When user clicks category, they are displayed with their favorite URL's that 
are within the category context. 
The user can add or remove bookmarks.


Retrieve initial bookmarks from Bookmarks.json
*/

var myBookmarks = bookmarkData.getBookmarks();


/*

Display categories under #nav-dean logo in a dropdown
*/

displayBookmarks.setCategories(myBookmarks);


$('.trigger-button').click(function(event) {
	event.stopPropagation();
	$('.dropdown').toggleClass('open');
});




// document.addEventListener("keypress", function(event) {
// 	console.log(event.target.value);
// 	if(event.keyCode == 13){
// 		console.log(event.target.value);
// 		localStorage.setItem('userInput', event.target.value);
// 	}
// });












},{"./bookmarks/bookmarkData.js":2,"./bookmarks/displayBookmarks.js":3}],2:[function(require,module,exports){
"use strict";


/*  

The purpose of this file is to store data,
as well as retrieve and display data. 
*/

let myBookmarks = {
	categories: [
	{id: 0, name: "HTML"},
	{id: 1, name: "Stylings"},
	{id: 2, name: "Javascript"},
	{id: 3, name: "jQuery"},
	{id: 4, name: "Miscellaneous"}]
};

let getBookmarks = () => myBookmarks;


module.exports = {getBookmarks};


},{}],3:[function(require,module,exports){
"use strict";


/*

The purpose of this file is to take pre-determined bookmarks, 
and to display them on the DOM whenever the user clicks on	
Dean's Face
*/

let setCategories = (bookmarks) => {
	console.log(bookmarks);
	let dropdown = ``;
	bookmarks.categories.forEach(function(category) {
		dropdown  += `<li id="${category.name}" class="category-drop text-center" href="#">${category.name}</li>`;
	});
	$('.dropdown-menu').append(dropdown);
};

module.exports = {setCategories};



},{}]},{},[1]);
