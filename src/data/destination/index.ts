import { ImageEuropa, ImageMars, ImageMoon, ImageTitan } from "../../assets";

export const DestinationTabs = [
    {
      label: "MOON",
      id: "moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 km",
      imgSrc: ImageMoon,
      estTravelTime:"3 days"
    },
    {
      label: "MARS",
      id: "mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "225 MIL. km",
      imgSrc: ImageMars,
      estTravelTime:"9 months"
    },
    {
      label: "EUROPA",
      id: "europa",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "628 MIL. km",
      imgSrc: ImageEuropa,
      estTravelTime:"3 years"
    },
    {
      label: "TITAN",
      id: "titan",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "1.6 BIL. km",
      imgSrc: ImageTitan,
      estTravelTime:"7 years"
    },
  ];