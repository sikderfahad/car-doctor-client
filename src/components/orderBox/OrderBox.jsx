// import { useState } from "react";
// import OrderDate from "../orderDate/OrderDate";
// import { format } from "date-fns";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// import showToast from "../../hooks/showToast";

// const OrderBox = ({ order, modarator, refetch }) => {
//   // console.log(order);
//   const axiosSecure = useAxiosSecure();
//   const [selectedStatus, setSelectedStatus] = useState(order?.status);

//   const changeStatus = async (status) => {
//     if (selectedStatus === status) return;

//     Swal.fire({
//       title: "Are you sure?",
//       text: `You try to ${status} ${order?.displayName}'s order`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: `Yes, ${status}!`,
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         setSelectedStatus(status);
//         try {
//           const statusUpdateRes = await axiosSecure.patch(
//             `/service-order/${order?._id}`,
//             { status: status }
//           );
//           // console.log(statusUpdateRes);
//           if (statusUpdateRes?.data?.success) {
//             showToast(`${status} ${order?.displayName}'s order`);
//             refetch();
//             // window.location.reload();
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     });
//   };

//   const handleDeleteOrder = async (id) => {
//     if (!id) {
//       return alert("Invalid order ID.");
//     }

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const orderDeleteRes = await axiosSecure.delete(
//             `/service-order/${id}`
//           );

//           if (orderDeleteRes?.data?.success) {
//             Swal.fire({
//               title: "Deleted!",
//               text: "The service order has been deleted.",
//               icon: "success",
//             });
//           }

//           refetch();
//         } catch (error) {
//           showToast(
//             error.response?.data?.message ||
//               "An error occurred while deleting the order.",
//             "error"
//           );
//         }
//       }
//     });
//   };

//   const userStatus = () => {
//     return (
//       <span
//         className={`text-white capitalize cursor-pointer font-semibold py-2 px-4 rounded-md ${
//           order?.status === "pending"
//             ? "bg-orange-500"
//             : order?.status === "approved"
//             ? "bg-green-500"
//             : "bg-red-500"
//         }`}
//       >
//         {order?.status}
//       </span>
//     );
//   };

//   const modaratorStatus = () => {
//     return (
//       <select
//         value={selectedStatus}
//         onChange={(e) => changeStatus(e.target.value)}
//         className={`dropdown cursor-pointer dropdown-bottom border-none outline-none text-white p-2 rounded-lg bg-${
//           selectedStatus === "pending"
//             ? "orange"
//             : selectedStatus === "approved"
//             ? "green"
//             : "red"
//         }-500`}
//       >
//         <option
//           onClick={() => changeStatus("pending")}
//           value={"pending"}
//           className="border-none cursor-pointer p-2 rounded-lg bg-orange-500 text-white"
//         >
//           Pending
//         </option>
//         <option
//           onClick={() => changeStatus("approved")}
//           value={"approved"}
//           className="border-none cursor-pointer p-2 rounded-lg bg-green-500 text-white"
//         >
//           Approved
//         </option>
//         <option
//           onClick={() => changeStatus("denyed")}
//           value={"denyed"}
//           className="border-none cursor-pointer p-2 rounded-lg bg-red-500 text-white"
//         >
//           Denyed
//         </option>
//       </select>
//     );
//   };

//   return (
//     <div className=" grid grid-cols-5 gap-5 items-center justify-between p-4">
//       {/* Product Info */}
//       <div className="grid lg:grid-cols-6 col-span-2 break-words items-center">
//         <button
//           onClick={() => handleDeleteOrder(order?._id)}
//           className="bg-gray-600 hover:bg-red-600 hover:font-bold transition duration-200 cursor-pointer text-white text-sm rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           <span>✕</span>
//         </button>
//         <div className="col-span-2">
//           <img
//             src={order?.serviceImg} // Replace with actual image
//             alt="Product"
//             className="w-32 h-32 rounded-lg object-cover"
//           />
//         </div>
//         <div className="col-span-3">
//           <h3 className="font-semibold text-lg">{order?.serviceName}</h3>

//           {modarator && (
//             <div
//               title="user info"
//               className="text-sm text-gray-500 p-3 bg-green-50 rounded-lg w-fit"
//             >
//               <p className="capitalize">{order?.displayName}</p>
//               <p>{order?.email}</p>
//               <p>{order?.phoneNumber}</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Price */}
//       <p className="text-lg font-semibold">${order?.price}</p>

//       {/* Date */}
//       <div className="">
//         {modarator ? (
//           <OrderDate
//             initialDate={order?.serviceDate}
//             id={order?._id}
//             refetch={refetch}
//             order={order}
//           />
//         ) : (
//           <p className="text-gray-600">{format(order?.serviceDate, "PPP")}</p>
//         )}
//       </div>

//       {/* Status */}
//       {/* <div className="text-right">
//         <span
//           className={`text-white capitalize font-semibold py-2 px-4 rounded-md ${
//             order?.status === "pending"
//               ? "bg-orange-500"
//               : order?.status === "approved"
//               ? "bg-green-500"
//               : "bg-red-500"
//           }`}
//         >
//           {order?.status}
//         </span>

//         {modarator && (
//           <select
//             value={selectedStatus}
//             onChange={(e) => changeStatus(e.target.value)}
//             className={`dropdown dropdown-bottom border-none outline-none text-white p-2 rounded-lg bg-${
//               selectedStatus === "pending"
//                 ? "orange"
//                 : selectedStatus === "approved"
//                 ? "green"
//                 : "red"
//             }-500`}
//           >
//             <option
//               onClick={() => changeStatus("pending")}
//               value={"pending"}
//               className="border-none p-2 rounded-lg bg-orange-500 text-white"
//             >
//               Pending
//             </option>
//             <option
//               onClick={() => changeStatus("approved")}
//               value={"approved"}
//               className="border-none p-2 rounded-lg bg-green-500 text-white"
//             >
//               Approved
//             </option>
//             <option
//               onClick={() => changeStatus("denyed")}
//               value={"denyed"}
//               className="border-none p-2 rounded-lg bg-red-500 text-white"
//             >
//               Denyed
//             </option>
//           </select>
//         )}
//       </div> */}

//       <div className="text-right">
//         {modarator ? modaratorStatus() : userStatus()}
//       </div>
//     </div>
//   );
// };

// export default OrderBox;

import { useState } from "react";
import OrderDate from "../orderDate/OrderDate";
import { format } from "date-fns";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import showToast from "../../hooks/showToast";

const OrderBox = ({ order, modarator, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [selectedStatus, setSelectedStatus] = useState(order?.status);

  const changeStatus = async (status) => {
    if (selectedStatus === status) return;

    Swal.fire({
      title: "Are you sure?",
      text: `You are about to ${status} ${order?.displayName}'s order`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${status}!`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setSelectedStatus(status);
        try {
          const statusUpdateRes = await axiosSecure.patch(
            `/service-order/${order?._id}`,
            { status }
          );
          if (statusUpdateRes?.data?.success) {
            showToast(`${status} ${order?.displayName}'s order`);
            refetch();
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  const handleDeleteOrder = async (id) => {
    if (!id) return alert("Invalid order ID.");

    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const orderDeleteRes = await axiosSecure.delete(
            `/service-order/${id}`
          );
          if (orderDeleteRes?.data?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "The service order has been removed.",
              icon: "success",
            });
          }
          refetch();
        } catch (error) {
          showToast(
            error.response?.data?.message || "Error deleting order.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="w-full overflow-x-auto my-3">
      <div className="min-w-[800px] grid grid-cols-[50px_2fr_1fr_1fr_1fr] items-center text-center gap-3 border-b-2 border-gray-200 hover:border-green-400 hover:border-b-2 transition duration-200 py-3">
        {/* Delete Button */}
        <div>
          <button
            onClick={() => handleDeleteOrder(order?._id)}
            className="bg-gray-600 cursor-pointer hover:bg-red-600 transition text-white text-sm rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Image & Name */}
        <div className="flex items-center gap-3">
          <img
            src={order?.serviceImg}
            alt="Product"
            className="w-32 h-32 rounded object-cover"
          />
          <div className="text-left">
            <h3 className="font-semibold text-xl capitalize md:text-2xl">
              {order?.serviceName}
            </h3>
            {modarator && (
              <div className="text-sm text-gray-500 p-2 mt-2 bg-green-50 rounded-lg">
                <p className="capitalize">{order?.displayName}</p>
                <p>{order?.email}</p>
                <p>{order?.phoneNumber}</p>
              </div>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="min-w-[100px]">${order?.price}</div>

        {/* Service Date */}
        <div className="min-w-[150px] text-right">
          {modarator ? (
            <OrderDate
              initialDate={order?.serviceDate}
              id={order?._id}
              refetch={refetch}
              order={order}
            />
          ) : (
            <p className="text-gray-600">{format(order?.serviceDate, "PPP")}</p>
          )}
        </div>

        {/* Status Dropdown / Label */}
        <div className="min-w-[150px]">
          {modarator ? (
            <select
              value={selectedStatus}
              onChange={(e) => changeStatus(e.target.value)}
              className={`border-none cursor-pointer outline-none text-white p-2 rounded bg-${
                selectedStatus === "pending"
                  ? "orange"
                  : selectedStatus === "approved"
                  ? "green"
                  : "red"
              }-500`}
            >
              <option className="cursor-pointer bg-orange-500" value="pending">
                Pending
              </option>
              <option className="cursor-pointer bg-green-500" value="approved">
                Approved
              </option>
              <option className="cursor-pointer bg-red-500" value="denied">
                Denied
              </option>
            </select>
          ) : (
            <span
              className={`text-white capitalize py-2 px-3 rounded bg-${
                order?.status === "pending"
                  ? "orange"
                  : order?.status === "approved"
                  ? "green"
                  : "red"
              }-500`}
            >
              {order?.status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
