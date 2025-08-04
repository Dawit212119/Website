import { star } from "../assets/icons";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-4xl font-bold">
          Why Our <span className="text-red-500">Customer</span> Say
        </h1>
        <p className="max-w-prose text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi
          aspernatur placeat at saepe quod assumenda fugit earum magni porro,
          magnam pariatur? Praesentium expedita nisi sapiente velit. Cupiditate,
          deserunt officiis?
        </p>
      </div>

      <div className="flex max-lg:flex-col mt-12 items-center justify-center gap-13">
        {reviews.map((rev) => (
          <div className="flex flex-col items-center justify-center  gap-6 w-[350px]">
            <img src={rev.imgURL} alt="" className="rounded-full w-[120px]" />
            <p className="text-gray-500">{rev.feedback}</p>
            <div className="flex gap-4">
              {" "}
              <img src={star} alt="" />{" "}
              <p className="text-slate-500">{rev.rating}</p>
            </div>
            <p className="font-bold text-xl">{rev.customerName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
