window.addSlides = function(imgs) {
	var elements = "";
	var circles = "";
	var captions = "";

	for (var n = 0; n < images.length; n++) {
		if (images[n].link == "none") {
			elements = elements + "<div class=\"slide fade\"><img src=\"" + images[n].source + "\"></div>";
		}
		else {
			elements = elements + "<div class=\"slide fade\"><a href=\"" + images[n].link + "\"><img src=\"" + images[n].source + "\"></a></div>";
		}

		if (images[n].caption == "none") {
			captions = captions + "<span class=\"caption fade\"></span>";
		} else {
			captions = captions + "<span class=\"caption fade\">" + images[n].caption + "</span>";
		}

		//var element = document.createElement("div");
		circles = circles + "<span class=\"dot\" onclick=\"showSlide(" + n + ")\">&#9679</span>";
	}

	elements = elements + "<div id=\"galleryBar\"><span id=\"controlButtons\"><i class=\"fa fa-pause\"></i></span><span id=\"slideNav\"></span></div>";

	document.getElementById("galleryImages").innerHTML = elements;
	document.getElementById("slideNav").innerHTML = circles;
	document.getElementById("slideCaption").innerHTML = captions;
	//document.getElementById("slideArrows").innerHTML = "<a id=\"prevSlide\" onclick=\"plusSlide(-1)\">&#10094;</a><a id=\"nextSlide\" onclick=\"plusSlide(1)\">&#10095;</a>";

	return [elements, circles, captions];
};
