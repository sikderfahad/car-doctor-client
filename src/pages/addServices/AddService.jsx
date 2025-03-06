import { useState } from "react";
import FloatingInput from "../../components/floatingInput/FloatingInput";
import TextArea from "../../components/textArea/TextArea";
import { AiOutlineClose } from "react-icons/ai";
import { isFacilityValid, validateBlankForm } from "../../hooks/formValidation";
import { imgHosting } from "../../hooks/imgHosting";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddService = () => {
  const axiosSecure = useAxiosSecure();
  const [facilities, setFacilities] = useState([]);
  const [serviceData, setServiceData] = useState({
    title: "",
    price: "",
    description: "",
    facility: [],
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleFacilityChange = (index, field, value) => {
    const updatedFacilities = [...facilities];
    updatedFacilities[index] = {
      ...updatedFacilities[index],
      [field]: value,
    };
    setFacilities(updatedFacilities);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const formErrors = validateBlankForm(serviceData, [
      "title",
      "price",
      "description",
    ]);

    facilities.forEach((facility, index) => {
      if (!isFacilityValid(facility)) {
        formErrors[`facility_${index}`] = `Facility ${
          index + 1
        } is incomplete.`;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const formData = new FormData(e.target);
    const imgData = formData.get("serviceImg");

    if (!imgData.size > 0) {
      alert("Don't keep empty service image");
      return;
    }

    const imgHostingInfo = await imgHosting(imgData);

    if (imgHostingInfo?.secure_url) {
      alert("Image hosting success!");
    }
    // console.log(imgHostingInfo);

    const finalData = {
      ...serviceData,
      img: imgHostingInfo?.secure_url,
      imgInfo: imgHostingInfo,
      facility: facilities,
    };
    // console.log(finalData);

    try {
      const serviceRes = await axiosSecure.post("/car-services", finalData);
      if (!serviceRes?.data?.success) {
        alert("There is an critical error to insert service data");
      }

      e.target.reset();
    } catch (err) {
      console.error("Error while insert service data in DB: ", err);
    }

    setErrors({});
  };

  const addFacility = () => {
    if (
      facilities.length > 0 &&
      !isFacilityValid(facilities[facilities.length - 1])
    ) {
      alert("Please complete the current facility before adding a new one.");
      return;
    }
    setFacilities([...facilities, { name: "", details: "" }]);
  };

  const removeFacility = (index) => {
    const updatedFacilities = facilities.filter((_, i) => i !== index);
    setFacilities(updatedFacilities);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="w-full p-10 bg-dark7 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FloatingInput
              value={serviceData.title}
              onChange={handleInputChange}
              label={"service name"}
              name={"title"}
              isError={errors}
            />
            <FloatingInput
              value={serviceData.price}
              onChange={handleInputChange}
              label={"service price"}
              name={"price"}
              type="number"
              isError={errors}
            />
            <FloatingInput
              value={serviceData.description}
              onChange={handleInputChange}
              label={"service description"}
              name={"description"}
              isError={errors}
            />

            <input
              type="file"
              name="serviceImg"
              className="file-input w-full"
            />
          </div>

          <h2 className="mt-10 text-3xl font-bold">Facilities:</h2>
          <div className="w-full p-5">
            {facilities.map((facility, index) => (
              <div key={index} className="relative grid grid-cols-1 gap-5 p-5">
                <div
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => removeFacility(index)}
                >
                  <AiOutlineClose />
                </div>

                <FloatingInput
                  value={facility.name}
                  onChange={(e) =>
                    handleFacilityChange(index, "name", e.target.value)
                  }
                  label={`facility name - ${index + 1}`}
                  name={`facility_name_${index}`}
                  isError={errors}
                />
                <TextArea
                  value={facility.details}
                  onChange={(e) =>
                    handleFacilityChange(index, "details", e.target.value)
                  }
                  label={`facility description - ${index + 1}`}
                  name={`facility_details_${index}`}
                  isError={errors}
                />
              </div>
            ))}

            <button
              type="button"
              className="text-green-500 font-semibold px-3 py-2 border-2 border-green-500 rounded-4xl text-center"
              onClick={addFacility}
            >
              Add new facility
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-5 py-2 font-semibold bg-primary text-white text-center rounded-full"
        >
          Add new service
        </button>
      </form>
    </div>
  );
};

export default AddService;
