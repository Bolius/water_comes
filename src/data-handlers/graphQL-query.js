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
          risk
        }
        hollowing {
          image
          risk
        }
        fastningDegree {
          image
          risk
        }
        conductivity {
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
