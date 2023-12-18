function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

/////////////// INPUT-PRICE ///////////////
let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
    }
  });
});
rangePrice.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

///////////////// SECTION-CATALOG /////////////////
const filter = document.querySelector('.filter');

filter.addEventListener('change', function() {
  document.querySelectorAll('.body-cloth__column').forEach(function(n) {
    n.classList.toggle('hidden', this.length && !this.includes(n.dataset.category));
  }, Array.from(this.querySelectorAll(':checked'), n => n.dataset.filter));
});

filter.dispatchEvent(new Event('change'));

///////////////// HEADER__MENU-LANG /////////////////
function MenuLangList() {
  document.getElementById("MenuLang__Open").classList.toggle("lang-list__open");
  document
    .getElementById("MenuLang__Arrow")
    .classList.toggle("lang-list__arrow-open");
}

function burgerLangList() {
  document
    .getElementById("BurgerLang__Open")
    .classList.toggle("burger-list__open");
  document
    .getElementById("BurgerLang__Arrow")
    .classList.toggle("burger-list__arrow-open");
}

///////////////// SECTION-CATALOG /////////////////
function HideFilters() {
  const ButtonFilter = document.getElementById("BlockSortingHide");
  if (ButtonFilter.style.display === "none") {
    ButtonFilter.style.display = "flex";
  } else {
    ButtonFilter.style.display = "none";
  }

  document
    .getElementById("BlockProductStyle")
    .classList.toggle("block-product__style");
  document.getElementById("ButtonStyleImg").classList.toggle("button-icon");

  const ButtonStyle1 = document.getElementById("ButtonStyle1");
  if (ButtonStyle1.innerHTML === "Hide filters") {
    ButtonStyle1.innerHTML = "Show filters";
  } else {
    ButtonStyle1.innerHTML = "Hide filters";
  }

  const ButtonStyle2 = document.getElementById("ButtonStyle2");
  if (ButtonStyle2.innerHTML === "Hide filters") {
    ButtonStyle2.innerHTML = "Show filters";
  } else {
    ButtonStyle2.innerHTML = "Hide filters";
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
  document
    .getElementById("block-columnProduct__open")
    .classList.toggle("columnProfile__open");
  document
    .getElementById("section-myOrders__plus")
    .classList.toggle("minus-image");
}

/////////////// FUNCTION__SECTIOB-BLOG /////////////////
function buttonFunctionBlog1() {
  document.getElementById("listBlog1").classList.toggle("show-flex");
  document.getElementById("plusBlog1").classList.toggle("minus-image");
}
function buttonFunctionBlog2() {
  document.getElementById("listBlog2").classList.toggle("show-flex");
  document.getElementById("plusBlog2").classList.toggle("minus-image");
}
function buttonFunctionBlog3() {
  document.getElementById("listBlog3").classList.toggle("show-flex");
  document.getElementById("plusBlog3").classList.toggle("minus-image");
}

/////////////// SECTION-CATALOG__SHOW-MENU /////////////////
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
  document.getElementById("list6").classList.toggle("show-flex");
  document.getElementById("plus6").classList.toggle("minus-image");
}

/////////////// FILTER-POPAP__SHOW-MENU /////////////////
function buttonFunctionFilter1() {
  document.getElementById("listFilter1").classList.toggle("show-flex");
  document.getElementById("plusFilter1").classList.toggle("minus-image");
}
function buttonFunctionFilter2() {
  document.getElementById("listFilter2").classList.toggle("show-flex");
  document.getElementById("plusFilter2").classList.toggle("minus-image");
}
function buttonFunctionFilter3() {
  document.getElementById("listFilter3").classList.toggle("show-grid");
  document.getElementById("plusFilter3").classList.toggle("minus-image");
}
function buttonFunctionFilter4() {
  document.getElementById("listFilter4").classList.toggle("show-flex");
  document.getElementById("plusFilter4").classList.toggle("minus-image");
}
function buttonFunctionFilter5() {
  document.getElementById("listFilter5").classList.toggle("show-flex");
  document.getElementById("plusFilter5").classList.toggle("minus-image");
}
function buttonFunctionFilter6() {
  document.getElementById("listFilter6").classList.toggle("show-flex");
  document.getElementById("plusFilter6").classList.toggle("minus-image");
}

///////////////// SECTION-CONTACT /////////////////
function OpenBlockContact1() {
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
    block_ContactUs.style.display = "block";
  } else {
    block_ContactUs.style.display = "block";
  }
}
function OpenBlockContact2() {
  /* BLOKC-CONTACT-US */
  const block_ContactUs = document.getElementById("blockContactUs");
  if (block_ContactUs.style.display === "none") {
    block_ContactUs.style.display = "none";
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
function OpenBlockContact3() {
  /* BLOKC-CONTACT-US */
  const block_ContactUs = document.getElementById("blockContactUs");
  if (block_ContactUs.style.display === "none") {
    block_ContactUs.style.display = "none";
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
