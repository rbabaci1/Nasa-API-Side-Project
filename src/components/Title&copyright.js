import React from "react";

const TitleAndCopyright = ({ title, copyright }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>
        Image Credit & <span>Copyright: </span>
        <a href="https://www.flickr.com/photos/140032790@N06/" target="blank">
          {copyright}
        </a>
      </h4>
    </div>
  );
};

export default TitleAndCopyright;
