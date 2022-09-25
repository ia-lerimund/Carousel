const slides = document.getElementsByClassName("carousel-item");
const slideNum = document.getElementById("slideNum");
let slidePosition = 0;
const totalSlides = slides.length;
const bodyColor = document.querySelector("body");
slideNum.textContent = `${slidePosition + 1}`;
bodyColor.style.animation = "backgroundslide0 forwards";

document.querySelector("body").addEventListener("mouseenter", resume);
document.querySelector("body").addEventListener("mouseleave", pause);
document.querySelector(".carousel").addEventListener("mouseenter", pause);
document.querySelector(".carousel").addEventListener("mouseleave", resume);

document
	.getElementById("carousel-button-next")
	.addEventListener("click", moveToNextSlide);
document
	.getElementById("carousel-button-prev")
	.addEventListener("click", moveToPrevSlide);

function resume() {
	myTimer = setInterval(moveToNextSlide, 3000);
}
function pause() {
	clearInterval(myTimer);
}

function hideAllSlides() {
	for (let slide of slides) {
		slide.classList.remove("carousel-item-visible");
		slide.classList.add("carousel-item-hidden");
	}
}

function moveToNextSlide() {
	hideAllSlides();

	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	slideNum.textContent = `${slidePosition + 1}`;
	bodyColor.style.animation = `backgroundslide${slidePosition} forwards`;
	slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
	hideAllSlides();

	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}
	slideNum.textContent = `${slidePosition + 1}`;
	bodyColor.style.animation = `backgroundslide${slidePosition} forwards`;
	slides[slidePosition].classList.add("carousel-item-visible");
}
