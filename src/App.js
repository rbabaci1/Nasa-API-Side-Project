import React from "react";
import Header from "./components/Header";
import PicOfTheDay from "./components/PicOfTheDay";
import styled from "styled-components";

const Main = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  padding: 15px;

  p {
    font-size: 18px;
    font-family: monospace;
    line-height: 28px;
    color: #be5e0a;
  }
  a {
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    color: red;
  }
`;

function App() {
  return (
    <Main>
      <Header />
      <PicOfTheDay />
    </Main>
  );
}

export default App;
