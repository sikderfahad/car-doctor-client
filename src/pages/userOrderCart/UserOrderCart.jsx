import { Helmet } from "react-helmet";
import OrderBox from "../../components/orderBox/OrderBox";
import SpinnerCircle from "../../components/spinnerCircle/SpinnerCircle";
import useLoadData from "../../hooks/useLoadData";
import { useAuth } from "../../provider/AuthProvider";

const UserOrderCart = () => {
  const { user } = useAuth();
  const {
    data: ordersInfo,
    isLoading,
    refetch,
  } = useLoadData(`/service-order?user=${user?.email}`);
  return (
    <div className={isLoading && `flex items-center justify-center`}>
      <Helmet>
        <title>Car doctor | Order cart</title>
      </Helmet>
      {isLoading ? (
        <SpinnerCircle />
      ) : (
        <div>
          {ordersInfo?.data.length > 0 ? (
            ordersInfo.data.map((order) => (
              <OrderBox key={order?._id} order={order} refetch={refetch} />
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

export default UserOrderCart;
