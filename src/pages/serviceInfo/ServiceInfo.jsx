import { useParams } from "react-router-dom";
import useLoadDataById from "../../hooks/useLoadDataById";

const CarServicePage = () => {
  const { id } = useParams();
  const { data: service, isloading } = useLoadDataById(id);
  // const { img, title } = service.data;
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2 space-y-8">
        <img
          src={service?.data?.img}
          alt="Car Service"
          className="w-full rounded-xl"
        />

        <h1 className="text-3xl font-bold">{service?.data?.title}</h1>
        <p className="text-gray-700 leading-relaxed">
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised Words Which Don’t Look Even Slightly Believable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Instant Car Services",
            "24/7 Quality Service",
            "Easy Customer Service",
            "Quality Cost Service",
          ].map((item, index) => (
            <div
              key={index}
              className="border p-5 rounded-xl hover:border-red-500 transition duration-300"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">
                It Uses A Dictionary Of Over 200 Latin Words, Combined With A
                Model Sentence Structures.
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold">3 Simple Steps to Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["STEP ONE", "STEP TWO", "STEP THREE"].map((step, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-xl shadow-sm"
            >
              <div className="text-red-500 text-3xl font-bold">
                0{index + 1}
              </div>
              <h4 className="font-semibold mt-3 text-lg">{step}</h4>
              <p className="text-gray-600 text-sm mt-1">
                It Uses A Dictionary Of Over 200.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-8">
        <div className="bg-white shadow-lg p-5 rounded-xl">
          <h3 className="font-semibold text-xl mb-3">Services</h3>
          {[
            "Full Car Repair",
            "Engine Repair",
            "Automatic Services",
            "Engine Oil Change",
            "Battery Charge",
          ].map((service, index) => (
            <button
              key={index}
              className={`w-full text-left px-5 py-3 rounded-xl mb-3 transition duration-300 ${
                index === 0
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 hover:bg-red-100"
              }`}
            >
              {service} ➜
            </button>
          ))}
        </div>

        <div className="bg-gray-900 text-white p-5 rounded-xl">
          <h3 className="font-semibold text-xl mb-3">Download</h3>
          <button className="w-full bg-gray-700 py-3 rounded-xl mb-3 hover:bg-gray-600 transition">
            Our Brochure ➜
          </button>
          <button className="w-full bg-gray-700 py-3 rounded-xl hover:bg-gray-600 transition">
            Company Details ➜
          </button>
        </div>

        <div className="bg-black text-white p-5 rounded-xl text-center">
          <h3 className="font-bold text-2xl mb-3">Car Doctor</h3>
          <p className="text-sm">Need Help? We Are Here To Help You</p>
          <div className="bg-white text-black p-3 mt-4 rounded-xl shadow">
            <p className="text-red-500 font-bold">Car Doctor Special</p>
            <p>
              Save up to <strong>60% off!</strong>
            </p>
          </div>
          <button className="bg-red-500 text-white w-full py-3 mt-4 rounded-xl hover:bg-red-600 transition">
            Get A Quote
          </button>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold">Price $250.00</p>
          <button className="bg-red-500 text-white w-full py-4 rounded-xl mt-3 hover:bg-red-600 transition">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarServicePage;
