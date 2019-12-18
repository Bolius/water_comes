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
      risk: "medium"
    },
    hollowing: {
      risk: "low",
      image: hollowingImg
    },
    fastningDegree: {
      image: fastningImg,
      risk: "high"
    },
    flood: {
      risk: "high"
    }
  }
};

export default exampleAddress;
