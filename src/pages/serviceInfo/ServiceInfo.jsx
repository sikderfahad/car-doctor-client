import { useParams } from "react-router-dom";

const ServiceInfo = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Service info: {id}</h1>
    </div>
  );
};

export default ServiceInfo;
