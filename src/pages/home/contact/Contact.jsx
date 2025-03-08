import { FaRegCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const icons = {
  FaRegCalendarAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
};

const ContactBox = ({ icon, titleTop, titleBottom }) => {
  const IconComponent = icons[icon]; // Dynamically get the icon component

  return (
    <div className="flex items-center space-x-3">
      <IconComponent className="text-red-500 text-2xl" />
      <div className="flex flex-col gap-2">
        <p className="text-sm">{titleTop}</p>
        <p className="font-bold text-xl">{titleBottom}</p>
      </div>
    </div>
  );
};

export default function Contact() {
  const infos = [
    {
      icon: "FaRegCalendarAlt",
      titleTop: "We are open Monday-Friday",
      titleBottom: "7:00 am - 9:00 pm",
    },
    {
      icon: "FaPhoneAlt",
      titleTop: "Have a question?",
      titleBottom: "+2546 251 2658",
    },
    {
      icon: "FaMapMarkerAlt",
      titleTop: "Need a repair? Our address",
      titleBottom: "Liza Street, New York",
    },
  ];

  return (
    <div className="my-20 bg-black text-white py-12 px-6 rounded-lg flex flex-col md:flex-row justify-around items-start md:items-center space-y-4 md:space-y-0">
      {infos.map((info, index) => (
        <ContactBox key={index} {...info} />
      ))}
    </div>
  );
}
