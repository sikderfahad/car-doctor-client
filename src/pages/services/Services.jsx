import PageBanner from "../../components/pageBanner/PageBanner";
import useLoadData from "../../hooks/useLoadData";
import ServiceCard from "../home/serviceArea/ServiceCard";

const Services = () => {
  const { data: services } = useLoadData(
    "/car-services?fields=img,title,price"
  );
  return (
    <div>
      <PageBanner title="all services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.data.map((service) => (
          <ServiceCard key={service?._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
