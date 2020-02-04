import axios from "axios";

// Checks if a unit_address_bbr is placed in the url and if so gets a kvhx.
export default function load_dynamic_data(callBack) {
  //Get query params
  const params = window.location.search.split("&");
  for (var param of params) {
    if (param.includes("unadr_bbrid=")) {
      const unit_bbr = param.split("=")[1];
      axios.get("https://dawa.aws.dk/adresser/" + unit_bbr).then(resp => {
        callBack(resp);
      });
    }
  }
}
