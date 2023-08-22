import axios from "axios";
import Notiflix from 'notiflix';
axios.defaults.headers.common["x-api-key"] = "live_T4WrXyEMS0dHsryRbTc3mhjPUP8YW0IRvK4NEMVqVpBaMGCWQ7960NI93vKteYyR'";
 const options = {
  method: "GET",
};

 fetch(" https://api.thecatapi.com/v1/images/search", options)
   .then((resp) => {
    console.log(resp);
     if (!resp.ok) {
      throw new Error(resp.statusText);
   }
    //   JSON.parse()

    return resp.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(function (data) {
    console.log(data);
  });
