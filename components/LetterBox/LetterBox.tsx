import React from "react";
import { NextPage } from "next";
import * as S from "./styles";
import { LetterBoxProps } from "./types";

const LetterBox: NextPage<LetterBoxProps> = ({ currentLetter = "A" }) => {
  return <S.LetterBox>{currentLetter}</S.LetterBox>;
};

export default LetterBox;
