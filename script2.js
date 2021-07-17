var main = document.getElementById("main");
var navFull = document.getElementById("navigation");
var navList = document.getElementById("navLinks");

var menu = document.getElementById("tune");
var hamburger = document.getElementById("hamburger");
var profile = document.getElementById("profile");

var selectedTitle = document.getElementById("selectedCategories");
var cardBox = document.getElementById("cardContainer");
var projContainer = document.getElementById("proj");
var accessibility = document.getElementById("accessibility");

var currentPage = "gallery";


// transitions --------------------------------------------------------


function fadeOut(obj) {
	d3.select(obj)
		.style("opacity", 1);
	d3.select(obj)
		.transition()
		.duration(250)
		.ease(d3.easeLinear)
		.style("opacity", 0);

	obj.classList.add("hidden");

	}


function fadeIn(obj) {

	obj.classList.remove("hidden");

	d3.select(obj)
		.style("opacity", 0);
	d3.select(obj)
		.transition()
		.duration(250)
		.ease(d3.easeLinear)
		.style("opacity", 1);
		
	}


//data -----------------------------------------

var art = "art";
var code = "code";
var design = "design";
var games = "games";


var colorKey = [{cat: art, color: "ce94b7"},
	{cat: code, color: "e47258"},
	{cat: design, color: "8cc1e6"},
	{cat: games, color: "bbd8a8"}];

var categories = [art, code, design, games];

var projects = [{name: "test1", category: art, month: 1, year: 2021, thumb: "http://tinyurl.com/6ja33xb5", desc: "lorem ipsum"}, 
				{name: "test2", category: code, month: 2, year: 2021, thumb: "http://tinyurl.com/e539xsfk", desc: "dolor"},
				{name: "test3", category: design, month: 3, year: 2021, thumb: "http://tinyurl.com/nx9fjmxx", desc: "si"}, 
				{name: "test4", category: games, month: 1, year: 2020, thumb: "http://tinyurl.com/3p4r9tk5", desc: "amet"}];


//select Categories ----------------------------



for (i = 0; i < categories.length; i++) {
	var cat = document.createElement("li");
	cat.id = categories[i];
	cat.innerHTML = categories[i];
	cat.addEventListener("click", selectCat);
	cat.classList.add("isSelected");
	cat.classList.add("filter");
	document.getElementById("navLinks").appendChild(cat);
}

var selectedCats = categories.map((a) => a);
var confirmedCats = categories.map((a) => a);


var menuOpen = false;
menu.addEventListener("click", displayMobileNav);
function displayMobileNav() {
	if (!menuOpen) {
		menuOpen = true;
		main.style.display = "none";
		document.getElementById("navLinks").style.display = "block";
		menu.firstChild.src = "symbols/close_black_24dp.svg";
		menu.classList.toggle("spacer");
		hamburger.style.display = "none";
	} else {
		menuOpen = false;
		main.style.display = "block";
		document.getElementById("navLinks").style.display = "none";
		menu.firstChild.src = "symbols/tune-24px.svg";
		menu.classList.toggle("spacer");
		hamburger.style.display = "inline-block";
	}
	
}


// for the nav tags
function selectCat() {

	var itemID = this.id;
	selectFunc(itemID)
}


//for the title tags
function deselectCat() {

	var itemID = this.innerHTML;
	selectFunc(itemID);
}


function selectFunc(itemID) {
	
	if (!selectedCats.includes(itemID)) {
		document.getElementById(itemID).classList.toggle("isSelected");

		selectedCats.push(itemID);
	} else {
		document.getElementById(itemID).classList.toggle("isSelected");
		var index = selectedCats.indexOf(itemID);
		selectedCats.splice(index, 1);
	}

	confirmCat();


}



function confirmCat() {
	for (i = 0; i < confirmedCats.length; i++) {
		confirmedCats.pop();
	}

	confirmedCats = selectedCats.map((a) => a);

	/*

	if (selectedCats.length == 0) {
		selectedCats = categories.map((a) => a);
		confirmedCats = categories.map((a) => a);
	} else {
		confirmedCats = selectedCats.map((a) => a);
	}*/

	addProjects();

}


// select menu ------------------------------------------------------------------

hamburger.addEventListener("click", toggleHamburger);
document.getElementById("aboutLink").addEventListener("click", toggleAbout);
document.getElementById("commissionLink").addEventListener("click", toggleComms);

var hamOpen = false;
function toggleHamburger() {
	if (!hamOpen) {
		hamOpen = true;
		main.style.display = "none";
		menu.style.display = "none";
		hamburger.firstChild.src = "symbols/close_black_24dp.svg";
		hamburger.classList.toggle("spacer");
		profile.style.display = "block";
	} else {
		hamOpen = false;
		main.style.display = "block";
		menu.style.display = "inline-block";
		hamburger.firstChild.src = "symbols/menu-24px.svg";
		hamburger.classList.toggle("spacer");
		profile.style.display = "none";
	}
}




// add project cards belonging to selected categories to main -------------------


function addProjects() {

	for (i = 0; i < confirmedCats.length; i++) {
		console.log(confirmedCats[i]);
	}



	updateTitle();

	cardBox.innerHTML = "";

	for (i = 0; i < projects.length; i++) {
		var current = projects[i];
		if (confirmedCats.includes(current.category)) {
			var item = document.createElement("div");
			item.addEventListener("click", showProject)
			

			/*
			var thumbnail = document.createElement("img");
			thumbnail.src = current.thumb;
			item.appendChild(thumbnail);
			console.log(thumbnail); */


			var cardTitle = document.createElement("h4");
			cardTitle.innerHTML = current.name;
			item.appendChild(cardTitle);
			item.id = current.name;

			
			
			

			item.classList.add(current.category);
			item.classList.add("card");
			var itemWrapper = document.createElement("div");
			itemWrapper.classList.add("cardWrap");
			itemWrapper.style.backgroundImage = "url(\'" + current.thumb + "\')";

			itemWrapper.appendChild(item);
			cardBox.appendChild(itemWrapper);

			console.log(item);
			console.log(i);
		}
	}

	

	console.log("added");
}


// update title -------------------

function updateTitle() {
	selectedTitle.innerHTML = "";

	for (i = 0; i < confirmedCats.length; i++) {
		var cat = document.createElement("span");
		cat.id = confirmedCats[i] + "Title";
		cat.innerHTML = confirmedCats[i];
		cat.classList.add("categoryTitle");
		cat.addEventListener("click", deselectCat);
		selectedTitle.appendChild(cat);
		var spacer = document.createElement("span");
		spacer.innerHTML = ", ";

		if (i != confirmedCats.length - 1) {
			selectedTitle.appendChild(spacer);
		}
		
	}

	if (confirmedCats.length == 0) {
		selectedTitle.innerHTML = "none selected.";
	}

}


/*
menu.addEventListener("click", toggleMenu);
function toggleMenu() {

	if (document.getElementById("navLinks").style.visibility == "hidden") {
		document.getElementById("navLinks").style.visibility == "visible";
	} else {
		document.getElementById("navLinks").style.visibility == "hidden";
	}
}*/


// select card -----------------------------------------------------

var cardX = document.getElementById("closeCard");
cardX.addEventListener("click", showProject);

function showProject() {

	for (var i = 0; i < projects.length; i++) {
		if (projects[i].name == this.id) {
			var currentProj = projects[i];
			console.log("id: " + this.id);
			console.log(currentProj.name);
			console.log(currentProj.thumb);
			
			toggleProject();

			var projName = document.getElementById("projName");
			var projGallery = document.getElementById("projGallery");
			var projDate = document.getElementById("projDate");
			var projCat = document.getElementById("projCat");
			var projDesc = document.getElementById("projDesc");
			var mainImage = document.createElement("img");
			mainImage.src = currentProj.thumb;

			projName.innerHTML = currentProj.name;
			projGallery.innerHTML = "";
			//projGallery.appendChild(mainImage);
			projGallery.style.backgroundImage = "url(\'" + currentProj.thumb + "\')";
			projDate.innerHTML = currentProj.month + "/" + currentProj.year;
			projCat.innerHTML = currentProj.category;
			projDesc.innerHTML = currentProj.desc;

			break;
		}
	}


}





function toggleProject() {
	if (currentPage == "project") {
		return ;
	}


	cardBox.classList.toggle("hidden");

	fadeIn(projContainer);
	fadeOut(selectedTitle);
	//projContainer.classList.toggle("hidden");
	//selectedTitle.classList.toggle("hidden");

	//toggleNavLinks();

	currentPage = "project";

	//accessibility.classList.toggle("hidden");

}

var aboutPage = document.getElementById("bio");
var commPage = document.getElementById("commissionSheet");


function closeMenu() {
	navFull.classList.add("hidden");
}


function toggleAbout() {
	if (currentPage == "about") {
		if (width < 640) {
			toggleHamburger();
		}
		return ;
	}

	/*toggleItem(aboutPage);*/

	if (width < 640) {
		toggleHamburger();
	}

	/*
	cardBox.classList.add("hidden");
	projContainer.classList.add("hidden");
	selectedTitle.classList.add("hidden");
	commPage.classList.add("hidden");*/

	if (!aboutPage.classList.contains("hidden")) {
		document.getElementById("aboutLink").addEventListener("click", toggleAbout);
		fadeOut(aboutPage);
		
	} else {
		document.getElementById("aboutLink").removeEventListener("click", toggleAbout);
		document.getElementById("commissionLink").addEventListener("click", toggleComms);

		fadeIn(aboutPage);
		fadeOut(cardBox);
		fadeOut(selectedTitle);
		fadeOut(commPage);
		//fadeOut(navList);
		fadeOut(projContainer);

		currentPage = "about";

		document.getElementById("homeLink").classList.remove("selectedPage");
		document.getElementById("commissionLink").classList.remove("selectedPage");
		document.getElementById("aboutLink").classList.add("selectedPage");
	}

}

function toggleComms() {
	if (currentPage == "comms") {
		return ;
	}

	if (width < 640) {
		toggleHamburger();
	}

	//toggleItem(commPage);

	/*
	cardBox.classList.add("hidden");
	projContainer.classList.add("hidden");
	selectedTitle.classList.add("hidden");
	aboutPage.classList.add("hidden");*/


	if (!commPage.classList.contains("hidden")) {
		document.getElementById("commissionLink").addEventListener("click", toggleComms);
		fadeOut(commPage);

	} else {
		document.getElementById("commissionLink").removeEventListener("click", toggleComms);
		document.getElementById("aboutLink").addEventListener("click", toggleAbout);
		fadeIn(commPage);
		fadeOut(aboutPage);
		fadeOut(cardBox);
		fadeOut(selectedTitle);
		//fadeOut(navList);
		fadeOut(projContainer);

		currentPage = "comms";

		document.getElementById("homeLink").classList.remove("selectedPage");
		document.getElementById("commissionLink").classList.add("selectedPage");
		document.getElementById("aboutLink").classList.remove("selectedPage");
	}



}

var backHome = document.getElementsByClassName("backHome");
for (var i = 0; i < backHome.length; i++) {
	backHome[i].addEventListener("click", toggleGallery);
}


document.getElementById("homeLink").addEventListener("click", toggleGallery);


function toggleGallery() {
	if (currentPage == "gallery") {
		return ;
	}


	if (width < 640) {
		toggleHamburger();
	}


	if (!cardBox.classList.contains("hidden")) {
		fadeOut(cardBox);
		document.getElementById("homeLink").removeEventListener("click", toggleGallery);

	} else {
		fadeOut(aboutPage);
		fadeOut(commPage);
		fadeOut(projContainer);
		fadeIn(cardBox);
		fadeIn(selectedTitle);
		//fadeIn(navList);
		currentPage = "gallery";
		document.getElementById("homeLink").classList.add("selectedPage");
		document.getElementById("commissionLink").classList.remove("selectedPage");
		document.getElementById("aboutLink").classList.remove("selectedPage");



	}

	
	document.getElementById("aboutLink").addEventListener("click", toggleAbout);
	document.getElementById("commissionLink").addEventListener("click", toggleComms);
	
}



function toggleNavLinks() {
	if (!navList.classList.contains("hidden")) {
		fadeOut(navList);
	} else {
		fadeIn(navList);
	}
}


function toggleItem(item) {
	if (!item.classList.contains("hidden")) {
		fadeOut(item);
	} else {
		fadeIn(item);
	}
}

document.getElementById("closeCard").addEventListener("click", function () {
	toggleGallery();
	if (width < 640) {
		toggleHamburger();	
	}
	});


// initialize -------------------------------------------------------

confirmCat();
selectedTitle.innerHTML = "All Projects";


// bg animation ----------------------------------------------------------

accessibility.addEventListener("click", toggleAnimation);


var accessibilityMobile = document.getElementById("accessibilityMobile");

accessibilityMobile.addEventListener("click", toggleAnimation);


var isPlaying = false;


var width = window.innerWidth;
var height = window.innerHeight;

var bg = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("position", "fixed")
	.style("z-index", -100)
	.style("top", 0);

var container = d3.select("body");


var animation1;
function toggleAnimation() {
	if (isPlaying) {
		isPlaying = false;
		clearInterval(animation1);
		this.innerHTML = "turn on bg animation";

	} else {
		isPlaying = true;
		this.innerHTML = "turn off bg animation";

		bg.transition()
			.duration(1500);
		animation1 = setInterval(function() {
			var xPos = Math.random() * width;
			var yPos =  Math.random() * height;
			var rings = Math.random() * 5 + 0.5;

			/*
			for (var i = 0; i < rings; i++) {
				bg.append("circle")
				.attr("cx", xPos)
				.attr("cy", yPos)
				.attr("r", 0)
				.style("stroke", "white")
				.style("fill", "none")
				.attr("opacity", Math.random() * 0.75)
				.transition()
					.duration(2000)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeQuadOut)
		            .attr("cx", xPos)
		            .attr("cy", yPos)
		            .attr("r", rings * 3 * (i + 1))
		            .attr("opacity", 1)
		        .transition()
					.duration(2000)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeQuadIn)
		            .attr("cx", xPos)
		            .attr("cy", yPos)
		            .attr("r", 0)
		            .attr("opacity", 0)
		            .remove();}
		       }
			*/


			bg.append("circle")
				.attr("cx", xPos)
				.attr("cy", yPos)
				.attr("r", 0)
				.style("stroke", "white")
				.attr("opacity", Math.random() * 0.75)
				.transition()
					.duration(1700)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeSinIn)
		            .attr("cx", xPos)
		            .attr("cy", yPos)
		            .attr("r", rings)
		            .attr("opacity", 33)
		        .transition()
					.duration(1700)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeSinIn)
		            .attr("cx", xPos + rings * 0.5)
		            .attr("cy", yPos - rings * 2)
		            .attr("r", 0)
		            .attr("opacity", 0.66)
		        .transition()
					.duration(2100)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeSinOut)
		            .attr("cx", xPos - rings * 1.2)
		            .attr("cy", yPos - rings * 4)
		            .attr("r", 0)
		            .attr("opacity", 1)
		        .transition()
					.duration(1700)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeSinIn)
		            .attr("cx", xPos + rings * 0.8)
		            .attr("cy", yPos - rings * 2)
		            .attr("r", 0.8)
		            .attr("opacity", 0.33)
		        .transition()
					.duration(1900)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeSinOut)
		            .attr("cx", xPos - rings * 1.7)
		            .attr("cy", yPos - rings * 2.5)
		            .attr("r", 0)
		            .attr("opacity", 1)
		            .remove();

		       }, 100);



			/*

			bg.append("rect")
				.attr("x", xPos)
				.attr("y", yPos)
				.attr("height", dropLength)
				.attr("width", dropWidth)
				.attr("fill", "#DDDDDD")
				.attr("opacity", Math.random() * 0.75)
				.transition()
					.duration(3000)
					.delay(function(d,i) { return Math.random() * i * 1000; })
					.ease(d3.easeQuadIn)
		            .attr("x", xPos)
		            .attr("y", height)
		            .remove();}, 300);*/
			
		}
	}


toggleAnimation();


// fade out -----------------------------------------------------




