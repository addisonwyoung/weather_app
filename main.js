// try adding loading to the mix

import { updateUI } from "./dom.js";
let data;
let symbol = document.querySelector(".symbol");
async function getData(location) {
  try {
    let pull = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=7b5fd08852f04318a4c164935252908&q=${location}`
    , {
      mode: "cors"
    });

    let data = await pull.json();
    if (data.error) {
      throw new Error("Failed");
    }
    return data;
  } catch (err) {
    throw new Error("Error!");
  }
}

function process(data) {
  return {
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    condition: data.current.condition.text,
    addy: `${data.location.name}, ${data.location.region}`,
    feelsLike_f: data.current.feelslike_f,
    feelsLike_c: data.current.feelslike_c,
    humidity: data.current.humidity,
    wind_mph: data.current.wind_mph,
    wind_kph: data.current.wind_kph,
  };
}

// user enters the location in the search bar

document
  .querySelector("#search_location")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.querySelector('.location').textContent = `Loading...`
      getData(document.querySelector("#search_location").value)
        .then((res) => {
          data = process(res);
          localStorage.setItem("userData", JSON.stringify(data));
          document.querySelector("p").classList.add("hidden");
          document.querySelector("#search_location").value = "";
      
          updateUI(data, "F");
        })
        .catch((error) => {
          document.querySelector("p").classList.remove("hidden");
            document.querySelector('.location').textContent = ``
        });
    }
  });

symbol.addEventListener("click", () => {
  if (symbol.textContent.includes("F")) {
    // go to C
    updateUI(data, "C");
  } else {
    updateUI(data, "F");
  }
});

const load = localStorage.getItem("userData");
if (load) {
  data = JSON.parse(load);

  updateUI(data, "F");
} else {
  getData("Lake Grove").then((res) => {
    console.log(res);
    data = process(res);
    updateUI(data);
    console.log(data);
    document.querySelector("p").classList.add("hidden");
  });
}
