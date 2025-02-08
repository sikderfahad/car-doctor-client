const Slide = ({ img, title, desc }) => {
  return (
    <div className="carousel-item relative w-full">
      <img
        src={img}
        className="w-full h-full object-cover"
        alt="Car Servicing"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-linear-to-r from-black to-[#ffffff00] bg-opacity-50 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Affordable Price <br /> For Car Servicing
            </h1>
            <p className="mt-4 text-lg">
              There are many variations of passages available, but the majority
              have suffered alteration in some form.
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
    </div>
  );
};

export default Slide;
