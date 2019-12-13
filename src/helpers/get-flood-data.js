// A function that given a dawa response gets data from the backend
import constructQuery from "../graphQL_query.js";
import * as Sentry from "@sentry/browser";
import backendLog from "../helpers/backendLog.js";
import computeRainRisk from "../helpers/rain_risk.js";
import trackEvent from "../action_logger.js";

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
      houseData = { failed: false, data: resp };
    })
    .catch(err => console.log(Sentry.captureException(err)))
    .finally(() => callback(houseData));
}
