const modalCart = document.getElementsByClassName('cart')[0];
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];

function bodyMargin() {
	bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

bodyMargin();

modalCart.addEventListener("click", () => {
	modalBackground.style.display = "block";
	if (windowInnerWidth >= 1366) {
		bodyMargin();
	}
	modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
});

modalClose.addEventListener("click", () => {
	modalBackground.style.display = "none";
	if (windowInnerWidth >= 1366) {
		bodyMargin();
	}
});

modalBackground.addEventListener("click", (event) => {
	if (event.target === modalBackground) {
		modalBackground.style.display = "none";
		if (windowInnerWidth >= 1366) {
			bodyMargin();
		}
	}
});


