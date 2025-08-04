const SpecialOffer = () => {
  return (
    <section className="flex flex-col w-full  gap-16 min-h-screen ">
      <div className="flex flex-col w-full">
        <h1 className="text-4xl font-bold leading-normal max-sm:whitespace-nowrap">
          <span className="text-red-500">Special</span> Offer
        </h1>
        <div className="pt-8 w-full text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            deserunt veritatis modi tempora consequuntur soluta eius quas
            necessitatibus. Velit dolore saepe magni aspernatur iste nihil
            <br />{" "}
          </p>

          <p className="pt-6">officia quam deleniti? Ipsam, assumenda.</p>
        </div>
        <div className="flex items-center  pl-[25px]">
          <button className="bg-red-400 px-2 py-4  rounded-4xl text-white text-xl font-bold mt-15 w-[200px] hover:bg-red-500 hover:scale-110 focus:outline-none focus:ring-amber-300">
            Shop Now
          </button>{" "}
          <button className="bg-white px-2 py-4 rounded-4xl ring-1 ring-gray-600 text-black text-xl font-semibold w-[200px]">
            learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
