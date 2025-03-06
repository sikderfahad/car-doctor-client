import { useEffect, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format"; // For formatting the date
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import showToast from "../../hooks/showToast";

const OrderDate = ({ initialDate, id, refetch, order }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(initialDate));
  const [isEditing, setIsEditing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const calenderRef = useRef(null);

  // Function to handle date change
  const handleDateChange = async (date) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You try to change ${order?.displayName}'s service order date!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, change to ${format(date, "PPP")}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (date === selectedDate) {
          return;
        }
        setSelectedDate(date);
        setIsEditing(false); // Hide the calendar after selection
        try {
          const dateUpdateRes = await axiosSecure.patch(
            `/service-order/${id}`,
            {
              serviceDate: date,
            }
          );
          // console.log("date update: ", dateUpdateRes);
          if (dateUpdateRes?.data?.success) {
            // window.location.reload();
            showToast(
              `Success to change ${order?.displayName}'s service order date`
            );
            refetch();
          }
        } catch (err) {
          console.err("Error while update service date: ", err);
        }
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calenderRef?.current && !calenderRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };

    if (setIsEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="relative inline-block">
      {/* Date Display with Edit Icon */}
      <p className="text-gray-600 flex items-center space-x-2">
        {format(selectedDate, "PPP")}
        <FaRegEdit
          className="text-blue-500 hover:text-blue-700 cursor-pointer ml-2"
          onClick={() => setIsEditing(!isEditing)}
        />
      </p>

      {/* Date Picker (conditionally shown) */}
      {isEditing && (
        <div
          ref={calenderRef}
          className="absolute top-full left-0 z-50 bg-white shadow-lg p-2 rounded-md"
        >
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            inline // Shows the calendar directly
          />
        </div>
      )}
    </div>
  );
};

export default OrderDate;
