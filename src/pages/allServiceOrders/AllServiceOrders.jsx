import OrderBox from "../../components/orderBox/OrderBox";
import useLoadData from "../../hooks/useLoadData";
import { useAuth } from "../../provider/AuthProvider";

const AllServiceOrders = () => {
  const { role } = useAuth();
  const { data: allOrders, refetch } = useLoadData("/service-order");
  //   console.log(allOrders);
  return (
    <div>
      {" "}
      {allOrders?.data.length > 0 &&
        allOrders.data.map((order) => (
          <OrderBox
            key={order?._id}
            order={order}
            refetch={refetch}
            modarator={role}
          />
        ))}
    </div>
  );
};

export default AllServiceOrders;
