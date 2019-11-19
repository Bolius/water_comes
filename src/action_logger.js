function trackEvent(action) {
  var dataLayer = (window.dataLayer = window.dataLayer || []);
  const log = dataLayer.push({
    event: "klimaCheck",
    eventCategory: "Water comes APP",
    eventAction: action.description,
    eventLabel: eventLabel,
    cloudbirstDimension: cloudbirstDimension,
    floodDimension: floodDimension
  });

  dataLayer.push(log);
  console.log("logged");
  console.log(log);
}

export default trackEvent;
