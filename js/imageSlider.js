const initSlider = () => {
    const imageList = document.querySelector(".slider__wrapper .wrapper__image-list");
    const slideButtons = document.querySelectorAll(".slider__wrapper .slide_button");
    const sliderScrollbar = document.querySelector(".main__section-container .slider__scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar__thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    /* HANDLE SCROLLBAR THUMB DRAG */
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
    
        /* UPDATE THUMB ON MOUSE ON MOVE */
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPostion = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPostion, newThumbPosition));
            const scrollPostion = (boundedPosition / maxThumbPostion) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPostion;
        }

        /* REMOVE EVENT ON MOUSE MOVE */
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        /* ADD EVENT LISTENER ON MOUSE MOVE */
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    /* SCROLL BEHAVIOUR */
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
           const direction = button.id === "prev_slide" ? -1 : 1;
           const scrollAmount = imageList.clientWidth * direction;
           imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    /* BUTTONS */
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    /* BAR */
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}


window.addEventListener("load", initSlider);