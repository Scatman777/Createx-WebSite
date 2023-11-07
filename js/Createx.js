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

///////////////// POPAP__SING-IN /////////////////

// const openPassword = document.getElementById('password');
// openPassword.addEventListener("click", function (e) {
// 	let targetItemOpen = e.target
// 	// if (targetItemOpen.closest("open-password1").checked) {
// 	// 	targetItemOpen.closest("popap-input1").setAttribute("type", "text");
// 	// }
// 	if (targetItemOpen.closest('.password-control')) {
// 		targetItemOpen.closest('.block-input__input').setAttribute("type", "text")
// 	} else {
// 		document.getElementById("popap-input1").setAttribute("type", "password");
// 	}
// 	document.getElementById("popap-icon1").classList.toggle("password__open");
// });

// document.getElementById("open-password1").addEventListener("change", function() {

// 	document.getElementById("popap-icon1").classList.toggle("password__open");

// 	if (document.getElementById("open-password1").checked) {
// 		document.getElementById("popap-input1").setAttribute("type", "text");
// 	} else {
// 		document.getElementById("popap-input1").setAttribute("type", "password");
// 	}
// });

///////////////// POPAP__SING-UP /////////////////
// document.getElementById("open-password2.1").addEventListener("change", function() {

// 	document.getElementById("popap-icon2.1").classList.toggle("password__open");

// 	if (document.getElementById("open-password2.1").checked) {
// 		document.getElementById("popap-input2.1").setAttribute("type", "text");
// 	} else {
// 		document.getElementById("popap-input2.1").setAttribute("type", "password");
// 	}
// });
// document.getElementById("open-password2.2").addEventListener("change", function() {

// 	document.getElementById("popap-icon2.2").classList.toggle("password__open");

// 	if (document.getElementById("open-password2.2").checked) {
// 		document.getElementById("popap-input2.2").setAttribute("type", "text");
// 	} else {
// 		document.getElementById("popap-input2.2").setAttribute("type", "password");
// 	}
// });

///////////////// SECTION-PROFILE__FORM /////////////////
// document.getElementById("open-password3").addEventListener("change", function() {
// 	document.getElementById("popap-icon3").classList.toggle("password__open");

// 	if (document.getElementById("open-password3").checked) {
// 		document.getElementById("popap-input3").setAttribute("type", "text");
// 	} else {
// 		document.getElementById("popap-input3").setAttribute("type", "password");
// 	}
// });

// document.getElementById("open-password4").addEventListener("change", function() {
// 	document.getElementById("popap-icon4").classList.toggle("password__open");

// 	if (document.getElementById("open-password4").checked) {
// 		document.getElementById("popap-input4").setAttribute("type", "text");
// 	} else {
// 		document.getElementById("popap-input4").setAttribute("type", "password");
// 	}
// });

///////////////// HEADER__MENU-LANG /////////////////
function MenuLangList() {
    document.getElementById("MenuLang__Open").classList.toggle("lang-list__open");
	document.getElementById("MenuLang__Arrow").classList.toggle("lang-list__arrow-open");
}

function burgerLangList() {
    document.getElementById("BurgerLang__Open").classList.toggle("burger-list__open");
	document.getElementById("BurgerLang__Arrow").classList.toggle("burger-list__arrow-open");
}

///////////////// SECTION-DISCOUNT__BORDER-GREEN /////////////////
const sectionButtons = document.querySelector('.function-borderColumn');
sectionButtons.addEventListener("click", function (e) {
		let borderGreen = e.target;
		if (borderGreen.closest('.function-borderItem')) {
			borderGreen.closest('.function-borderItem').classList.toggle('border-green');
		}
	});

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
function OpenBlockProduct1() {

	/* BLOKC-DETAILS */
	const blockDetails = document.getElementById("blockDetails__style");
	if (blockDetails.style.display === "none") {
		blockDetails.style.display = "none";
	} else {
		blockDetails.style.display = "none";
	}

	/* BLOKC-REVIEWS */
	const blockReviews = document.getElementById("blockReviews__style");
	if (blockReviews.style.display === "none") {
		blockReviews.style.display = "none";
	} else {
		blockReviews.style.display = "none";
	}

	/* BLOKC-DOWN */
	const blockDown = document.getElementById("blockDown__style");
	if (blockDown.style.display === "none") {
		blockDown.style.display = "flex";
	} else {
		blockDown.style.display = "flex";
	}
}

function OpenBlockProduct2() {

	/* BLOKC-DOWN */
	const blockDown = document.getElementById("blockDown__style");
	if (blockDown.style.display === "none") {
		blockDown.style.display = "none";
	} else {
		blockDown.style.display = "none";
	}

	/* BLOKC-REVIEWS */
	const blockReviews = document.getElementById("blockReviews__style");
	if (blockReviews.style.display === "none") {
		blockReviews.style.display = "none";
	} else {
		blockReviews.style.display = "none";
	}

	/* BLOKC-DETAILS */
	const blockDetails = document.getElementById("blockDetails__style");
	if (blockDetails.style.display === "none") {
		blockDetails.style.display = "flex";
	} else {
		blockDetails.style.display = "flex";
	}
}

function OpenBlockProduct3() {

	/* BLOKC-DOWN */
	const blockDown = document.getElementById("blockDown__style");
	if (blockDown.style.display === "none") {
		blockDown.style.display = "none";
	} else {
		blockDown.style.display = "none";
	}

	/* BLOKC-DETAILS */
	const blockDetails = document.getElementById("blockDetails__style");
	if (blockDetails.style.display === "none") {
		blockDetails.style.display = "none";
	} else {
		blockDetails.style.display = "none";
	}

	/* BLOKC-REVIEWS */
	const blockReviews = document.getElementById("blockReviews__style");
	if (blockReviews.style.display === "none") {
		blockReviews.style.display = "flex";
	} else {
		blockReviews.style.display = "flex";
	}
}

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

///////////////// SECTION-PRODCT__SWIEPR /////////////////
// const swiperProduct = new Swiper('.swiper', {
// 	watchOverflow: false,
// 	slidesPerView: 'auto',
// 	slidesPerGroup: 1,
// 	slidesPerColumn: 1,

// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
// 	},

// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev',
// 	},
// });

// const swiperCloth = new Swiper('.swiper-cloth', {
// 	watchOverflow: false,
// 	slidesPerView: 'auto',
// 	slidesPerGroup: 1,
// 	slidesPerColumn: 1,

// 	pagination: {
// 	  el: '.swiper-cloth-pagination',
// 	  clickable: true,
// 	},

// 	navigation: {
// 	  nextEl: '.swiper-cloth__next',
// 	  prevEl: '.swiper-cloth__prev',
// 	},
// });


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