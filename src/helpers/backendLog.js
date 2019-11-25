async function backendLog(address, action) {
  let query =
    '{"query":"mutation($actionInput: actionInput!) {\\n  logAction(actionData: $actionInput){\\n     success\\n  }\\n}","variables":{"actionInput":{"address":"<adrese>","action":"<action>"}}}';
  query = query.replace("<adrese>", address).replace("<action>", action);
  fetch(process.env.REACT_APP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: query
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

export default backendLog;
