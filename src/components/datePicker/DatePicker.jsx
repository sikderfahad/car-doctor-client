import { Calendar } from "lucide-react";

const DatePicker = ({ label, name, value, onChange }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="date"
          name={name}
          defaultValue={today}
          min={today}
          className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <Calendar
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>
    </div>
  );
};

export default DatePicker;
