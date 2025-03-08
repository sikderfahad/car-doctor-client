import { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slide from "./Slide";

const HeroSlider = () => {
  const carouselRef = useRef(null);

  // Function to move to the next slide
  const nextSlide = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft += width;

      // If at the last slide, return to the first slide

      if (
        Math.ceil(carouselRef.current.scrollLeft) + width >=
        carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollLeft = 0;
      }
    }
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft -= width;

      // If at the first slide, go to the last slide
      if (carouselRef.current.scrollLeft <= 0) {
        carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
      }
    }
  };

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{ height: "calc(100vh - 120px)" }}
      className="relative w-full max-h-[800px] mx-auto"
    >
      {/* Carousel Container */}
      <div
        className="carousel w-full h-full rounded-xl overflow-hidden scroll-smooth"
        ref={carouselRef}
      >
        <Slide
          img={
            "https://res.cloudinary.com/dwa2voehg/image/upload/v1738831087/slide1_aefzlu.jpg"
          }
        />

        <Slide
          img={
            "https://res.cloudinary.com/dwa2voehg/image/upload/v1738831087/slide2_ipa3qe.jpg"
          }
        />

        <Slide
          img={
            "https://res.cloudinary.com/dwa2voehg/image/upload/v1738831088/slide3_zy7eb9.jpg"
          }
        />

        <Slide
          img={
            "https://res.cloudinary.com/dwa2voehg/image/upload/v1738831087/slide4_hmjtx9.jpg"
          }
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 right-5 flex gap-3 z-10">
        <button
          onClick={prevSlide}
          className="bg-gray-800 cursor-pointer text-white p-3 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-red-500 cursor-pointer text-white p-3 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
