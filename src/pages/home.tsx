const Home = () => {
  return (
    <div className="bg-cover w-full relative  bg-home-mobile md:bg-home-desktop text-white h-screen flex items-center">
      <div className="w-[450px] h-[382px] p-4 md:ml-24">
        <h1 className="md:text-[28px] font-barlowCondensed">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h1 className="md:text-[150px] leading-tight">SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>
      <div className="w-[274px] h-[274px] hover:scale-[1.1] cursor-pointer ease-linear hover:transition-all hover:shadow-red-300 text-[32px] absolute right-[10%] bottom-[5%] flex justify-center items-center rounded-full bg-white text-black">
        EXPLORE
      </div>
    </div>
  );
};

export default Home;
