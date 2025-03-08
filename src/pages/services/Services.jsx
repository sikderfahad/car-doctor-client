import { Helmet } from "react-helmet";
import PageBanner from "../../components/pageBanner/PageBanner";
import SpinnerCircle from "../../components/spinnerCircle/SpinnerCircle";
import useLoadData from "../../hooks/useLoadData";
import ServiceCard from "../home/serviceArea/ServiceCard";

const Services = () => {
  const { data: services, isLoading } = useLoadData(
    "/car-services?fields=img,title,price"
  );
  return (
    <div>
      <Helmet>
        <title>Car doctor | Services</title>
      </Helmet>
      <PageBanner title="all services" />

      <div className={isLoading && "flex items-center justify-center"}>
        {isLoading ? (
          <SpinnerCircle />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.data.map((service) => (
              <ServiceCard key={service?._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
