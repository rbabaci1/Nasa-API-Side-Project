import React from "react";

const Header = ({ date }) => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
