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

//document.getElementById("commissionLink").addEventListener("click", toggleComms);

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


function checkContains(selectedCats, itemCats) {
	for (var i = 0; i < selectedCats.length; i++) {
		for (var ii = 0; ii < itemCats.length; ii++) {
			if (selectedCats[i] == itemCats[ii]) {
				return true;
			}
		}
	}
	return false;
}


function addProjects() {


	for (i = 0; i < confirmedCats.length; i++) {
		console.log(confirmedCats[i]);
	}



	updateTitle();

	cardBox.innerHTML = "";

	for (i = 0; i < projects.length; i++) {
		var current = projects[i];
		if (checkContains(confirmedCats, current.category)) {
		//if (confirmedCats.includes(current.category)) {
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
			var cardInfo = document.createElement("div");
			var date = current.month + "/" + current.year;
			var categoriesText = "";
			for (var ii = 0; ii < current.category.length; ii++) {
				categoriesText = categoriesText + current.category[ii];
				if (ii != current.category.length - 1) {
					categoriesText = categoriesText + ", ";
				}
			}
			var dateBox = document.createElement("div");
			var categoriesBox = document.createElement("div");
			categoriesBox.classList.add("projCatCard");
			dateBox.classList.add("projDateCard");
			dateBox.innerHTML = date;
			categoriesBox.innerHTML = categoriesText;
			cardInfo.appendChild(categoriesBox);
			cardInfo.appendChild(dateBox);
			
			cardInfo.classList.add("cardInfo");
			item.appendChild(cardInfo);


			item.id = current.name;

			
			
			

			item.classList.add(current.category[0]);
			item.classList.add("card");
			var itemWrapper = document.createElement("div");
			itemWrapper.classList.add("cardWrap");

			if (current.thumb != "") {
				itemWrapper.style.backgroundImage = "url(\'photos/" + current.folder + "/" + current.thumb + "\')";
			} 
			else { 
				itemWrapper.style.backgroundImage = "url(\'photos/" + current.folder + "/1.jpg\')"; 
			}

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
			
			toggleProject();

			var projName = document.getElementById("projName");
			var projGallery = document.getElementById("projGallery");
			var projDate = document.getElementById("projDate");
			var projCat = document.getElementById("projCat");
			var projDesc = document.getElementById("projDesc");
			//var mainImage = document.createElement("img");
			//mainImage.src = "url(\'photos/" + currentProj.folder + "/1.jpg\')";

			projName.innerHTML = currentProj.name;

			
			projGallery.innerHTML = "";
			//projGallery.appendChild(mainImage);
			

			genGallery(currentProj);

			projDate.innerHTML = currentProj.month + "/" + currentProj.year;

			var categoryList = "";
			for (var i = 0; i < currentProj.category.length; i++) {
				categoryList = categoryList + currentProj.category[i];
				if (i < currentProj.category.length - 1) {
					categoryList = categoryList + ", ";
				}
			}
			projCat.innerHTML = categoryList;
			projDesc.innerHTML = currentProj.desc;

			
			/*

			if (currentProj.category == code && width > 640) {
				projGallery.style.height = "30vw";
			} else {
				projGallery.style.height = "40vw";
			}*/

			break;
		}
	}
}


function genGallery(proj) {
	var projGallery = document.getElementById("projGallery");
	projGallery.innerHTML = "";

	//if (proj.category != code) {
		var fullImage = document.createElement("div");
		fullImage.classList.add("projImage");
		fullImage.style.backgroundImage = "url(\'photos/" + proj.folder + "/1.jpg\')";
		projGallery.appendChild(fullImage);
	//}


	for (var i = 1; i < proj.gallery.length; i++) {
		var image = document.createElement("div");
		image.classList.add("imageBox");
		var index = i + 1;

		
		var type = ".jpg";

		if(proj.folder == "switchin" && index == 3) {
			type = ".gif";
		}

		image.style.backgroundImage = "url(\'photos/" + proj.folder + "/" + index + type + "\')";

		var caption = document.createElement("p");
		caption.classList.add("imageCaption");
		caption.innerHTML = proj.gallery[i].label;

		var imgContainer = document.createElement("div");
		imgContainer.classList.add("imgContainer");

		imgContainer.appendChild(image);
		imgContainer.appendChild(caption);
		projGallery.appendChild(imgContainer);
	}

	var footer = document.createElement("footer");
	projGallery.appendChild(footer);
}





function toggleProject() {
	if (currentPage == "project") {
		return ;
	}

	window.scrollTo(0, 0);


	cardBox.classList.toggle("hidden");

	fadeIn(projContainer);
	fadeOut(selectedTitle);
	//projContainer.classList.toggle("hidden");
	//selectedTitle.classList.toggle("hidden");

	//toggleNavLinks();

	if (width < 640) {
			//fadeOut(menu);
			menu.classList.add("hidden");
		}

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


	window.scrollTo(0, 0);

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
		//document.getElementById("commissionLink").addEventListener("click", toggleComms);

		if (width < 640) {
			menu.classList.add("hidden");
			//fadeOut(menu);
		}
		fadeIn(aboutPage);
		fadeOut(cardBox);
		fadeOut(selectedTitle);
		fadeOut(commPage);
		//fadeOut(navList);
		fadeOut(projContainer);

		currentPage = "about";

		document.getElementById("homeLink").classList.remove("selectedPage");
		//document.getElementById("commissionLink").classList.remove("selectedPage");
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

	window.scrollTo(0, 0);

	//toggleItem(commPage);

	/*
	cardBox.classList.add("hidden");
	projContainer.classList.add("hidden");
	selectedTitle.classList.add("hidden");
	aboutPage.classList.add("hidden");*/


	if (!commPage.classList.contains("hidden")) {
		//document.getElementById("commissionLink").addEventListener("click", toggleComms);
		fadeOut(commPage);

	} else {
		//document.getElementById("commissionLink").removeEventListener("click", toggleComms);
		document.getElementById("aboutLink").addEventListener("click", toggleAbout);


		if (width < 640) {
			menu.classList.add("hidden");
			//fadeOut(menu);
		}


		fadeIn(commPage);
		fadeOut(aboutPage);
		fadeOut(cardBox);
		fadeOut(selectedTitle);
		//fadeOut(navList);
		fadeOut(projContainer);

		currentPage = "comms";

		
		document.getElementById("homeLink").classList.remove("selectedPage");
		//document.getElementById("commissionLink").classList.add("selectedPage");
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

	window.scrollTo(0, 0);


	if (!cardBox.classList.contains("hidden")) {
		fadeOut(cardBox);
		document.getElementById("homeLink").removeEventListener("click", toggleGallery);

	} else {
		if (width < 640) {
			menu.classList.remove("hidden");
		}

		fadeOut(aboutPage);
		fadeOut(commPage);
		fadeOut(projContainer);
		fadeIn(cardBox);
		fadeIn(selectedTitle);
		//fadeIn(navList);
		currentPage = "gallery";
		document.getElementById("homeLink").classList.add("selectedPage");
		//document.getElementById("commissionLink").classList.remove("selectedPage");
		document.getElementById("aboutLink").classList.remove("selectedPage");



	}

	
	document.getElementById("aboutLink").addEventListener("click", toggleAbout);
	//document.getElementById("commissionLink").addEventListener("click", toggleComms);
	
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
				.style("fill", "none")
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

var standBox = document.getElementById("standardSamples");
var chibiBox = document.getElementById("chibiSamples");
var illustBox = document.getElementById("illustSamples");



/*
for (var i = 0; i < standList.length; i++) {
	var sampleWrap = document.createElement("div");
	sampleWrap.classList.add("sampleWrap");
	var sampleDesc = document.createElement("div");
	sampleDesc.classList.add("sampleDesc");
	var sampleDescText = document.createElement("h4");
	sampleDescText.innerHTML = standList[i].type + standList[i].finish;
	sampleWrap.style.backgroundImage = "url(\'photos/samples/standard/" + standList[i].url + "\')";
	sampleDesc.appendChild(sampleDescText);
	sampleWrap.appendChild(sampleDesc);



	/*
	sampleWrap.style.gridColumn = count + " / span " +  standList[i].span;
	sampleWrap.style.gridRow = currentRow + " / span " +  standList[i].height;
	
	sampleWrap.style.height = 200 * standList[i].height + "px";



	sampleWrap.style.gridArea = standList[i].ystart + "/" + standList[i].xstart + "/" + standList[i].yend + "/" + standList[i].xend;
	if (width > 640 && (standList[i].yend - standList[i].ystart > 1)) {
		sampleWrap.style.height = 200 * (standList[i].yend - standList[i].ystart) + "px";
	} else if (standList[i].yend - standList[i].ystart > 1) {
		sampleWrap.style.height = 120 * (standList[i].yend - standList[i].ystart) + "px";
	}
	
	standBox.appendChild(sampleWrap);
}


for (var i = 0; i < chibiList.length; i++) {
	var sampleWrap = document.createElement("div");
	sampleWrap.classList.add("sampleWrap");
	var sampleDesc = document.createElement("div");
	sampleDesc.classList.add("sampleDesc");
	var sampleDescText = document.createElement("h4");
	sampleDescText.innerHTML = chibiList[i].type + chibiList[i].finish;
	sampleWrap.style.backgroundImage = "url(\'photos/samples/chibi/" + chibiList[i].url + "\')";
	sampleDesc.appendChild(sampleDescText);
	sampleWrap.appendChild(sampleDesc);

	
	//sampleWrap.style.gridColumn = count + " / span " +  chibiList[i].span;
	if (width > 640 && (chibiList[i].yend - chibiList[i].ystart > 1)) {
		sampleWrap.style.height = 200 * (chibiList[i].yend - chibiList[i].ystart) + "px";
	} else if (chibiList[i].yend - chibiList[i].ystart > 1) {
		sampleWrap.style.height = 120 * (chibiList[i].yend - chibiList[i].ystart) + "px";
	}

	chibiBox.appendChild(sampleWrap);

	/*
	count = (count + chibiList[i].span);
	if (count >= 3) {
		count = 1;
	}
}


for (var i = 0; i < illustList.length; i++) {
	var sampleWrap = document.createElement("div");
	sampleWrap.classList.add("sampleWrap");
	var sampleDesc = document.createElement("div");
	sampleDesc.classList.add("sampleDesc");
	var sampleDescText = document.createElement("h4");
	sampleDescText.innerHTML = illustList[i].type + illustList[i].finish;
	sampleWrap.style.backgroundImage = "url(\'photos/samples/illust/" + illustList[i].url + "\')";
	sampleDesc.appendChild(sampleDescText);
	sampleWrap.appendChild(sampleDesc);

	
	//sampleWrap.style.gridColumn = count + " / span " +  illustList[i].span;


	sampleWrap.style.gridArea = illustList[i].ystart + "/" + illustList[i].xstart + "/" + illustList[i].yend + "/" + illustList[i].xend;
	if (width > 640 && (illustList[i].yend - illustList[i].ystart > 1)) {
		sampleWrap.style.height = 200 * (illustList[i].yend - illustList[i].ystart) + "px";
	} else if (illustList[i].yend - illustList[i].ystart > 1) {
		sampleWrap.style.height = 120 * (illustList[i].yend - illustList[i].ystart) + "px";
	}
	illustBox.appendChild(sampleWrap);

	/*
	count = (count + illustList[i].span);
	if (count >= 3) {
		count = 1;
	}
}*/

function openModal(item) {
	var modal = document.getElementById("modal");
	var modalBox = document.getElementById("modalBox");
	var modalImg = document.createElement("img");
	modalImg.src = item;
	modalBox.appendChild(modalImg);
	fadeIn(modal);

	$("body").css("overflow", "hidden");

	modal.addEventListener("click", function() { fadeOut(modal); modalBox.innerHTML = ""; $("body").css("overflow", "auto");});
	console.log("opened");
}

function generateSamples(sampleList, folder, location) {
	for (var i = 0; i < sampleList.length; i++) {
		var sampleWrap = document.createElement("div");
		sampleWrap.classList.add("sampleWrap");
		var sampleDesc = document.createElement("div");
		sampleDesc.classList.add("sampleDesc");
		var sampleDescText = document.createElement("h4");
		sampleDescText.innerHTML = sampleList[i].type + sampleList[i].finish;
		sampleWrap.style.backgroundImage = "url(\'photos/samples/" + folder + "/" + sampleList[i].url + "\')";
		sampleDesc.appendChild(sampleDescText);
		sampleWrap.appendChild(sampleDesc);

		sampleWrap.style.gridArea = sampleList[i].ystart + "/" + sampleList[i].xstart + "/" + sampleList[i].yend + "/" + sampleList[i].xend;
		if (width > 640 && (sampleList[i].yend - sampleList[i].ystart > 1)) {
			sampleWrap.style.height = 200 * (sampleList[i].yend - sampleList[i].ystart) + "px";
		} else if (sampleList[i].yend - sampleList[i].ystart > 1) {
			sampleWrap.style.height = 120 * (sampleList[i].yend - sampleList[i].ystart) + "px";
		}
		location.appendChild(sampleWrap);

		sampleWrap.addEventListener("click", openModal.bind(this, "photos/samples/" + folder + "/" + sampleList[i].url));
		//sampleWrap.addEventListener("click", function() { openModal("photos/samples/" + folder + "/" + sampleList[i].url); });
	}
}

generateSamples(standList, "standard", standBox);
generateSamples(chibiList, "chibi", chibiBox);
generateSamples(illustList, "illust", illustBox);

