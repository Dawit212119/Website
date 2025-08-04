import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-around items-center  gap-16 min-h-screen max-lg:flex-col"
    >
      <div className="flex flex-col w-1/2 ">
        <h1 className="text-4xl font-bold leading-normal max-sm:whitespace-nowrap">
          We Provide You <span className="text-red-500">Super</span>
          <br />
          <span className="text-red-500">Quality</span> Shoes
        </h1>
        <div className="pt-8 max-w-prose text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            deserunt veritatis modi tempora consequuntur soluta eius quas
            necessitatibus. Velit dolore saepe magni aspernatur iste nihil
            <br />{" "}
          </p>

          <p className="pt-6">officia quam deleniti? Ipsam, assumenda.</p>
        </div>
        <div className="flex items-center pl-[25px]">
          <button className="bg-red-400 px-2 py-4  rounded-4xl text-white text-xl font-bold mt-15 w-[200px] hover:bg-red-500 hover:scale-110 focus:outline-none focus:ring-amber-300">
            View Details
          </button>{" "}
        </div>
      </div>
      <div className="flex-1 max-w-prose">
        <img src={shoe8} className="w-fit h-[700px]" />
      </div>
    </section>
  );
};

export default SuperQuality;
