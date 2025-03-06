import OrderBox from "../../components/orderBox/OrderBox";
import useLoadData from "../../hooks/useLoadData";
import { useAuth } from "../../provider/AuthProvider";

const UserOrderCart = () => {
  const { user } = useAuth();
  const { data: ordersInfo, refetch } = useLoadData(
    `/service-order?user=${user?.email}`
  );
  // console.log(ordersInfo);
  return (
    <div>
      {ordersInfo?.data.length > 0 &&
        ordersInfo.data.map((order) => (
          <OrderBox key={order?._id} order={order} refetch={refetch} />
        ))}
    </div>
  );
};

export default UserOrderCart;
