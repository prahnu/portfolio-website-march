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
