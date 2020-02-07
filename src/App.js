import React from "react";
import Header from "./components/Header";
import PicOfTheDay from "./components/PicOfTheDay";
import styled from "styled-components";

function App() {
  const App = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    padding: 15px;

    p {
      font-size: 18px;
      font-family: monospace;
      line-height: 25px;
      color: #be5e0a;
    }
  `;

  return (
    <App>
      <Header />
      <PicOfTheDay />
    </App>
  );
}

export default App;
