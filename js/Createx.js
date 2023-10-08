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


function myFunction() {
    document.getElementById("list").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.block-sorting__plus')) {

    var dropdowns = document.getElementsByClassName("block-sorting__list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// function buttonPlus() {
// 	// document.getElementById("buttonPlus").style.display = "flex";
// 	document.getElementById("style-list").style.display = "flex";
// }

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
	let input = document.getElementById('password-input');

	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'text');
	}
	return false;
}

///////////////// MENU-LANG /////////////////
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('section-catalog__body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('touch');
}


/////////////// INPUT-PRICE ///////////////
const priceInputs = document.querySelectorAll(".price-input input");
const rangeInputs = document.querySelectorAll(".range-input input");
const range = document.querySelector(".slider .progress");

let priceGap = 1000;

priceInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInputs[0].value);
    let maxPrice = parseInt(priceInputs[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
      if (e.target.className === "min-input") {
        rangeInputs[0].value = minPrice;
        range.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
      } else {
        rangeInputs[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
      }
    }
  });
});

rangeInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInputs[0].value);
    let maxVal = parseInt(rangeInputs[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "min-range") {
        rangeInputs[0].value = maxVal - priceGap;
      } else {
        rangeInputs[1].value = minVal + priceGap;
      }
    } else {
      priceInputs[0].value = minVal;
      priceInputs[1].value = maxVal;
      range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
    }
  });
});