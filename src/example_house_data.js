import hollowingImg from "./hollowing_img.js";
import fastningImg from "./fastning_img.js";

const exampleAddress = {
  isApartment: false,
  text: "Kjærmarken 103, 6771 Gredstedbro",
  dangers: {
    basement: {
      risk: "high"
    },
    conductivity: {
      risk: "medium",
      value: 1175
    },
    hollowing: {
      risk: "high",
      areaPercentage: 11,
      image: hollowingImg,
      housePercentage: 0
    },
    fastningDegree: {
      housePercentage: 47,
      image: fastningImg,
      areaPercentage: 49,
      risk: "high"
    },
    flood: {
      groundHeight: 7.6,
      risk: "high",
      floodLowerLimit: 200.0,
      floodMediumLimit: 300.0
    }
  }
};

export default exampleAddress;
