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
      risk: "high",
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
      risk: "high"
    }
  }
};

export default exampleAddress;
