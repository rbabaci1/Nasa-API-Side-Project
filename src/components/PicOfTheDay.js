import React from "react";
import axios from "axios";

const PicOfTheDay = ({ date }) => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-02-06")
    .then(r => console.log(r))
    .catch(error => console.error(error));
  return (
    <div>
      <h2>yess</h2>
    </div>
  );
};

export default PicOfTheDay;
