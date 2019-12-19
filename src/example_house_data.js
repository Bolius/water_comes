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
      risk: "low"
    },
    hollowing: {
      risk: "high",
      image: hollowingImg
    },
    fastningDegree: {
      image: fastningImg,
      risk: "low"
    },
    flood: {
      risk: "high"
    }
  }
};

export default exampleAddress;
