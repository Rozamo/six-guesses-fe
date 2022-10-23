import React from "react";
import { NextPage } from "next";
import * as S from "./Header.styles";

const Header: NextPage = () => {
  return (
    <S.Header>
      <h1>Six Guesses</h1>
    </S.Header>
  );
};

export default Header;
