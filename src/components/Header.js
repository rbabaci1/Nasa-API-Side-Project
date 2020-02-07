import React from "react";
import styled from "styled-components";

const Header = () => {
  const Intro = styled.div`
    width: 80%;
    margin: 20px auto;
    border-bottom: 3px solid #8a8584;

    h1 {
      font-family: Monaco;
      color: #595969;
    }
    p {
      font-size: 18px;
      font-family: monospace;
      line-height: 25px;
      color: #be5e0a;

      a {
        text-decoration: none;
        font-weight: bold;
      }
    }
  `;

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
      <p>{"2020 February 6"}</p>
    </Intro>
  );
};

export default Header;
