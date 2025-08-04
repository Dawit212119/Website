const Subscribe = () => {
  return (
    <section className="flex flex-col gap-16 items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold">
          Sign Up for <span className="text-red-500">Updates </span> &
          Newsletter
        </h1>
      </div>
      <div className="rounded-[40px] flex px-5 py-3 justify-between border-1 w-[60%]">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="focus:outline-none w-[40%] text-center"
        />
        <button className="bg-red-400 cursor-pointer hover:scale-110 px-3 py-3 rounded-[40px]">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
