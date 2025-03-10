const FloatingInput = ({
  label,
  type = "text",
  name,
  value,
  defaultValue,
  onChange,
  isError,
  border,
}) => {
  // console.log(isError);

  const labesStyle = `absolute text-sm text-gray-500 capitalize duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`;
  return (
    <div className="">
      <div className="relative">
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          id={name}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
            isError?.[name] ? "border-red-500" : ""
          } ${border ? "border-2 border-gray-300" : "border-none"}`}
          placeholder=" "
          aria-invalid={isError?.[name] ? "true" : "false"}
          required
        />
        <label htmlFor={name} className={labesStyle}>
          {label}
        </label>
      </div>
      <p className="text-red-500 text-sm font-medium ml-2 animate-pulse">
        {isError && isError[name] && isError[name]}{" "}
      </p>
    </div>
  );
};

export default FloatingInput;
