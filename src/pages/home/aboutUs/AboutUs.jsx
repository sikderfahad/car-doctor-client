const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 py-16">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-1/2">
        <div className="overflow-hidden w-3/4 h-[400px]">
          <img
            src="https://res.cloudinary.com/dwa2voehg/image/upload/v1738835720/person_ktcpbu.jpg"
            alt="Mechanic"
            style={{ transform: "scale(1.5) translate(45px, 45px)" }}
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute bottom-[-32px] right-[100px] w-[55%] rounded-lg border-8 border-white">
          <img
            src="https://res.cloudinary.com/dwa2voehg/image/upload/v1738835720/parts_rpfkap.jpg"
            alt="Car Parts"
            className=""
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 pe-[150px]">
        <h3 className="text-red-500 font-semibold">About Us</h3>
        <h2 className="text-4xl font-bold mt-2 leading-tight">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="text-gray-600 mt-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="text-gray-600 mt-4">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition">
          Get More Info
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
