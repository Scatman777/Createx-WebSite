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

// const btnBorder = document.querySelector(".btn-border");
// btnBorder.addEventListener("click", function() {
//   this.getElementById.toggle("buy-border");
// });

// var btnColor = document.querySelector(".btn-color");
// btnColor.addEventListener("click", function() {
//   this.classList.toggle("color-border");
// });

// var btnsub = document.getElementById("button-style");
// btnsub.addEventListener("click", function() {
//   this.classList.toggle("button-background");
// });

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

///////////////// PASSWORD-OPEN /////////////////
function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
