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

