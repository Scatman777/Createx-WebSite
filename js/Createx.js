function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show')
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

const btnBorder = document.querySelector(".btn-border");
btnBorder.addEventListener("click", function() {
  this.getElementById.toggle("buy-border");
});

var btnColor = document.querySelector(".btn-color");
btnColor.addEventListener("click", function() {
  this.classList.toggle("color-border");
});

var btnsub = document.getElementById("button-style");
btnsub.addEventListener("click", function() {
  this.classList.toggle("button-background");
});

// button.onmouseover = button.onmouseout = background;

// function background() {


//   const button = document.querySelector(".body-middle__item");
//   const main = document.querySelector(".main");

//   if (button.type == 'mouseover') {
//     main.target.style.filter = 'brightness(0.5)'
//   }
//   if (button.type == 'mouseout') {
//     main.target.style.filter = 'brightness(1)'
//   }
// }

// function button(color) {
//   main.style.background = "#999";
// };

// button().addEventListener("click", function() {
//   main.classList.toggle("color");
// });

///////////////// MENU /////////////////
let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body');
if (isMobile.any()) {

	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');

	for (i = 0; i < arrow.length; i++) {

		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {

			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');

		});
	}

} else {
	body.classList.add('mouse');
}
