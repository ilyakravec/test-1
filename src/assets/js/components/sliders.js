new Swiper('.training__slider', {
	slidesPerView: 1.2,
	spaceBetween: 20,
	centeredSlides: true,
	initialSlide: 1,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: 'true',
	},

	breakpoints: {
		768: {
			slidesPerView: 1,
		},
		1320: {
			slidesPerView: 1.2,
		},
		1920: {
			slidesPerView: 1.5,
		},
		2560: {
			slidesPerView: 1.7,
		},
	},
});

new Swiper('.events__calendar', {
	slidesPerView: 'auto',
	slidesPerGroup: 3,
	spaceBetween: 6,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

new Swiper('.our-lecturers__slider', {
	slidesPerView: 1,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

new Swiper('.reviews__slider', {
	slidesPerView: 2,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

new Swiper('.partners-first', {
	loop: true,
	slidesPerView: 7.3,
	slidesPerGroup: 1,
	spaceBetween: 16,
	autoplay: {
		delay: 900,
		disableOnInteraction: false,
	},
});

new Swiper('.partners-second', {
	loop: true,
	slidesPerView: 7.3,
	spaceBetween: 16,
	autoplay: {
		delay: 900,
		reverseDirection: true,
	},
});

const gallerySliders = document.querySelectorAll("[class*='main-gallery-5el']");
gallerySliders.forEach((el) => {
	const classGallery = el.classList[1].slice(16);
	var nav5el = new Swiper(`.gallery-nav-5el${classGallery}`, {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		watchOverflow: false,
		breakpoints: {
			360: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1320: {
				slidesPerView: 5.4,
				spaceBetween: 20,
			},
		},
	});

	var swiper = new Swiper(`.main-gallery-5el${classGallery}`, {
		loop: true,
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: nav5el,
		},
	});
});
