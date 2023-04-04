const closeBtn = document.querySelector('.close-btn');
const body = document.body;
const imageBanner = document.querySelectorAll('.image-banner');
const cellHeading = document.querySelector('.cell.heading');

document.addEventListener('click', (event) => {
	// console.log(!body.classList.contains('active'));
	if (event.target.closest('.close-btn')) return;

	if (!event.target.closest('.nav')) {
		body.classList.remove('active');
	}
});

function controlBubble(event) {
	if (event.target.closest('.image-box')) {
		const targetID = event.target.closest('.image-box').attributes[1].value;
		const targetHover = document.getElementById(`${targetID}`);
		const targetImageBox = event.target.closest('.image-box');
		const position = targetImageBox.getBoundingClientRect();
		const top = event.clientY - position.top;
		const left = event.clientX - position.left;
		targetHover.style.top = `${top - 50}px`;
		targetHover.style.left = `${left - 50}px`;
	}
}
function checkBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 4;
	const headingTop = cellHeading.getBoundingClientRect().top;
	if (headingTop < triggerBottom) {
		cellHeading.classList.add('show');
	} else {
		cellHeading.classList.remove('show');
	}
	imageBanner.forEach((image) => {
		const boxTop = image.getBoundingClientRect().top;
		if (boxTop < triggerBottom) {
			image.classList.add('slide');
		} else {
			image.classList.remove('slide');
		}
	});
}

closeBtn.addEventListener('click', () => {
	body.classList.toggle('active');
});

document.addEventListener('mousemove', controlBubble);

checkBoxes();
window.addEventListener('scroll', checkBoxes);
// Removing active class from body when clicking outside the navbar

let sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach((sliderContainer) => {
	let sliderChildren = [...sliderContainer.children];
	let slides = sliderChildren.filter((el) => el.classList.contains('slide'));
	let currentSlide = 0;
	let btnRight = sliderChildren.filter((el) => el.classList.contains('slider-btn-right'));
	let btnLeft = sliderChildren.filter((el) => el.classList.contains('slider-btn-left'));
	// if (currentSlide === 0) {
	// 	btnLeft.forEach((btn) => (btn.style.opacity = '.3'));
	// }

	// if (currentSlide === slides.length - 1) {
	// 	btnRight.forEach((btn) => (btn.style.opacity = '.3'));
	// }

	sliderContainer.addEventListener('click', (event) => {
		if (event.target.closest('.slider-btn-right')) {
			if (currentSlide < slides.length - 1) {
				currentSlide++;
			}
		} else if (event.target.closest('.slider-btn-left')) {
			if (currentSlide > 0) {
				currentSlide--;
			}
		}
		slides.forEach((el, i) => {
			let translateVal = (i - currentSlide) * 100;
			el.style.transform = `translateX(${translateVal}%)`;
		});
	});
});

// Loading animation
window.addEventListener('load', function () {
	// Select the loading bar element
	const loadingBar = document.querySelector('.loading-overlay');

	// Hide the loading bar when the page is fully loaded
	loadingBar.style.display = 'none';
});
