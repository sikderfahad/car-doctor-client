const TextArea = ({ label, name, defaultValue, value, onChange }) => {
  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        id={name}
        className="block px-2.5 pb-2.5 pt-4 w-full min-h-[200px] max-h-[300px] text-sm text-gray-900 bg-white rounded-lg border-1 border-none appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 capitalize duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
