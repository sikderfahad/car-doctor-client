import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import quoteImg from "./quote.png";
import useLoadData from "../../../hooks/useLoadData";

export default function TestimonialCarousel() {
  const { data: testimonials } = useLoadData("/testimonials");
  const [index, setIndex] = useState(0);
  const visibleCards = 2;

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials?.data.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= testimonials?.data.length - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <div className="my-20">
      <SectionTitle top={"testimonial"} title={"what customer says"} />
      <div className="relative flex items-center justify-center p-6">
        <button
          className="absolute z-[1] left-0 p-3 bg-gray-200 rounded-full text-2xl"
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </button>
        <div className="flex w-full justify-center gap-6 overflow-hidden">
          {testimonials?.data
            .slice(index, index + visibleCards)
            .map((testimonial) => (
              <motion.div
                key={testimonial._id}
                className="card flex-grow bg-white shadow-lg border-2 border-gray-200 rounded-lg p-6 text-center relative"
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -500 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex relative items-center justify-start">
                  <figure className="p-4 flex justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
                    />
                  </figure>

                  <div className="text-left">
                    <h2 className="text-2xl capitalize font-bold text-gray-700">
                      {testimonial.name}
                    </h2>
                    <p className="text-gray-500 text-lg font-semibold">
                      {testimonial.profession}
                    </p>
                  </div>
                  <div className="absolute w-[70px] right-0">
                    <img src={quoteImg} alt="" />
                  </div>
                </div>
                <div className="card-body p-2">
                  <p className="mt-2 text-gray-600">{testimonial.review}</p>
                  <div className="flex justify-center mt-2 text-orange-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        <button
          className="absolute right-0 p-3 bg-red-500 text-white rounded-full text-2xl"
          onClick={nextSlide}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
