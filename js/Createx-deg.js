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