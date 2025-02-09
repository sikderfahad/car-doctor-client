const OfferCard = () => {
  return (
    <div className="bg-black text-white p-5 rounded-xl text-center">
      <h3 className="font-bold text-2xl mb-3">Car Doctor</h3>
      <p className="text-sm">Need Help? We Are Here To Help You</p>
      <div className="bg-white text-black p-3 mt-4 rounded-xl shadow">
        <p className="text-red-500 font-bold">Car Doctor Special</p>
        <p>
          Save up to <strong>60% off!</strong>
        </p>
      </div>
      <button className="bg-red-500 text-white w-full py-3 mt-4 rounded-xl hover:bg-red-600 transition">
        Get A Quote
      </button>
    </div>
  );
};

export default OfferCard;
