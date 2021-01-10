
var tags = [{name: "Code", subtags: ["Java", "Web Dev"]}, 
	{name: "Art", subtags: ["Illustration", "Character Design", "Game Art"]}, 
	{name: "Design", subtags: ["UI Design", "Logo Design"]},
	{name: "Games", subtags: ["Twine", "Ren'py"]}];


console.log(tags);
var tagHTML = "<ul>";

function tagsToNav() {
	
	for (i = 0; i < tags.length; i++) {
		tagHTML = tagHTML + "<li><h1><span class=\"drop\">></span><span class=\"category tag\">" + tags[i].name + "</span></h1><ul class=\"subfilters hiding tag\">";
		for (j = 0; j < tags[i].subtags.length; j++) {
			tagHTML = tagHTML + "<li>" + tags[i].subtags[j] + "</li>";
		}
		tagHTML = tagHTML + "</ul></li>";
		console.log(tagHTML);
		
	}

	tagHTML = tagHTML + "</ul>";

	document.getElementById("categoryFilters").innerHTML = tagHTML;
}

tagsToNav();

var drops = document.getElementsByClassName("drop");

for (i = 0; i < drops.length; i++) {
	drops[i].addEventListener("click", displaySubfilter);
}

function displaySubfilter() {
	var panel = this.parentElement.nextElementSibling;
	panel.classList.toggle("hiding");
	this.classList.toggle("droppedDown");
}

