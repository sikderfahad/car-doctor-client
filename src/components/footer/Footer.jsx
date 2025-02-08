import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 mt-20 py-20">
      <div className="w-10/12 mx-auto lg:flex justify-between">
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

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Company</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Why Car Doctor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col justify-between items-end">
          <div>
            <h2 className="text-lg font-semibold mb-2">Support</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
