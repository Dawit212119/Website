import { services } from "../constants";

const Service = () => {
  return (
    <section className="flex justify-center items-center max-sm:flex-col  flex-wrap gap-9">
      {services.map((serv) => (
        <div className="space-y-5 shadow-2xl py-16 px-10 rounded-[20px] w-[350px] max-sm:w-[350px] ">
          <div className="w-11 h-11 flex justify-center items-center bg-red-500  rounded-full">
            {" "}
            <img src={serv.imgURL} width={24} height={24} alt="secure" />
          </div>
          <h3 className="font-bold text-2xl">{serv.label}</h3>
          <p className="text-gray-500 max-w-prose">{serv.subtext}</p>
        </div>
      ))}
    </section>
  );
};

export default Service;
