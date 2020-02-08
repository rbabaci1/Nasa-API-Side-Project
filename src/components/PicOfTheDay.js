import React, { useState, useEffect } from "react";
import axios from "axios";
import Explanation from "./Explanation";
import TitleAndCopyright from "./Title&copyright";
import DateInput from "./DateInput";

import styled from "styled-components";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
`;
const Image = styled.img`
  width: 650px;
  height: 450px;
  border-radius: 20px;
  box-shadow: #2f2f34 0px 0px 10px;
`;

const PicOfTheDay = () => {
  var today = new Date();
  today = today.toISOString().replace(/T.+/g, "");

  const [nasaData, setNasaData] = useState({});
  const [dateInput, setDateInput] = useState(today);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function getData() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=F8dSoRxUrpecxL46FCau6nMt5PUmynrEb5ox9uUr&date=${dateInput}`
      )
      .then(response => setNasaData(response.data))
      .catch(error => console.error(error));
  }
  useEffect(getData, [dateInput]);

  return (
    <Container>
      <DateInput setDate={setDateInput} />
      <Image src={nasaData.url} alt="Pic of the Day" />

      <div>
        <Button onClick={toggle} style={{ marginTop: "10px" }}>
          More Info
        </Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <TitleAndCopyright
                title={nasaData.title}
                copyright={nasaData.copyright}
              />

              <Explanation explanation={nasaData.explanation} />
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div></div>
    </Container>
  );
};

export default PicOfTheDay;
