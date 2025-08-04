import PopularProducts from "../components/PopularProducts";
import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section
      id="prdoucts"
      className="flex flex-col w-full gap-16 max-sm:gap-10 mt-12"
    >
      <div className="mb-10">
        <h1 className="text-3xl font-serif ">
          Our <span className="text-red-500 ">Popular</span> Products
        </h1>
        <p className="max-w-prose text-gray-500 ">
          yeah these are the most well know products you used!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-auto">
        {products.map((product) => (
          <div>
            <PopularProducts product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
