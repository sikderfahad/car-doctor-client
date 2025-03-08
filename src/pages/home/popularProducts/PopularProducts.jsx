import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import SpinnerCircle from "../../../components/spinnerCircle/SpinnerCircle";
import useLoadData from "../../../hooks/useLoadData";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const { data: products, isLoading } = useLoadData("/car-products");
  //   console.log("products", products);
  return (
    <div className={`my-10`}>
      <SectionTitle top={"popular products"} title={"browse our products"} />

      <div className={isLoading && "flex items-center justify-center"}>
        {isLoading ? (
          <SpinnerCircle />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.success &&
              products?.data.map((item) => (
                <ProductCard key={item?._id} item={item} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
