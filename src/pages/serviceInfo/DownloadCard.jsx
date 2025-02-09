const DownloadCard = () => {
  return (
    <div className="bg-gray-900 text-white p-5 rounded-xl">
      <h3 className="font-semibold text-xl mb-3">Download</h3>
      <button className="w-full bg-gray-700 py-3 rounded-xl mb-3 hover:bg-gray-600 transition">
        Our Brochure ➜
      </button>
      <button className="w-full bg-gray-700 py-3 rounded-xl hover:bg-gray-600 transition">
        Company Details ➜
      </button>
    </div>
  );
};

export default DownloadCard;
