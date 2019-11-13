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
          floodHighLimit
        }
        hollowing {
          areaPercentage
          housePercentage
          image
        }
        fastningDegree {
          housePercentage
          image
          areaPercentage
        }
      }
    }
  }`;

function constructQuery(kvhx) {
  const query = queryStr.replace("<kvhx>", kvhx);
  return JSON.stringify({ query: query });
}

export default constructQuery;
