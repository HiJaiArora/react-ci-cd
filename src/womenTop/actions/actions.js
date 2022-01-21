import axios from "axios";

const baseURL = "https://rainy-star.surge.sh/products.json";
export function fetchData() {
  return async function (dispatch) {
    try {
      axios.get(baseURL).then(function (response) {
        console.log(response.data);
        dispatch({ type: "FETCHED", payload: response.data });
      });
    } catch (err) {
      dispatch({ type: "FAILED", error: err });
    }
  };
}
