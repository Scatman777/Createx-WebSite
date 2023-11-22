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

const swiperCloth = new Swiper('.swiper', {
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