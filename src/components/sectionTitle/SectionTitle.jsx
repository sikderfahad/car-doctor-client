const SectionTitle = ({ top, title, desc }) => {
  return (
    <div className="flex flex-col gap-3 w-full md:w-2/3 lg:w-1/2 mx-auto text-center mb-12">
      <h3 className="capitalize text-red-500 font-semibold">{top}</h3>
      <h2 className="capitalize text-3xl md:text-4xl font-bold  leading-tight">
        {title}
      </h2>
      <p className="text-gray-600 text-justify md:text-center">
        {desc
          ? desc
          : "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
      </p>
    </div>
  );
};

export default SectionTitle;
