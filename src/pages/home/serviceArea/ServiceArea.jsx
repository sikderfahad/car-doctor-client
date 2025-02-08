import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useLoadData from "../../../hooks/useLoadData";
import ServiceCard from "./ServiceCard";

const ServiceArea = () => {
  const { data: services } = useLoadData(
    "/car-services?fields=img,title,price"
  );
  // console.log("services", services);
  return (
    <div className="my-10">
      <SectionTitle top={"service"} title={"our service area"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.data.map((service) => (
          <ServiceCard key={service?._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceArea;
