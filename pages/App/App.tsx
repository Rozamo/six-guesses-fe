import React from "react";
import { NextPage } from "next";
import { Header } from "../../components";
import Board from "./components/Board";

const App: NextPage = () => {
  return (
    <>
      <Header />
      <Board>Board</Board>
    </>
  );
};

export default App;
