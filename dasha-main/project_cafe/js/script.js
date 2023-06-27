const carousel = document.querySelector(".carousel"),
	firstImg = carousel.querySelectorAll("img")[0],
	arrowIcons = document.querySelectorAll(".wrapper1 i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft;

const showHideIcons = () => {
	let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
	arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
	arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
	icon.addEventListener("click", () => {
		let firstImgWidth = firstImg.clientWidth + 14;
		carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
		setTimeout(() => showHideIcons(), 60);
	});
});

const autoSlide = () => {
	if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

	positionDiff = Math.abs(positionDiff);
	let firstImgWidth = firstImg.clientWidth + 14;
	let valDifference = firstImgWidth - positionDiff;
	if (carousel.scrollLeft > prevScrollLeft) {
		return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
	}
	carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;

}


const dragStart = (e) => {
	isDragStart = true;
	prevPageX = e.pageX || e.touches[0].pageX;
	prevScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
	isDragStart = false;
	carousel.classList.remove("dragging");
	if (!isDragging) return;
	isDragging = false;
	autoSlide();
}

const dragging = (e) => {
	if (!isDragStart) return;
	e.preventDefault();
	isDragging = true;
	carousel.classList.add("dragging");
	positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
	carousel.scrollLeft = prevScrollLeft - positionDiff;
	showHideIcons();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.info-container');
 
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach((block)=> {
            let blockPosition = block.getBoundingClientRect().top;
            if (blockPosition < windowHeight - 100) {
                block.style.opacity = "1";
                block.style.transform = "translateX(0)";
            }
        });
    }
 
    checkBlocksVisibility();
 
    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});