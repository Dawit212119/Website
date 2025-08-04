import PopularProducts from "../components/PopularProducts";
import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section
      id="prdoucts"
      className="flex flex-col w-full gap-30 max-sm:gap-10 mt-20 min-h-screen"
    >
      <div className="mb-10">
        <h1 className="text-[50px] font-semibold ">
          Our <span className="text-red-500 ">Popular</span> Products
        </h1>
        <p className="max-w-prose mt-5 text-gray-500 ">
          yeah these are the most well know products you used!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-auto mt-20">
        {products.map((product) => (
          <div>
            <PopularProducts product={product} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-10 mx-auto mt-20">
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
