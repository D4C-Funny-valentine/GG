import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./carousel.css";

/**
 * A wrapper component for the React Multi Carousel with default props.
 * 
 * @param {object} props - Component props.
 * @param {boolean} [props.arrow=false] - Determines whether to show arrow navigation for the carousel.
 * @param {boolean} [props.autoPlay=true] - Determines whether the carousel should autoplay.
 * @param {React.ReactElement[]} props.children - The child elements to be rendered within the carousel.
 * @param {number} [props.additionalTransfrom=0] - Additional transform value.
 * @param {number} [props.autoPlaySpeed=3000] - Speed of autoplay in milliseconds.
 * @param {boolean} [props.centerMode=false] - Whether to center the active slide.
 * @param {string} [props.className="carousel"] - Custom CSS class for the carousel container.
 * @param {string} [props.containerClass="container-with-dots"] - Custom CSS class for the container with dots.
 * @param {string} [props.dotListClass=""] - Custom CSS class for the dot list.
 * @param {boolean} [props.draggable=true] - Whether the carousel items are draggable.
 * @param {boolean} [props.focusOnSelect=false] - Whether to focus on the selected item.
 * @param {boolean} [props.infinite=true] - Whether to enable infinite loop mode.
 * @param {string} [props.itemClass=""] - Custom CSS class for the carousel items.
 * @param {boolean} [props.keyBoardControl=true] - Whether to enable keyboard control.
 * @param {number} [props.minimumTouchDrag=80] - Minimum touch drag distance for swiping.
 * @param {boolean} [props.pauseOnHover=true] - Whether to pause autoplay on hover.
 * @param {boolean} [props.renderArrowsWhenDisabled=false] - Whether to render arrows when disabled.
 * @param {boolean} [props.renderButtonGroupOutside=false] - Whether to render the button group outside the carousel.
 * @param {boolean} [props.renderDotsOutside=false] - Whether to render the dots outside the carousel.
 * @param {boolean} [props.rewind=false] - Whether to enable rewind mode.
 * @param {boolean} [props.rewindWithAnimation=false] - Whether to enable rewind with animation.
 * @param {boolean} [props.rtl=false] - Whether to enable right-to-left mode.
 * @param {boolean} [props.shouldResetAutoplay=false] - Whether to reset autoplay when interacting with the carousel.
 * @param {boolean} [props.showDots=false] - Whether to show dots navigation.
 * @param {string} [props.sliderClass=""] - Custom CSS class for the carousel slider.
 * @param {number} [props.slidesToSlide=2] - Number of slides to slide.
 * @param {boolean} [props.swipeable=true] - Whether the carousel is swipeable.
 * @returns {React.ReactElement}
 */
const CarouselWrapper = ({ 
    arrow, 
    autoPlay, 
    children, 
    additionalTransfrom = 0, 
    autoPlaySpeed = 3000, 
    centerMode = false, 
    className = "carousel", 
    containerClass = "container-with-dots", 
    dotListClass = "", 
    draggable = true, 
    focusOnSelect = false, 
    infinite = true, 
    itemClass = "", 
    keyBoardControl = true, 
    minimumTouchDrag = 80, 
    pauseOnHover = true, 
    renderArrowsWhenDisabled = false, 
    renderButtonGroupOutside = false, 
    renderDotsOutside = false, 
    rewind = false, 
    rewindWithAnimation = false, 
    rtl = false, 
    shouldResetAutoplay = false, 
    showDots = false, 
    sliderClass = "", 
    slidesToSlide = 2, 
    swipeable = true,
}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 5000, min: 1200 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1200, min: 900 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 900, min: 640 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };
    // Default props for the carousel
    const defaultCarouselProps = {
        additionalTransfrom,
        arrows: arrow ?? false,
        autoPlay: autoPlay ?? true,
        autoPlaySpeed,
        centerMode,
        className,
        containerClass,
        dotListClass,
        draggable,
        focusOnSelect,
        infinite,
        itemClass,
        keyBoardControl,
        minimumTouchDrag,
        pauseOnHover,
        renderArrowsWhenDisabled,
        renderButtonGroupOutside,
        renderDotsOutside,
        rewind,
        rewindWithAnimation,
        rtl,
        shouldResetAutoplay,
        showDots,
        sliderClass,
        slidesToSlide,
        swipeable
    };

    return (
        <Carousel responsive={responsive} {...defaultCarouselProps}>
            {children}
        </Carousel>
    );
}

export default CarouselWrapper;
