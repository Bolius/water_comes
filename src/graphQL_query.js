const queryStr = `{
    house(kvhxInput: "<kvhx>") {
      bbrInfo {
        type
        propType
        hasBasement
        x
        y
        address
      }
      waterRisk {
        flood {
          groundHeight
          risk
          floodLowerLimit
          floodMediumLimit
        }
        hollowing {
          areaPercentage
          housePercentage
          image
          risk
        }
        fastningDegree {
          housePercentage
          image
          areaPercentage
          risk
        }
        conductivity {
          value
          risk
        }
      }
    }
  }`;

function constructQuery(kvhx) {
  const query = queryStr.replace("<kvhx>", kvhx);
  return JSON.stringify({ query: query });
}

export default constructQuery;
