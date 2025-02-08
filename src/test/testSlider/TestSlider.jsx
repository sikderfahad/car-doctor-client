import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1615730844812-3c3b733f58f8",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages available, but the majority have suffered alteration in some form.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1571327077701-614dba50c94b",
    title: "Professional Car Repair",
    description:
      "Experience high-quality service with expert professionals in the field of car repair.",
  },
];

const TestSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-scroll every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <AnimatePresence>
        {/* Animated Slide */}
        <motion.div
          key={slides[currentSlide].id}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentSlide].img}
            className="w-full h-[450px] md:h-[550px] object-cover"
            alt={slides[currentSlide].title}
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="max-w-lg text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="mt-4 text-lg">
                  {slides[currentSlide].description}
                </p>
                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <button className="bg-red-500 text-white px-5 py-3 rounded font-medium">
                    Discover More
                  </button>
                  <button className="border border-white text-white px-5 py-3 rounded font-medium">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons (Bottom-Right Corner) */}
      <div className="absolute bottom-5 right-5 flex gap-3 z-10">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-3 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-red-500 text-white p-3 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestSlider;
