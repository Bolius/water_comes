import hollowingImg from "./hollowing_img.js";
import fastningImg from "./fastning_img.js";

const exampleAddress = {
  isApartment: false,
  hasBasement: true,
  text: "Kjærmarken 103, 6771 Gredstedbro",
  x: 55.40155718,
  y: 8.74227837,
  dangers: {
    risks: {
      medium: [],
      high: ["ledeevne", "bebyggelse"],
      low: ["lavning"]
    },
    flood: {
      groundHeight: 7.6,
      risk: "low",
      floodLowerLimit: 200.0,
      floodMediumLimit: 300.0,
      floodHighLimit: 400.0
    },
    hollowing: {
      areaPercentage: 11,
      image: hollowingImg,
      housePercentage: 0
    },
    fastningDegree: {
      housePercentage: 47,
      image: fastningImg,
      areaPercentage: 49
    },
    coundictivity: 98.8
  }
};

export default exampleAddress;
