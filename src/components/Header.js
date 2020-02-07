import React from "react";
import styled from "styled-components";

const Intro = styled.div`
  width: 80%;
  margin: 20px auto;
  border-bottom: 3px solid #8a8584;

  h1 {
    font-family: Monaco;
    color: #595969;
    padding-bottom: 30px;
  }
`;

const Header = () => {
  return (
    <Intro>
      <h1>Astronomy Picture of the Day!</h1>
      <p>
        <a href="https://apod.nasa.gov/apod/archivepix.html" target="blank">
          Discover the cosmos!
        </a>{" "}
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </p>
    </Intro>
  );
};

export default Header;
