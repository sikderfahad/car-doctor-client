import { useNavigate } from "react-router-dom";
import useLoadData from "../../hooks/useLoadData";
import PropTypes from "prop-types";

const ServicesCard = ({ id }) => {
  const navigate = useNavigate();
  const { data: services } = useLoadData("/car-services?fields=title");
  return (
    <div className="bg-dark7 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-95 p-5 md:p-5 xltt:p-10 rounded-xl">
      <h3 className="font-bold text-2xl mb-3">Services</h3>
      {services?.success &&
        services?.data.map((service) => (
          <button
            onClick={() => navigate(`/service-info/${service?._id}`)}
            key={service?._id}
            className={`w-full font-semibold flex md:flex-none lg:flex items-center justify-between text-left px-5 md:px-2 lg:px-5 py-3 rounded-xl mb-3 transition duration-300 capitalize ${
              service?._id === id
                ? "bg-red-500 text-white"
                : "bg-white hover:bg-red-100"
            }`}
          >
            <span>{service?.title}</span>{" "}
            <span
              className={`${
                service?._id !== id ? "text-red-500" : ""
              } block md:hidden lg:block`}
            >
              ➜
            </span>
          </button>
        ))}
    </div>
  );
};

ServicesCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ServicesCard;
