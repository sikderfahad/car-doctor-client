import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageBanner = ({ title }) => {
  return (
    <div>
      <div className="relative w-full h-[300px] mb-32 rounded-xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/dwa2voehg/image/upload/v1739093823/checkout_eewgvj.png"
          alt="Service Details"
          className="w-full h-full object-cover"
        />

        <div className="absolute flex items-center inset-0 bg-gradient-to-r from-[#000000] to-transparent">
          <h1 className="text-5xl ml-24 text-white capitalize font-bold">
            {title}
          </h1>
        </div>

        <div className="absolute breadcrumb-style bottom-0 left-0 w-full flex justify-center">
          <div className="relative bg-red-500 text-white px-10 py-3 font-medium breadcrumb-style">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            /<span className="capitalize">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageBanner;
