import { FaStar } from "react-icons/fa";

export default function ProductCard({ item }) {
  const { name, price, rating, image } = item;
  return (
    <div className="card bg-white border-2 border-gray-200 rounded-lg p-4 text-center">
      <figure className="p-4 bg-gray-200 rounded-lg">
        <img
          src={image}
          alt="Car Engine Plug"
          className="w-full h-40 object-contain"
        />
      </figure>
      <div className="card-body p-2">
        <div className="flex justify-center text-orange-400">
          {Array(parseInt(Math.ceil(rating)))
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-red-500 font-bold text-xl">${price}</p>
      </div>
    </div>
  );
}
