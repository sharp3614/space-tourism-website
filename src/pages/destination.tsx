import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DestinationTabs } from "../data/destination";

type Tabs = {
  label: string;
  imgSrc: string;
  id: string;
  description: string;
  avgDistance: string;
  estTravelTime: string;
};

const Destination = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>(DestinationTabs[0]);
  return (
    <div className="bg-destination-mobile pt-20 relative md:bg-destination-desktop text-white h-screen">
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-evenly md:h-[90vh]">
            <div className="flex justify-center gap-4 text-base md:text-[28px]">
              <span className="font-bold text-[#ccc]">01</span>
              <h1 className="">Pick your destination</h1>
            </div>
            <img
              src={selectedTab.imgSrc}
              className="p-4 size-[170px] md:size-[445px]"
              alt="moon"
            />
          </div>
        </motion.div>
        <div className="flex flex-col mt-4 items-center md:items-start w-full md:max-w-[445px] h-[472px]">
          <ul className="flex gap-8 mb-8">
            {DestinationTabs.map((item) => (
              <motion.li
                key={item.label}
                className={`select-none cursor-pointer border-b-2 border-transparent hover:border-white ${
                  item.id === selectedTab.id && "border-white"
                }`}
                onClick={() => setSelectedTab(item)}
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {selectedTab ? (
                  <div className="flex flex-col md:items-start items-center p-1">
                    <h1 className="text-[92px] tracking-widest leading-[5rem] font-bellefair mt-4 mb-8 font-thin">
                      {selectedTab.label}
                    </h1>
                    <p className="text-[18px] font-barlow flex-1 text-center md:text-start">
                      {selectedTab.description}
                    </p>
                    <div className="border-[#383B4B] border-t-2 uppercase pt-4 my-4 w-full flex items-center text-center md:text-start md:justify-start flex-col md:flex-row gap-4">
                      <div className="w-40 flex flex-col">
                        <span className="text-sm text-[#D0D6F9]">
                          AVG. DISTANCE
                        </span>
                        <span className="text-[28px]">
                          {selectedTab.avgDistance}
                        </span>
                      </div>
                      <div className="w-40 flex flex-col">
                        <span className="text-sm text-[#D0D6F9]">
                          Est. travel time
                        </span>
                        <span className="text-[28px]">
                          {selectedTab.estTravelTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  "😋"
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Destination;
