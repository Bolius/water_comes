// A function that given a dawa response gets data from the backend
import * as Sentry from "@sentry/browser";
import constructQuery from "./graphQL-query.js";
import trackEvent from "./action-logger.js";
import computeRainRisk from "./rain-risk.js";

import axios from "axios";
export default function getFloodData(dawa_res, callback) {
  let houseData = { failed: true };
  axios
    .get(dawa_res.data.href)
    .then(resp =>
      axios({
        url: process.env.REACT_APP_GRAPHQL_URL,
        method: "post",
        headers: { "content-type": "application/json" },
        data: constructQuery(resp.data.kvhx)
      })
    )
    .then(resp => {
      const respData = resp.data.data.house;
      houseData = {
        failed: false,
        isApartment: respData.bbrInfo.propType === "Etageboliger",
        text: respData.bbrInfo.address,
        dangers: {
          basement: { risk: respData.bbrInfo.hasBasement ? "high" : "low" },
          flood: respData.waterRisk.flood,
          hollowing: respData.waterRisk.hollowing,
          fastningDegree: respData.waterRisk.fastningDegree,
          conductivity: respData.waterRisk.conductivity
        }
      };
      houseData.dangers.rain_threat = computeRainRisk(houseData.dangers);
      console.log("houseData is");
      console.log(houseData);
      trackEvent({
        description: "Adresse indtastet",
        // Gets 2300 københavn part of adrress
        eventLabel: houseData.text
          .split(",")
          .slice(-1)
          .pop(),
        cloudbirstDimension: houseData.dangers.rain_threat,
        floodDimension: houseData.dangers.flood.risk
      });
    })
    .catch(err => console.log(Sentry.captureException(err)))
    .finally(() => callback(houseData));
}
