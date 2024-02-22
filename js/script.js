$(document).ready(() => {
	let interval;
	const transitionTime = 2000;

	const showImage = (index) => {
		$("#slider img").removeClass("active").eq(index).addClass("active");
		$("#slider-caption").text($("#slider img").eq(index).data("caption"));
	};

	const currentIndex = () => $("#slider img.active").index();

	const nextImage = () => {
		let index = (currentIndex() + 1) % $("#slider img").length;
		showImage(index);
	};

	const previousImage = () => {
		let index = (currentIndex() - 1 + $("#slider img").length) % $("#slider img").length;
		showImage(index);
	};

	const randomImage = () => {
		let index = Math.floor(Math.random() * $("#slider img").length);
		showImage(index);
	};

	const toggleCarousel = () => {
		if (interval) {
			clearInterval(interval);
			interval = null;
			$("#slider-toggle i").toggle();
		} else {
			interval = setInterval(nextImage, transitionTime);
			$("#slider-toggle i").toggle();
		}
	};

	showImage(0);

	$("#toolbar-toggle").click((e) => {
		e.preventDefault();
		$(".toolbar").toggle();
		$("#toolbar-toggle i").toggleClass("fa-chevron-down fa-chevron-up");
	});

	$("#slider-previous").click(previousImage);
	$("#slider-next").click(nextImage);
	$("#slider-toggle").click(toggleCarousel);
	$("#slider-random").click(randomImage);

	$(document).keydown((e) => {
		if (e.key === "ArrowRight") {
			nextImage();
		} else if (e.key === "ArrowLeft") {
			previousImage();
		}
	});
});
