import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useLoadData from "../../../hooks/useLoadData";
import ServiceCard from "./ServiceCard";

const ServiceArea = () => {
  const navigate = useNavigate();
  const { data: services } = useLoadData(
    "/car-services?fields=img,title,price&slice=6"
  );
  // console.log("services", services);
  return (
    <div className="my-10">
      <SectionTitle top={"service"} title={"our service area"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.data &&
          services?.data.map((service) => (
            <ServiceCard key={service?._id} service={service} />
          ))}
      </div>
      <div className="w-full text-center mt-10">
        <button
          onClick={() => navigate("/services")}
          className="text-red-500 border-2 border-red-500 capitalize bg-transparent px-3 py-2 rounded-lg text-lg font-semibold hover:bg-red-500 hover:text-white transition duration-300"
        >
          more services
        </button>
      </div>
    </div>
  );
};

export default ServiceArea;
