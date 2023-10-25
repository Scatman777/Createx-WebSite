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

///////////////// SECTION-PRODCT__SWIEPR /////////////////
const swiperProduct = new Swiper('.swiper', {
	watchOverflow: false,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	slidesPerColumn: 1,

	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });

  const swiperCloth = new Swiper('.swiper-cloth', {
	watchOverflow: false,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	slidesPerColumn: 1,

	pagination: {
	  el: '.swiper-cloth-pagination',
	  clickable: true,
	},

	navigation: {
	  nextEl: '.swiper-cloth__next',
	  prevEl: '.swiper-cloth__prev',
	},
  });

///////////////// POPAP /////////////////

document.getElementById("open-password").addEventListener("change", function() {

	document.getElementById("popap-icon").classList.toggle("password__open");
	if (document.getElementById("open-password").checked) {
		document.getElementById("popap-input").setAttribute("type", "text");
	} else {
		document.getElementById("popap-input").setAttribute("type", "password");
	}
});



///////////////// HEADER__MENU-LANG /////////////////
function MenuLangList() {
    document.getElementById("MenuLang__Open").classList.toggle("lang-list__open");
	document.getElementById("MenuLang__Arrow").classList.toggle("lang-list__arrow-open");
}

function burgerLangList() {
    document.getElementById("BurgerLang__Open").classList.toggle("burger-list__open");
	document.getElementById("BurgerLang__Arrow").classList.toggle("burger-list__arrow-open");
}

///////////////// SECTION-DISCOUNT__BORDER-CIRCLE /////////////////
function buttonFunction1Color1() {
    document.getElementById("buttonCircle1.1").classList.toggle("border-green");
}
function buttonFunction1Color2() {
    document.getElementById("buttonCircle1.2").classList.toggle("border-green");
}
function buttonFunction1Color3() {
    document.getElementById("buttonCircle1.3").classList.toggle("border-green");
}


function buttonFunction2Color1() {
    document.getElementById("buttonCircle2.1").classList.toggle("border-green");
}
function buttonFunction2Color2() {
    document.getElementById("buttonCircle2.2").classList.toggle("border-green");
}
function buttonFunction2Color3() {
    document.getElementById("buttonCircle2.3").classList.toggle("border-green");
}


function buttonFunction3Color1() {
    document.getElementById("buttonCircle3.1").classList.toggle("border-green");
}
function buttonFunction3Color2() {
    document.getElementById("buttonCircle3.2").classList.toggle("border-green");
}
function buttonFunction3Color3() {
    document.getElementById("buttonCircle3.3").classList.toggle("border-green");
}

///////////////// SECTION-DISCOUNT__BORDER-SIZE /////////////////
function buttonFunction1Size1() {
    document.getElementById("buttonSize1.1").classList.toggle("border-green");
}
function buttonFunction1Size2() {
    document.getElementById("buttonSize1.2").classList.toggle("border-green");
}
function buttonFunction1Size3() {
    document.getElementById("buttonSize1.3").classList.toggle("border-green");
}
function buttonFunction1Size4() {
    document.getElementById("buttonSize1.4").classList.toggle("border-green");
}
function buttonFunction1Size5() {
    document.getElementById("buttonSize1.5").classList.toggle("border-green");
}


function buttonFunction2Size1() {
    document.getElementById("buttonSize2.1").classList.toggle("border-green");
}
function buttonFunction2Size2() {
    document.getElementById("buttonSize2.2").classList.toggle("border-green");
}
function buttonFunction2Size3() {
    document.getElementById("buttonSize2.3").classList.toggle("border-green");
}
function buttonFunction2Size4() {
    document.getElementById("buttonSize2.4").classList.toggle("border-green");
}
function buttonFunction2Size5() {
    document.getElementById("buttonSize2.5").classList.toggle("border-green");
}


function buttonFunction3Size1() {
    document.getElementById("buttonSize3.1").classList.toggle("border-green");
}
function buttonFunction3Size2() {
    document.getElementById("buttonSize3.2").classList.toggle("border-green");
}
function buttonFunction3Size3() {
    document.getElementById("buttonSize3.3").classList.toggle("border-green");
}
function buttonFunction3Size4() {
    document.getElementById("buttonSize3.4").classList.toggle("border-green");
}
function buttonFunction3Size5() {
    document.getElementById("buttonSize3.5").classList.toggle("border-green");
}

///////////////// SECTION-SUBSCRIBE__BORDER /////////////////
function buttonFunctionGender1() {
    document.getElementById("buttonGender1").classList.toggle("background-green");
}
function buttonFunctionGender2() {
    document.getElementById("buttonGender2").classList.toggle("background-green");
}
function buttonFunctionGender3() {
    document.getElementById("buttonGender3").classList.toggle("background-green");
}
function buttonFunctionGender4() {
    document.getElementById("buttonGender4").classList.toggle("background-green");
}

///////////////// SECTION-CATALOG /////////////////
function HideFilters() {
	const ButtonFilter = document.getElementById("BlockSortingHide");

	if (ButtonFilter.style.display === "none") {
		ButtonFilter.style.display = "flex";
	} else {
		ButtonFilter.style.display = "none";
	}

	document.getElementById("BlockProductStyle").classList.toggle("block-product__style");
	document.getElementById("ButtonStyleImg").classList.toggle("button-icon");

	const ButtonStyle1 = document.getElementById("ButtonStyle1");
	if (ButtonStyle1.style.display === "none") {
		ButtonStyle1.style.display = "block";
	} else {
		ButtonStyle1.style.display = "none";
	}

	const ButtonStyle2 = document.getElementById("ButtonStyle2");
	if (ButtonStyle2.style.display === "block") {
		ButtonStyle2.style.display = "none";
	} else {
		ButtonStyle2.style.display = "block";
	}

	const ButtonStyleDown = document.getElementById("ButtonHideDown");
	if (ButtonStyleDown.style.display === "none") {
		ButtonStyleDown.style.display = "block";
	} else {
		ButtonStyleDown.style.display = "none";
	}
}

///////////////// SECTION-PRODUCT /////////////////
function HideBlock1() {
    document.getElementById("show").getElementById("show-flex");
}

// function HideBlock1() {
// 	const BlocKProductHide1 = document.getElementById("BlockProduct__Hide1");

// 	if (BlocKProductHide1.style.display === "flex") {
// 		BlocKProductHide1.style.display = "none";
// 	} else {
// 		BlocKProductHide1.style.display = "flex";
// 	}

// 	const BlocKProductHide2 = document.getElementById("BlockProduct__Hide2");

// 	if (BlocKProductHide2.style.display === "none") {
// 		BlocKProductHide2.style.display = "flex";
// 	} else {
// 		BlocKProductHide2.style.display = "none";
// 	}
// }

///////////////// SECTION-CATALOG__SHOW-MENU /////////////////
function buttonFunction1() {
    document.getElementById("list1").classList.toggle("show-flex");
	document.getElementById("plus1").classList.toggle("minus-image");
}
function buttonFunction2() {
    document.getElementById("list2").classList.toggle("show-flex");
	document.getElementById("plus2").classList.toggle("minus-image");
}
function buttonFunction3() {
    document.getElementById("list3").classList.toggle("show-grid");
	document.getElementById("plus3").classList.toggle("minus-image");
}
function buttonFunction4() {
    document.getElementById("list4").classList.toggle("show-flex");
	document.getElementById("plus4").classList.toggle("minus-image");
}
function buttonFunction5() {
    document.getElementById("list5").classList.toggle("show-flex");
	document.getElementById("plus5").classList.toggle("minus-image");
}
function buttonFunction6() {
    document.getElementById("list6").classList.toggle("show-block");
	document.getElementById("plus6").classList.toggle("minus-image");
}

///////////////// COLOR BORDER-CATALOG /////////////////
function buttonColor1() {
    document.getElementById("border1").classList.toggle("border-green");
}
function buttonColor2() {
    document.getElementById("border2").classList.toggle("border-green");
}
function buttonColor3() {
    document.getElementById("border3").classList.toggle("border-green");
}
function buttonColor4() {
    document.getElementById("border4").classList.toggle("border-green");
}
function buttonColor5() {
    document.getElementById("border5").classList.toggle("border-green");
}
function buttonColor6() {
    document.getElementById("border6").classList.toggle("border-green");
}
function buttonColor7() {
    document.getElementById("border7").classList.toggle("border-green");
}
function buttonColor8() {
    document.getElementById("border8").classList.toggle("border-green");
}
function buttonColor9() {
    document.getElementById("border9").classList.toggle("border-green");
}
function buttonColor10() {
    document.getElementById("border10").classList.toggle("border-green");
}
function buttonColor11() {
    document.getElementById("border11").classList.toggle("border-green");
}
function buttonColor12() {
    document.getElementById("border12").classList.toggle("border-green");
}

///////////////// MENU-LANG /////////////////
// let isMobile = {
// 	Android: function() {return navigator.userAgent.match(/Android/i);},
// 	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
// 	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
// 	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
// 	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
// 	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
// };
// 		let body=document.querySelector('section-catalog__body');
// if(isMobile.any()){
// 		body.classList.add('touch');
// 		let arrow=document.querySelectorAll('.arrow');
// 	for(i=0; i<arrow.length; i++){
// 			let thisLink=arrow[i].previousElementSibling;
// 			let subMenu=arrow[i].nextElementSibling;
// 			let thisArrow=arrow[i];

// 			thisLink.classList.add('parent');
// 		arrow[i].addEventListener('click', function(){
// 			subMenu.classList.toggle('open');
// 			thisArrow.classList.toggle('active');
// 		});
// 	}
// }else{
// 	body.classList.add('touch');
// }


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