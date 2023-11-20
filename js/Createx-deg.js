///////////////// ALL-SECTION__BORDER-GREEN /////////////////
const sectionButtons = document.querySelector('.function-borderColumn');
sectionButtons.addEventListener("click", function (e) {
	let borderGreen = e.target;
	if (borderGreen.closest('.function-borderItem')) {
		borderGreen.closest('.function-borderItem').classList.toggle('border-green');
	}
});
sectionButtons.addEventListener("click", function (e) {
	let backgroundGreen = e.target;
	if (backgroundGreen.closest('.function-backgroundItem')) {
		backgroundGreen.closest('.function-backgroundItem').classList.toggle('background-green');
	}
});

///////////////// POPAP__SING-IN /////////////////
document.getElementById("open-password1").addEventListener("change", function() {
	document.getElementById("popap-icon1").classList.toggle("password__open");
	if (document.getElementById("open-password1").checked) {
		document.getElementById("popap-input1").setAttribute("type", "text");
	} else {
		document.getElementById("popap-input1").setAttribute("type", "password");
	}
});

///////////////// POPAP__SING-UP /////////////////
document.getElementById("open-password2.1").addEventListener("change", function() {
	document.getElementById("popap-icon2.1").classList.toggle("password__open");
	if (document.getElementById("open-password2.1").checked) {
		document.getElementById("popap-input2.1").setAttribute("type", "text");
	} else {
		document.getElementById("popap-input2.1").setAttribute("type", "password");
	}
});
document.getElementById("open-password2.2").addEventListener("change", function() {
	document.getElementById("popap-icon2.2").classList.toggle("password__open");
	if (document.getElementById("open-password2.2").checked) {
		document.getElementById("popap-input2.2").setAttribute("type", "text");
	} else {
		document.getElementById("popap-input2.2").setAttribute("type", "password");
	}
});

///////////////// SECTION-PROFILE__FORM /////////////////
document.getElementById("open-password3").addEventListener("change", function() {
	document.getElementById("popap-icon3").classList.toggle("password__open");

	if (document.getElementById("open-password3").checked) {
		document.getElementById("popap-input3").setAttribute("type", "text");
	} else {
		document.getElementById("popap-input3").setAttribute("type", "password");
	}
});

document.getElementById("open-password4").addEventListener("change", function() {
	document.getElementById("popap-icon4").classList.toggle("password__open");

	if (document.getElementById("open-password4").checked) {
		document.getElementById("popap-input4").setAttribute("type", "text");
	} else {
		document.getElementById("popap-input4").setAttribute("type", "password");
	}
});

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