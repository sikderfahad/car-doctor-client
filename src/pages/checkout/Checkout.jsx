import { useParams } from "react-router-dom";
import PageBanner from "../../components/pageBanner/PageBanner";
import FloatingInput from "../../components/floatingInput/FloatingInput";
import TextArea from "../../components/textArea/TextArea";
import { useState } from "react";
import { validateForm } from "../../hooks/validateForm";
import DatePicker from "../../components/datePicker/DatePicker";

const Checkout = () => {
  const { id } = useParams();
  const [isError, setIsError] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    //   Error handling
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      return setIsError(errors);
    }
    setIsError({});

    //   const orderInfo = {

    //   }
  };
  return (
    <div>
      <PageBanner title="check out" />

      <div className="bg-dark7 p-32 rounded-2xl">
        <form onSubmit={handleForm}>
          <div className="grid grid-cols-2 gap-5">
            <FloatingInput
              label={"first name"}
              name={"fname"}
              isError={isError}
            />
            <FloatingInput
              label={"last name"}
              name={"lname"}
              isError={isError}
            />
            <FloatingInput
              label={"phone number"}
              type="number"
              name={"phoneNumber"}
              isError={isError}
            />
            <FloatingInput label={"email"} name={"email"} isError={isError} />
            <DatePicker
              name={"serviceDate"}
              label={"Pick your comfortable date to servicing"}
            />
            <div className="col-span-2">
              <TextArea label={"your message"} name={"message"} />
            </div>
            <div className="col-span-2">
              <button className="capitalize cursor-pointer text-white font-medium bg-primary hover:bg-red-700 w-full py-3 rounded-lg text-center">
                order confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
