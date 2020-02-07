import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px 0;
  font-family: Monaco;

  h3 {
    font-size: 25px;
    padding: 15px 0;
  }
  h4 {
    font-size: 18px;
  }
`;

const TitleAndCopyright = ({ title, copyright }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <h4>
        Image Credit & <span>Copyright: </span>
        <a href="https://www.flickr.com/photos/140032790@N06/" target="blank">
          {copyright}
        </a>
      </h4>
    </Wrapper>
  );
};

export default TitleAndCopyright;
