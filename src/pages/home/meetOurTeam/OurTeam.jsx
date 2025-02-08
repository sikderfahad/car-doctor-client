import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useLoadData from "../../../hooks/useLoadData";

export default function OurTeam() {
  const { data: experts } = useLoadData("/team-members");
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? experts?.data.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= experts?.data.length - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <div className="my-20">
      <SectionTitle top={"team"} title={"meat our team"} />

      <div className="relative flex items-center justify-center p-6">
        <button
          className="absolute z-[1] left-0 p-3 bg-gray-200 rounded-full text-2xl"
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </button>
        <div className="flex w-full justify-center gap-6 overflow-hidden">
          {experts?.data.slice(index, index + visibleCards).map((expert) => (
            <motion.div
              key={expert._id}
              className="card flex-grow bg-white shadow-lg border-2 border-gray-200 rounded-lg p-4 text-center"
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="p-4">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="text-lg font-semibold">{expert.name}</h2>
                <p className="text-gray-500 text-sm">{expert.profession}</p>
                <div className="flex justify-center space-x-3 mt-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                    <FaFacebook />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full">
                    <FaTwitter />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-700 text-white rounded-full">
                    <FaLinkedin />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center bg-pink-600 text-white rounded-full">
                    <FaInstagram />
                  </div>
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
