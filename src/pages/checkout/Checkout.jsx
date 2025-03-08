import { useNavigate, useParams } from "react-router-dom";
import PageBanner from "../../components/pageBanner/PageBanner";
import FloatingInput from "../../components/floatingInput/FloatingInput";
import TextArea from "../../components/textArea/TextArea";
import { useState } from "react";
import DatePicker from "../../components/datePicker/DatePicker";
import { useAuth } from "../../provider/AuthProvider";
import { validateBlankForm } from "../../hooks/formValidation";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useLoadDataById from "../../hooks/useLoadDataById";
import { Helmet } from "react-helmet";

const Checkout = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [isError, setIsError] = useState({});
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: service } = useLoadDataById(id);
  // console.log("service: ", service);

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data["serviceId"] = id;
    data["displayName"] = user?.displayName;
    data["serviceImg"] = service?.data?.img;
    data["serviceName"] = service?.data?.title;
    data["price"] = service?.data?.price;
    data["status"] = "pending";

    //   Error handling
    const errors = validateBlankForm(data);
    // console.log(errors);
    if (Object.keys(errors).length > 0) {
      return setIsError(errors);
    }
    setIsError({});

    try {
      const orderRes = await axiosSecure.post("/service-order", data);
      if (!orderRes.data?.success) {
        return alert("Failed to insert order info in db");
      }
      e.target.reset();
      navigate("/order-cart");
    } catch (error) {
      console.error(error);
    }

    // console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>Car doctor | Checkout</title>
      </Helmet>
      <PageBanner title="check out" />

      <div className="bg-dark7 p-4 md:16 lg:p-32 rounded-2xl">
        <form onSubmit={handleForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FloatingInput
              label={"phone number"}
              type="number"
              name={"phoneNumber"}
              isError={isError}
            />
            <FloatingInput
              label={"email"}
              name={"email"}
              value={user?.email}
              isError={isError}
            />
            <DatePicker
              name={"serviceDate"}
              label={"Pick your comfortable date to servicing"}
            />
            <div className="md:col-span-2">
              <TextArea label={"your message"} name={"message"} />
            </div>
            <div className="md:col-span-2">
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
