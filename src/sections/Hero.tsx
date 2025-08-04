import { useState } from "react";
import { bigShoe1, bigShoe2 } from "../assets/images";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [shoeChange, setShoeChange] = useState(bigShoe1);
  return (
    <section
      id="Home"
      className="min-h-screen  justify-center w-full  flex max-xl:flex-col gap-10"
    >
      <div className="flex-flex-col xl:w-2/5 w-full pt-50">
        <p className="text-gray-500 font-semibold font-montserrat text-[20px]">
          {/* Our summer collection */}
        </p>
        <h1 className="mt-15 w-full flex font-palanquin font-bold flex-col items-start justify-start text-8xl">
          <span className="text-8xl  xl:whitespace-nowrap z-10 pr-8 py-5  xl:bg-white xl:rounded-2xl ">
            The New Arrival
          </span>
          <br />
          <span>
            {" "}
            <span className="text-red-400 inline-block">Nike</span> shoes{" "}
          </span>
        </h1>

        <p className="text-gray-400 text-xl pt-4 pb-10 max-w-prose">
          {" "}
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <div
          className="flex justify-between items-center
        "
        >
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-bold text-4xl">{stat.value}</span>
              <span className="text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative max-sm:p-0  flex flex-1  justify-center py-40 items-center bg-gradient-to-r from-cyan-400 to-black bg-cover bg-center">
        <img
          src={shoeChange}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        ></img>

        <div className="flex justify-between max-sm:flex-col   items-center space-x-6  max-sm:space-y-8 max-sm:  max-xl:space-x-3 w-full px-5 max-sm:bg- absolute   sm:-bottom-25  left-1/2 transform -translate-x-1/2">
          {shoes.map((sho) => (
            <img
              className="sm:bg-gradient-to-r object-contain from-red-400 to-black  sm:rounded-md  transition-transform duration-300 hover:scale-110"
              src={sho.thumbnail}
              width={127}
              height={100}
              onClick={() => setShoeChange(sho.bigShoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
