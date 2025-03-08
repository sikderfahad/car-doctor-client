import OrderBox from "../../components/orderBox/OrderBox";
import SpinnerCircle from "../../components/spinnerCircle/SpinnerCircle";
import useLoadData from "../../hooks/useLoadData";
import { useAuth } from "../../provider/AuthProvider";

const AllServiceOrders = () => {
  const { role } = useAuth();
  const { data: allOrders, isLoading, refetch } = useLoadData("/service-order");
  return (
    <div className={isLoading && "flex items-center justify-center"}>
      {isLoading ? (
        <SpinnerCircle />
      ) : (
        <div className="">
          {allOrders?.data.length > 0 ? (
            allOrders.data.map((order) => (
              <OrderBox
                key={order?._id}
                order={order}
                refetch={refetch}
                modarator={role}
              />
            ))
          ) : (
            <div
              className="w-full flex items-center justify-center"
              title="No service order data found"
            >
              <img
                src="https://res.cloudinary.com/dwa2voehg/image/upload/v1741417849/error_hg7gcg.gif"
                alt=""
                className="w-64"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllServiceOrders;
