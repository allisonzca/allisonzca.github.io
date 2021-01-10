
/*
class Tag {
	constructor(name, subtags) {
		this.name = name;
		this.subtags = subtags;
		this.selected = false;
		this.displaying = true;
	}

	// generate the filters in the side nav bar thing
	generateFilter() {
		var li = document.createElement("li");
		var h1 = document.createElement("h1");

		//arrow dropdown
		var spanDrop = document.createElement("span");
		var arrow = document.createTextNode(">");
		spanDrop.classList.add("drop");
		spanDrop.appendChild(arrow);
		spanDrop.addEventListener("click", displaySubfilter);
		h1.appendChild(spanDrop);

		//the word itself
		var spanTag = document.createElement("span");
		spanTag.id = "nav_" + this.name;
		var tagText = document.createTextNode(this.name);
		spanTag.appendChild(tagText);
		spanTag.addEventListener("click", this.toggleFilter);
		spanTag.classList.add("category");
		spanTag.classList.add("tag");
		h1.appendChild(spanTag);

		//the subtags
		var ul_SubTags = document.createElement("ul");
		ul_SubTags.classList.add("subfilters");
		ul_SubTags.classList.add("hiding");
		for (i = 0; i < this.subtags.length; i++) {
			ul_SubTags.appendChild(this.subtags[i].generateFilter());
		}

		h1.appendChild(ul_SubTags);
		li.appendChild(h1);
		return li;
	}

	// generate the title at the top
	generateTitle() {
		var html = document.createElement("<span>");
		html.id = "title_" + this.name;
		var title = document.createTextNode(this.name);
		html.appendChild(title).addEventListener("click", deselectedFilter);
		return html;
	}

	// when u click on the big tag
	toggleFilter() {
		this.selected = !selected;
		if (selected) {
			for (i = 0; i < this.subtags.length; i++) {
				this.subtags[i].selectedFilter();
			}
		} else {
			for (i = 0; i < this.subtags.length; i++) {
				this.subtags[i].deselectedFilter();
			}
		}
	}

	selectedFilter() {
		this.selected = true;
	}

	deselectedFilter() {
		this.selected = false;
	}
	// check if all subtags are selected
	updateTagSelect() {
		for (i = 0; i < this.subtags.length; i++) {
			if (!subtags[i].selected) {
				this.selected = false;
				return ;
			}
		}
		this.selected = true;
	}

	count() {
		return 1 + subtags.length;
	}

	addSubtag(name) {
		var newTags = [subtags.length + 1];
		for (i = 0; i < subtags.length; i++) {
			newTags[i] = subtags[i];
		}
		newTags[subtags.length] = new Subtag(name);
		this.subtags = newTags;
	}

}

class Subtag extends Tag{
	constructor(name) {
		super(name, [0]);
		this.displaying = false;
	}

	generateFilter() {
		var item = document.createElement("li");
		item.classList.add("tag");
		var filterName = document.createTextNode(this.name);
		item.appendChild(filterName);
		item.id = this.name;
		item.addEventListener("click", this.toggleFilter);
		return item;
	}

	// when u click on the small tag
	toggleFilter() {
		this.selected = !selected;
	}

	count() {
		return 1;
	}

	addSubtag(name) {
		return;
	}

	
}

var tagObjects = [new Tag("Code", [new Subtag("Java"), new Subtag("Web Dev")]),
					new Tag("Art", [new Subtag("Illustration"), new Subtag("Character Design"), new Subtag("Game Art")]),
					new Tag("Design", [new Subtag("UI Design"), new Subtag("Graphic Design")]),
					new Tag("Games", [new Subtag("Twine"), new Subtag("Ren'Py")])
				];


*/
var tags = [{name: "Code", subtags: ["Java", "Web Dev"]}, 
	{name: "Art", subtags: ["Illustration", "Character Design", "Game Art"]}, 
	{name: "Design", subtags: ["UI Design", "Logo Design"]},
	{name: "Games", subtags: ["Twine", "Ren'py"]}];




/*
var tagChildren = [{name: "Java", parent: tags[0]},
	{name: "Web Dev", parent: [0]},
	{name: "Illustration", parent: [1]},
	{name: "Character Design", parent: [1]},
	{name: "Game Art", parent: [1]},
	{name: "UI Design", parent: [2]},
	{name: "Logo Design", parent: [2]},
	{name: "Twine", parent: [3]},
	{name: "Ren'Py", parent: [3]}];*/


var tagHTML = "<ul>";


function tagsToNav() {
	/*
	var ul = document.createElement("ul");

	for (i = 0; i < tagObjects.length; i++) {
		ul.appendChild(tagObjects[i].generateFilter());
	}

	var sidebar = document.getElementById("categoryFilters");
	sidebar.appendChild(ul);*/

	
	for (i = 0; i < tags.length; i++) {

		tagHTML = tagHTML + "<li><h1><span class=\"drop\">></span><span id=\"" + tags[i].name + "\" class=\"category tag\">" + tags[i].name + "</span></h1><ul class=\"subfilters hiding\">";
		for (j = 0; j < tags[i].subtags.length; j++) {
			tagHTML = tagHTML + "<li id=\"" + tags[i].subtags[j] + "\" class=\"tag\">" + tags[i].subtags[j] + "</li>";
		}
		tagHTML = tagHTML + "</ul></li>";
		
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


var tagList = document.getElementsByClassName("tag");
var filters = [tagList.length];
var noneSelected = true;

for (i = 0; i < tagList.length; i++) {
	tagList[i].addEventListener("click", toggleFilters);
	filters[i] = {element: tagList[i], name: tagList[i].id, selected: false};
}


function updateTitle() {
	var title = document.getElementById("selectedTagsTitle");
	title.innerHTML = "";
	var filterTitle = "";
	var noneSelected = true;
	var allSelected = false;

	var categories = document.getElementsByClassName("category");

	for (i = 0; i < filters.length; i++) {
		if (filters[i].selected) {
			noneSelected = false;
			filterTitle = filterTitle + "<span id=\"title_" + filters[i].name + "\">" + filters[i].name + "</span>, ";
		}
		else {
			allSelected = false;
		}
	}

	if (noneSelected || allSelected) {
		title.innerHTML = "All Projects";
	} 
	else {
		title.innerHTML = filterTitle.substring(0, filterTitle.length - 2);
	
	}
}

updateTitle();

function toggleShowingTag(id) {
	for (i = 0; i < filters.length; i++) {
		if (filters[i].name == id) {
			filters[i].selected = !filters[i].selected;
		}
	}
}

function toggleFilters() {
	this.classList.toggle("selectedFilter");
	toggleShowingTag(this.id);
	var title = document.getElementById("selectedTagsTitle");

	if (this.classList.contains("category")) {
		var tagsInCategory = this.parentElement.parentElement.getElementsByTagName("li");
		if (this.classList.contains("selectedFilter")) {
			for (i = 0; i < tagsInCategory.length; i++) {
				tagsInCategory[i].classList.add("selectedFilter");
			}
		}
		else {
			for (i = 0; i < tagsInCategory.length; i++) {
				tagsInCategory[i].classList.remove("selectedFilter");
			}
		}
		
	} else {
		var parentTag = this.parentElement.parentElement.getElementsByClassName("category")[0];
		var tagsInCategory = parentTag.parentElement.parentElement.getElementsByClassName("subfilters")[0].getElementsByTagName("li");
		console.log(parentTag);
		console.log(tagsInCategory);
		/*
		if (parentTag.classList.contains("selectedFilter")) {
			parentTag.classList.remove("selectedFilter");
		}

		*/
		var allSelected = true;
		for (i = 0; i < tagsInCategory.length; i++) {
			if (!tagsInCategory[i].classList.contains("selectedFilter")) {
				allSelected = false;
				break;
			}
		}
		

		if (allSelected) {
			parentTag.classList.add("selectedFilter");
		} else {
			parentTag.classList.remove("selectedFilter");
		}
	}

	updateTitle();
}




var drops = document.getElementById("sortDrop").getElementsByTagName("span");

for (i = 0; i < drops.length; i++) {
	drops[i].addEventListener("click", 
		function() { 
			for (i = 0; i < drops.length; i++) {
				drops[i].classList.toggle("hiding");
			}
		});
}


