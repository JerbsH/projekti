//Tehnyt: Jere, muokattu 5.10.2022
//Netistä löydettyä ideaa hieman sovellettu
//Säätää etusivun videon häviämään kun sivua kelaa alaspäin
var video = document.getElementById("video");

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}

	var distanceToTop =
		window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(video);
}

window.addEventListener("scroll", scrollHandler);
