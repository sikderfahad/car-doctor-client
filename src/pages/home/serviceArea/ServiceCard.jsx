import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { img, title, price, _id } = service;
  return (
    <div className="card border-1 border-gray-100 shadow-sm">
      <figure className="p-5 w-full h-[300px]">
        <img src={img} alt={title} className="rounded-xl w-full h-full" />
      </figure>
      <div className="card-body text-center p-5">
        <h2 className="card-title text-2xl text-dark2 font-bold">{title}</h2>
        <div className="text-lg font-medium text-red-600 flex items-center justify-between mt-3">
          <p className="text-left">Price: ${price}</p>
          <span
            onClick={() => navigate(`/service-info/${_id}`)}
            className="w-8 h-8 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition duration-200 flex items-center justify-center"
          >
            <FaArrowRight />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
