import '../css/style.scss'

console.log('hello, welcome to monkey mountain')

var colors = ["red", "orange", "green", "blue", "hotpink", "purple"];
var currentIndex = 0;

setInterval(function() {
  document.querySelectorAll('.fa-monkey')[0].style.cssText = "color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 1000);