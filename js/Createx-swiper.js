///////////////// SECTION-PRODCT__SWIEPR /////////////////
const swiperProduct = new Swiper('.section-product__swiper', {
	watchOverflow: false,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	slidesPerColumn: 1,

	pagination: {
	  el: '.section-product__swiper-pagination',
	  clickable: true,
	},

	navigation: {
	  nextEl: '.section-product__swiper-arrowNext',
	  prevEl: '.section-product__swiper-arrowPrev',
	},
});

const swiperCloth = new Swiper('.section-setClothes__swiper', {
	watchOverflow: false,
	slidesPerView: 2,
	slidesPerGroup: 2,
	slidesPerColumn: 1,

	pagination: {
	  el: '.section-setClothes__swiper-pagination',
	  clickable: true,
	},

	navigation: {
	  nextEl: '.section-setClothes__arrow-next',
	  prevEl: '.section-setClothes__arrow-prev',
	},
});