var slideIndex = 0;
var playing = true;
var timer = setInterval(showSlides, 5000); 
var slides = document.getElementsByClassName("slide");
	  var icons = document.getElementsByClassName("dot");
	  var captions = document.getElementsByClassName("caption");


function showSlides() {
	if (playing) {
	  var i;
	  

	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	    captions[i].style.display = "none";
	    icons[i].style.color = "lightgray";
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1;}
	  slides[slideIndex-1].style.display = "block";
	  captions[slideIndex-1].style.display = "block";
	  icons[slideIndex-1].style.color = "gray";
	}
	document.getElementById("controlButtons").addEventListener("click", function() {
		playing = !playing;
		toggleButton();});
}


function toggleButton() {
	if (playing) { document.getElementById("controlButtons").innerHTML = "<i class=\"fa fa-pause\"></i>";}
	else { document.getElementById("controlButtons").innerHTML = "<i class=\"fa fa-play\"></i>";}
}

function plusSlide(n) {
	showSlide(slideIndex += n);
}

function showSlide(n) {
	slideIndex = n;
	if (slideIndex < 0) {slideIndex = slides.length - 1;} 
	if (slideIndex >= slides.length) {slideIndex = 0;}


	var i;


	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		captions[i].style.display = "none";
	    icons[i].style.color = "lightgray";
	}

	slides[slideIndex].style.display = "block";
	captions[slideIndex].style.display = "block";
	icons[slideIndex].style.color = "gray";
}

window.startSlides = function(isPlaying) {
	if (isPlaying) {
		showSlides();
	} else {
		showSlides();
		playing = false;
		toggleButton();
	}
};

document.getElementById("mainGallery").addEventListener("mouseenter", function() { 
	document.getElementById("galleryBar").classList.add("reveal");});
document.getElementById("mainGallery").addEventListener("mouseleave", function() { 
	document.getElementById("galleryBar").classList.remove("reveal");});

