import { useState } from "react";

const AddProductForm = () => {
  const [facilities, setFacilities] = useState([]);
  const [productData, setProductData] = useState({
    service_id: "",
    title: "",
    img: "",
    price: "",
    description: "",
    facility: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFacilityChange = (index, field, value) => {
    const updatedFacilities = [...facilities];
    updatedFacilities[index] = {
      ...updatedFacilities[index],
      [field]: value,
    };
    setFacilities(updatedFacilities);
  };

  const addFacility = () => {
    setFacilities([...facilities, { name: "", details: "" }]);
  };

  const removeFacility = (index) => {
    const updatedFacilities = facilities.filter((_, i) => i !== index);
    setFacilities(updatedFacilities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalProduct = { ...productData, facility: facilities };
    console.log(finalProduct); // Handle data submission here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 space-y-4 bg-white shadow-md rounded-xl"
    >
      <h2 className="text-2xl font-bold text-center text-primary">
        Add New Product
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={productData.title}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        required
      />

      <input
        type="url"
        name="img"
        placeholder="Image URL"
        value={productData.img}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={productData.price}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={productData.description}
        onChange={handleInputChange}
        className="textarea textarea-bordered w-full"
        required
      ></textarea>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Facilities</h3>
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="space-y-2 border p-3 rounded-lg bg-gray-50 relative"
          >
            <button
              type="button"
              onClick={() => removeFacility(index)}
              className="btn btn-sm btn-error absolute top-2 right-2"
            >
              Remove
            </button>

            <input
              type="text"
              placeholder={`Facility Name - ${index + 1}`}
              value={facility.name}
              onChange={(e) =>
                handleFacilityChange(index, "name", e.target.value)
              }
              className="input input-bordered w-full"
              required
            />

            <textarea
              placeholder={`Facility Description - ${index + 1}`}
              value={facility.details}
              onChange={(e) =>
                handleFacilityChange(index, "details", e.target.value)
              }
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
        ))}

        <button
          type="button"
          onClick={addFacility}
          className="btn btn-outline btn-primary w-full"
        >
          + Add New Facility
        </button>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Submit Product
      </button>
    </form>
  );
};

export default AddProductForm;
