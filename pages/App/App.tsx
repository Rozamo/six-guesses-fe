import React from "react";
import { NextPage } from "next";
import { Header } from "../../components";
import { Board, GameRow } from "./components";

const App: NextPage = () => {
  return (
    <>
      <Header />
      <Board>
        <GameRow />
      </Board>
    </>
  );
};

export default App;
