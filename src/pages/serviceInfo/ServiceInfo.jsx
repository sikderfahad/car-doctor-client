import { useNavigate, useParams } from "react-router-dom";
import useLoadDataById from "../../hooks/useLoadDataById";
import ServicesCard from "./ServicesCard";
import DownloadCard from "./DownloadCard";
import OfferCard from "./OfferCard";
import PageBanner from "../../components/pageBanner/PageBanner";

const CarServicePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: service } = useLoadDataById(id);
  // const { img, title } = service.data;
  return (
    <div className="">
      <PageBanner title="service details" />

      <div className="mx-auto py-10 grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-7 space-y-8">
          <img
            src={service?.data?.img}
            alt="Car Service"
            className="w-full rounded-xl"
          />

          <h1 className="text-3xl font-bold">{service?.data?.title}</h1>
          <p className="text-gray-700 leading-relaxed">
            {service?.data?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service?.data?.facility.map((item, index) => (
              <div
                key={index}
                className="border p-5 rounded-xl hover:border-red-500 transition duration-300 break-words"
              >
                <h3 className="font-semibold text-lg mb-2">{item?.name}</h3>
                <p className="text-gray-600 text-sm">{item?.details}</p>
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
        <div className="lg:col-span-3 space-y-8">
          <ServicesCard id={service?.data && service?.data?._id} />
          <DownloadCard />
          <OfferCard />

          <div className="">
            <p className="text-3xl font-bold">Price ${service?.data?.price}</p>
            <button
              onClick={() => navigate(`/checkout/${service?.data?._id}`)}
              className="bg-red-500 text-white w-full py-4 rounded-xl mt-3 hover:bg-red-600 transition"
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarServicePage;
