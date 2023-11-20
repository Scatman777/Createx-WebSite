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

///////////////// HEADER__MENU-LANG /////////////////
function MenuLangList() {
    document.getElementById("MenuLang__Open").classList.toggle("lang-list__open");
	document.getElementById("MenuLang__Arrow").classList.toggle("lang-list__arrow-open");
}

function burgerLangList() {
    document.getElementById("BurgerLang__Open").classList.toggle("burger-list__open");
	document.getElementById("BurgerLang__Arrow").classList.toggle("burger-list__arrow-open");
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

///////////////// SECTION-PROFILE__PRODUCT-OPEN /////////////////
function buttonProfile__plus() {
    document.getElementById("block-columnProduct__open").classList.toggle("columnProfile__open");
	document.getElementById("section-myOrders__plus").classList.toggle("minus-image");
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

///////////////// SECTION-PRODUCT /////////////////
function OpenBlockProduct1() {

	/* BLOKC-OUTLET-STORES */
	const block_OutletStores = document.getElementById("blockOutletStores");
	if (block_OutletStores.style.display === "none") {
		block_OutletStores.style.display = "none";
	} else {
		block_OutletStores.style.display = "none";
	}

	/* BLOKC-QUESTIONS */
	const block_Questions = document.getElementById("blockQuestions");
	if (block_Questions.style.display === "none") {
		block_Questions.style.display = "none";
	} else {
		block_Questions.style.display = "none";
	}

	/* BLOKC-CONTACT-US */
	const block_ContactUs = document.getElementById("blockContactUs");
	if (block_ContactUs.style.display === "none") {
		blockDown.style.display = "flex";
	} else {
		block_ContactUs.style.display = "flex";
	}
}
function OpenBlockProduct2() {

	/* BLOKC-CONTACT-US */
	const block_ContactUs = document.getElementById("blockContactUs");
	if (block_ContactUs.style.display === "none") {
		blockDown.style.display = "none";
	} else {
		block_ContactUs.style.display = "none";
	}

	/* BLOKC-QUESTIONS */
	const block_Questions = document.getElementById("blockQuestions");
	if (block_Questions.style.display === "none") {
		block_Questions.style.display = "none";
	} else {
		block_Questions.style.display = "none";
	}

	/* BLOKC-OUTLET-STORES */
	const block_OutletStores = document.getElementById("blockOutletStores");
	if (block_OutletStores.style.display === "none") {
		block_OutletStores.style.display = "flex";
	} else {
		block_OutletStores.style.display = "flex";
	}
}
function OpenBlockProduct3() {

	/* BLOKC-CONTACT-US */
	const block_ContactUs = document.getElementById("blockContactUs");
	if (block_ContactUs.style.display === "none") {
		blockDown.style.display = "none";
	} else {
		block_ContactUs.style.display = "none";
	}

	/* BLOKC-OUTLET-STORES */
	const block_OutletStores = document.getElementById("blockOutletStores");
	if (block_OutletStores.style.display === "none") {
		block_OutletStores.style.display = "none";
	} else {
		block_OutletStores.style.display = "none";
	}

	/* BLOKC-QUESTIONS */
	const block_Questions = document.getElementById("blockQuestions");
	if (block_Questions.style.display === "none") {
		block_Questions.style.display = "flex";
	} else {
		block_Questions.style.display = "flex";
	}
}

///////////////// SECTION-CONTACT__QUESTIONS /////////////////
function buttonPlusQuestions1() {
    document.getElementById("list1").classList.toggle("show-block");
	document.getElementById("plus1").classList.toggle("minus-image");
}
function buttonPlusQuestions2() {
    document.getElementById("list2").classList.toggle("show-block");
	document.getElementById("plus2").classList.toggle("minus-image");
}
function buttonPlusQuestions3() {
    document.getElementById("list3").classList.toggle("show-block");
	document.getElementById("plus3").classList.toggle("minus-image");
}
function buttonPlusQuestions4() {
    document.getElementById("list4").classList.toggle("show-block");
	document.getElementById("plus4").classList.toggle("minus-image");
}
function buttonPlusQuestions5() {
    document.getElementById("list5").classList.toggle("show-block");
	document.getElementById("plus5").classList.toggle("minus-image");
}
function buttonPlusQuestions6() {
    document.getElementById("list6").classList.toggle("show-block");
	document.getElementById("plus6").classList.toggle("minus-image");
}
function buttonPlusQuestions7() {
    document.getElementById("list7").classList.toggle("show-block");
	document.getElementById("plus7").classList.toggle("minus-image");
}
function buttonPlusQuestions8() {
    document.getElementById("list8").classList.toggle("show-block");
	document.getElementById("plus8").classList.toggle("minus-image");
}
function buttonPlusQuestions9() {
    document.getElementById("list9").classList.toggle("show-block");
	document.getElementById("plus9").classList.toggle("minus-image");
}

///////////////// SECTION-PROFILE__ALL-BLOCK-OPEN /////////////////
function OpenSectionProfile1() {
	document.getElementById("bread-crumbText").innerHTML = "My profile";

	/* SECTION__MY-ORDERS */
	const myOrders = document.getElementById("section-myOrders");
	if (myOrders.style.display === "none") {
		myOrders.style.display = "none";
	} else {
		myOrders.style.display = "none";
	}

	/* SECTION__WISHLIST */
	const wishlist = document.getElementById("section-wishlist");
	if (wishlist.style.display === "none") {
		wishlist.style.display = "none";
	} else {
		wishlist.style.display = "none";
	}

	/* SECTION__RECENTLY-VIEWED */
	const recentlyViewed = document.getElementById("section-recentlyViewed");
	if (recentlyViewed.style.display === "none") {
		recentlyViewed.style.display = "none";
	} else {
		recentlyViewed.style.display = "none";
	}

	/* SECTION__MY-REVIEWS */
	const myReviews = document.getElementById("section-myReviews");
	if (myReviews.style.display === "none") {
		myReviews.style.display = "none";
	} else {
		myReviews.style.display = "none";
	}

	/* SECTION__MY-PROFILE */
	const myProfile = document.getElementById("section-myProfile");
	if (myProfile.style.display === "none") {
		myProfile.style.display = "flex";
	} else {
		myProfile.style.display = "flex";
	}
}

function OpenSectionProfile2() {
	document.getElementById("bread-crumbText").innerHTML = "My orders";

	/* SECTION__MY-PROFILE */
	const myProfile = document.getElementById("section-myProfile");
	if (myProfile.style.display === "none") {
		myProfile.style.display = "none";
	} else {
		myProfile.style.display = "none";
	}

	/* SECTION__WISHLIST */
	const wishlist = document.getElementById("section-wishlist");
	if (wishlist.style.display === "none") {
		wishlist.style.display = "none";
	} else {
		wishlist.style.display = "none";
	}

	/* SECTION__RECENTLY-VIEWED */
	const recentlyViewed = document.getElementById("section-recentlyViewed");
	if (recentlyViewed.style.display === "none") {
		recentlyViewed.style.display = "none";
	} else {
		recentlyViewed.style.display = "none";
	}

	/* SECTION__MY-REVIEWS */
	const myReviews = document.getElementById("section-myReviews");
	if (myReviews.style.display === "none") {
		myReviews.style.display = "none";
	} else {
		myReviews.style.display = "none";
	}

	/* SECTION__MY-ORDERS */
	const myOrders = document.getElementById("section-myOrders");
	if (myOrders.style.display === "none") {
		myOrders.style.display = "block";
	} else {
		myOrders.style.display = "block";
	}
}

function OpenSectionProfile3() {
	document.getElementById("bread-crumbText").innerHTML = "Wishlist";

	/* SECTION__MY-PROFILE */
	const myProfile = document.getElementById("section-myProfile");
	if (myProfile.style.display === "none") {
		myProfile.style.display = "none";
	} else {
		myProfile.style.display = "none";
	}

	/* SECTION__MY-ORDERS */
	const myOrders = document.getElementById("section-myOrders");
	if (myOrders.style.display === "none") {
		myOrders.style.display = "none";
	} else {
		myOrders.style.display = "none";
	}

	/* SECTION__RECENTLY-VIEWED */
	const recentlyViewed = document.getElementById("section-recentlyViewed");
	if (recentlyViewed.style.display === "none") {
		recentlyViewed.style.display = "none";
	} else {
		recentlyViewed.style.display = "none";
	}

	/* SECTION__MY-REVIEWS */
	const myReviews = document.getElementById("section-myReviews");
	if (myReviews.style.display === "none") {
		myReviews.style.display = "none";
	} else {
		myReviews.style.display = "none";
	}

	/* SECTION__WISHLIST */
	const wishlist = document.getElementById("section-wishlist");
	if (wishlist.style.display === "none") {
		wishlist.style.display = "flex";
	} else {
		wishlist.style.display = "flex";
	}
}

function OpenSectionProfile4() {
	document.getElementById("bread-crumbText").innerHTML = "Recently viewed";

	/* SECTION__MY-PROFILE */
	const myProfile = document.getElementById("section-myProfile");
	if (myProfile.style.display === "none") {
		myProfile.style.display = "none";
	} else {
		myProfile.style.display = "none";
	}

	/* SECTION__MY-ORDERS */
	const myOrders = document.getElementById("section-myOrders");
	if (myOrders.style.display === "none") {
		myOrders.style.display = "none";
	} else {
		myOrders.style.display = "none";
	}

	/* SECTION__WISHLIST */
	const wishlist = document.getElementById("section-wishlist");
	if (wishlist.style.display === "none") {
		wishlist.style.display = "none";
	} else {
		wishlist.style.display = "none";
	}

	/* SECTION__MY-REVIEWS */
	const myReviews = document.getElementById("section-myReviews");
	if (myReviews.style.display === "none") {
		myReviews.style.display = "none";
	} else {
		myReviews.style.display = "none";
	}

	/* SECTION__RECENTLY-VIEWED */
	const recentlyViewed = document.getElementById("section-recentlyViewed");
	if (recentlyViewed.style.display === "none") {
		recentlyViewed.style.display = "flex";
	} else {
		recentlyViewed.style.display = "flex";
	}
}

function OpenSectionProfile5() {
	document.getElementById("bread-crumbText").innerHTML = "My reviews";

	/* SECTION__MY-PROFILE */
	const myProfile = document.getElementById("section-myProfile");
	if (myProfile.style.display === "none") {
		myProfile.style.display = "none";
	} else {
		myProfile.style.display = "none";
	}

	/* SECTION__MY-ORDERS */
	const myOrders = document.getElementById("section-myOrders");
	if (myOrders.style.display === "none") {
		myOrders.style.display = "none";
	} else {
		myOrders.style.display = "none";
	}

	/* SECTION__WISHLIST */
	const wishlist = document.getElementById("section-wishlist");
	if (wishlist.style.display === "none") {
		wishlist.style.display = "none";
	} else {
		wishlist.style.display = "none";
	}

	/* SECTION__RECENTLY-VIEWED */
	const recentlyViewed = document.getElementById("section-recentlyViewed");
	if (recentlyViewed.style.display === "none") {
		recentlyViewed.style.display = "none";
	} else {
		recentlyViewed.style.display = "none";
	}

	/* SECTION__MY-REVIEWS */
	const myReviews = document.getElementById("section-myReviews");
	if (myReviews.style.display === "none") {
		myReviews.style.display = "block";
	} else {
		myReviews.style.display = "block";
	}
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