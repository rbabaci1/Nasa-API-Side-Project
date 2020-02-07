import React, { useState, useEffect } from "react";
import axios from "axios";
import Explanation from "./Explanation";

const PicOfTheDay = () => {
  const [nasaData, setNasaData] = useState({});

  function fetchAPI() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=F8dSoRxUrpecxL46FCau6nMt5PUmynrEb5ox9uUr&date=2020-02-06&"
      )
      .then(response => setNasaData(response.data))
      .catch(error => console.error(error));
  }

  useEffect(fetchAPI, []);
  console.log(nasaData);

  return (
    <div>
      <img src={nasaData.url} alt="Pic of the Day" />
      <Explanation explanation={nasaData.explanation} />
    </div>
  );
};

export default PicOfTheDay;
