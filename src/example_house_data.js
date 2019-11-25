import hollowingImg from "./hollowing_img.js";
import fastningImg from "./fastning_img.js";

const exampleAddress = {
  isApartment: false,
  text: "Kjærmarken 103, 6771 Gredstedbro",
  dangers: {
    basement: {
      risk: "low"
    },
    conductivity: {
      risk: "medium",
      value: 1175
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
      risk: "low"
    },
    flood: {
      risk: "high"
    }
  }
};

export default exampleAddress;
