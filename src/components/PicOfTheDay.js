import React, { useState, useEffect } from "react";
import axios from "axios";
import Explanation from "./Explanation";
import TitleAndCopyright from "./Title&copyright";
import styled from "styled-components";

const PicOfTheDay = () => {
  const [nasaData, setNasaData] = useState({});

  function getData() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=F8dSoRxUrpecxL46FCau6nMt5PUmynrEb5ox9uUr&date=2020-02-06&"
      )
      .then(response => setNasaData(response.data))
      .catch(error => console.error(error));
  }

  useEffect(getData, []);
  console.log(nasaData);

  const Container = styled.div`
    width: 80%;
    margin: 40px auto;
  `;
  const Image = styled.img`
    width: 100%;
    border-radius: 20px;
    box-shadow: #2f2f34 0px 0px 10px;
  `;

  return (
    <Container>
      <Image src={nasaData.url} alt="Pic of the Day" />
      <TitleAndCopyright
        title={nasaData.title}
        copyright={nasaData.copyright}
      />
      <Explanation explanation={nasaData.explanation} />
    </Container>
  );
};

export default PicOfTheDay;
