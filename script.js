var slideIndex = 0;
var playing = true;

var slides = document.getElementsByClassName("slide");
	  var icons = document.getElementsByClassName("dot");
	  var captions = document.getElementsByClassName("caption");



/*

function showSlides() {
	if (slideIndex >= slides.length) {slideIndex = 0;}

	  for (var i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	    captions[i].style.display = "none";
	    icons[i].style.color = "lightgray";
	  }

	  slides[slideIndex].style.display = "block";
	  captions[slideIndex].style.display = "block";
	  icons[slideIndex].style.color = "gray";
	if (playing) {	  
	  slideIndex++;
	}
	
}


document.getElementById("controlButtons").addEventListener("click", function() {
	console.log("clicked");
		playing = !playing;
		startSlides(playing);
		toggleButton();});

function toggleButton() {
	if (playing) { document.getElementById("controlButtons").innerHTML = "<i class=\"fa fa-pause\"></i>";}
	else { document.getElementById("controlButtons").innerHTML = "<i class=\"fa fa-play\"></i>";}
}

*/

function plusSlide(n) {
	showSlide(slideIndex += n);
}

function nextSlide() {
	slideIndex += 1;
	showSlide(slideIndex);
}

function prevSlide() {
	slideIndex += -1;
	showSlide(slideIndex);
}


function showSlide(n) {	
	slideIndex = n;
	if (slideIndex < 0) {slideIndex = slides.length - 1;} 
	if (slideIndex >= slides.length) {slideIndex = 0;}

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		captions[i].style.display = "none";
	    icons[i].style.color = "lightgray";
	}

	slides[slideIndex].style.display = "block";
	captions[slideIndex].style.display = "block";
	icons[slideIndex].style.color = "gray";
}


/*
window.startSlides = function(isPlaying) {
	var timer = setInterval(showSlides, 2000); 

	if (isPlaying) {

		playing = true;
	} else {
		if (slideIndex >= slides.length) {slideIndex = 0;}

	  for (var i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	    captions[i].style.display = "none";
	    icons[i].style.color = "lightgray";
	  }

	  slides[slideIndex].style.display = "block";
	  captions[slideIndex].style.display = "block";
	  icons[slideIndex].style.color = "gray";
		playing = false;
		//toggleButton();
	}
};

*/



document.getElementById("mainGallery").addEventListener("mouseenter", function() { 
	document.getElementById("galleryBar").classList.add("reveal");});
document.getElementById("mainGallery").addEventListener("mouseleave", function() { 
	document.getElementById("galleryBar").classList.remove("reveal");});

