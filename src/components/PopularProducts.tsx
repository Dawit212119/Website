import { star } from "../assets/icons";

interface ProductType {
  imgURL: string;
  name: string;
  price: string;
}
const PopularProducts = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex flex-col gap-6">
      {" "}
      <img src={product.imgURL} className="w-[200px]" alt="" />
      <div className="flex items-center gap-3">
        {" "}
        <img src={star} width={20} alt="" />
        <p className="text-gray-500 text-xl">(4.5)</p>
      </div>
      <p className="font-bold text-xl">{product.name}</p>{" "}
      <p className="text-red-500 font-semibold">{product.price}</p>
    </div>
  );
};

export default PopularProducts;
