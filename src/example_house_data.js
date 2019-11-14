import hollowingImg from "./hollowing_img.js";
import fastningImg from "./fastning_img.js";

const exampleAddress = {
  isApartment: false,
  hasBasement: false,
  text: "Kjærmarken 103, 6771 Gredstedbro",
  x: 55.40155718,
  y: 8.74227837,
  dangers: {
    risks: {
      medium: [],
      high: [],
      low: ["bebyggelse", "lavning", "ledeevne"]
    },
    conductivity: {
      risk: "low",
      value: 1175
    },
    flood: {
      groundHeight: 7.6,
      risk: "high",
      floodLowerLimit: 200.0,
      floodMediumLimit: 300.0
    },
    hollowing: {
      risk: "low",
      areaPercentage: 11,
      image: hollowingImg,
      housePercentage: 0
    },
    fastningDegree: {
      housePercentage: 47,
      image: fastningImg,
      areaPercentage: 49,
      risk: "high"
    }
  }
};

export default exampleAddress;
