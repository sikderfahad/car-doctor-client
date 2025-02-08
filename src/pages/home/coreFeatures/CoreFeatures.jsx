import { useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const services = [
  { name: "Expert Team", icon: "👥" },
  { name: "Timely Delivery", icon: "⏰" },
  { name: "24/7 Support", icon: "🎧" },
  { name: "Best Equipment", icon: "🛠" },
  { name: "100% Guaranty", icon: "✅" },
  { name: "Safety Delivery", icon: "📦" },
];

export default function CoreFeatures() {
  const [active, setActive] = useState("Timely Delivery");

  return (
    <div className=" my-20">
      <SectionTitle top={"core features"} title={"why choose us"} />

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col gap-5 items-center px-4 py-8 rounded-lg border transition-all cursor-pointer text-center shadow-md 
            ${
              active === service.name
                ? "bg-red-500 text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => setActive(service.name)}
          >
            <div className="text-6xl">{service.icon}</div>
            <span className="mt-2 font-semibold">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
