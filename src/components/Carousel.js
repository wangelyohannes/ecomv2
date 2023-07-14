import React, { useState } from 'react';

const Carousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const slides = document.getElementsByClassName('carousel__item');
  const totalSlides = slides.length;

  const updateSlidePosition = () => {
    for (let slide of slides) {
      slide.classList.remove('carousel__item--visible');
      slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
  };

  const moveToNextSlide = () => {
    if (slidePosition === totalSlides - 1) {
      setSlidePosition(0);
    } else {
      setSlidePosition(slidePosition + 1);
    }

    updateSlidePosition();
  };

  const moveToPrevSlide = () => {
    if (slidePosition === 0) {
      setSlidePosition(totalSlides - 1);
    } else {
      setSlidePosition(slidePosition - 1);
    }

    updateSlidePosition();
  };

  return (
    <div>
      {/* Your JSX for the carousel component */}
      {/* Assuming you have buttons with ids "carousel__button--next" and "carousel__button--prev" */}
      <button id="carousel__button--next" onClick={moveToNextSlide}>
        Next
      </button>
      <button id="carousel__button--prev" onClick={moveToPrevSlide}>
        Previous
      </button>
    </div>
  );
};

export default Carousel;
