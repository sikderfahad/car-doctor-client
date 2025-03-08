import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const footerItems = [
    { title: "about", navs: ["home", "service", "contact"] },
    { title: "company", navs: ["why car doctor", "about"] },
    { title: "support", navs: ["support center", "feedback", "accessibility"] },
  ];
  return (
    <footer className="bg-black text-gray-100 mt-20 py-20">
      <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex-col md:flex-row md:flex flex gap-10 flex-wrap justify-between">
        {/* Brand Section */}
        <div className="w-full md:w-1/3 lg:w-1/5 flex flex-col justify-between">
          <div>
            <div className=" mb-4">
              <div className="">
                <img
                  src="https://res.cloudinary.com/dwa2voehg/image/upload/v1738820018/logo_f3vjqp.svg"
                  alt=""
                />
              </div>
            </div>
            <p className="text-sm">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial.
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaGoogle className="text-xl cursor-pointer hover:text-red-500" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600" />
          </div>
        </div>

        {footerItems.map((column, idx) => (
          <FooterColumn key={idx} column={column} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
