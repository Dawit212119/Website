import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex max-sm:flex-col-reverse w-full items-center flex-wrap  gap-16 min-h-screen ">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={587}
          className="w-fit object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <h1 className="text-4xl font-bold leading-normal max-sm:whitespace-nowrap">
          <span className="text-red-500">Special</span> Offer
        </h1>
        <div className="pt-8 w-full mx-auto text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            deserunt veritatis modi tempora consequuntur soluta eius quas
            necessitatibus. Velit dolore saepe magni aspernatur iste nihil Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quia sed
            repellendus ipsum quibusdam placeat. Dolore neque accusamus
            consequuntur, non molestias consequatur rem in error omnis nulla sed
            soluta sit minus.
            <br />{" "}
          </p>

          <p className="pt-6">
            in error omnis nulla sed soluta sit minus. officia quam deleniti?
            Ipsam, assumenda.
          </p>
        </div>
        <div className="flex justify-center items-center w-[400px] mt-12  gap-6  pl-[25px]">
          <button className="bg-red-400 cursor-pointer  flex  gap-4 items-center justify-center px-2 py-4  rounded-4xl text-white text-xl font-bold  w-[200px] hover:bg-red-500 shadow-2xl hover:scale-110 focus:outline-none focus:ring-amber-300">
            <span className="inline-flex">Shop Now </span>{" "}
            <img src={arrowRight} alt="" className="cursor-pointer" />
          </button>{" "}
          <button className="bg-white cursor-pointer px-2 py-4 rounded-4xl ring-1 ring-gray-600 text-black text-xl font-semibold hover:scale-110 shadow-2xl hover:shadow-3xl w-[200px]">
            learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
