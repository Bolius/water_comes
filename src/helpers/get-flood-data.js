// A function that given a dawa response gets data from the backend
import constructQuery from "../graphQL_query.js";
import * as Sentry from "@sentry/browser";
import backendLog from "../helpers/backendLog.js";
import computeRainRisk from "../helpers/rain_risk.js";
import trackEvent from "../action_logger.js";

import axios from "axios";
export default function getFloodData(dawa_res) {
  console.log("Fetching data");
  var that = this;
  // Set up our HTTP request
  var houseData = {
      failed: false
    },
    xhr = new XMLHttpRequest(),
    xhrQl = new XMLHttpRequest();

  // Setup our listener to process compeleted requests
  xhr.onreadystatechange = function() {
    // Only run if the request is complete
    if (xhr.readyState !== 4) return;

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // Succes, get data
      let data = JSON.parse(xhr.responseText),
        kvhx = data.kvhx;

      // Create and send a POST request
      xhrQl.open("POST", process.env.REACT_APP_GRAPHQL_URL);
      xhrQl.setRequestHeader("Content-Type", "application/json");
      xhrQl.send(constructQuery(kvhx));
    } else {
      // What to do when the request has failed
      that.setState({
        failed: true,
        isLoading: false,
        address: "",
        finalAddress: "",
        dawa: require("dawa-autocomplete2")
      });

      console.log("error", xhr);
      console.log(Sentry.captureException(xhr));
      return { failed: true };
    }
  };

  // Setup our listener to process QL
  xhrQl.onreadystatechange = function() {
    // Only run if the request is complete
    if (xhrQl.readyState !== 4) return;

    // Process our return data
    if (xhrQl.status >= 200 && xhrQl.status < 300) {
      // Succes, get data
      let data = JSON.parse(xhrQl.responseText);
      houseData = data.data.house;

      backendLog(dawa_res.tekst, "Vandet kommer indtastet");
      if (houseData.failed !== undefined && houseData.failed) {
        return;
      }

      let result = {
        isApartment: houseData.bbrInfo.propType === "Etageboliger",
        text: houseData.bbrInfo.address,
        dangers: {
          basement: { risk: houseData.bbrInfo.hasBasement ? "high" : "low" },
          flood: houseData.waterRisk.flood,
          hollowing: houseData.waterRisk.hollowing,
          fastningDegree: houseData.waterRisk.fastningDegree,
          conductivity: houseData.waterRisk.conductivity
        }
      };
      result.dangers.rain_threat = computeRainRisk(result.dangers);

      trackEvent({
        description: "Adresse indtastet",
        // Gets 2300 københavn part of adrress
        eventLabel: result.text
          .split(",")
          .slice(-1)
          .pop(),
        cloudbirstDimension: result.dangers.rain_threat,
        floodDimension: result.dangers.flood.risk
      });

      that.props.setData(result);
    } else {
      console.log("error", xhrQl);
      return { failed: true };
    }
  };

  // Create and send a GET request
  xhr.open("GET", dawa_res.data.href);
  xhr.send();

  /*
  let houseData = await fetch(dawa_res.data.href)
    .then(resp => resp.json())
    .then(data => data.kvhx)
    .then(kvhx =>
      fetch(process.env.REACT_APP_GRAPHQL_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: constructQuery(kvhx)
      })
    )
    .then(response => response.json())
    .then(data => data.data.house)
    .catch(err => {
      this.setState({
        failed: true,
        isLoading: false,
        address: "",
        finalAddress: "",
        dawa: require("dawa-autocomplete2")
      });
      console.log("fejl");
      console.log(err);
      console.log(Sentry.captureException(err));
      return { failed: true };
    });
  */
}
