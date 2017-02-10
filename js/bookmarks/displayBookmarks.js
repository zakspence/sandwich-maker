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


