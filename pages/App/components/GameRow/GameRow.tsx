import React, { useEffect } from "react";
import { NextPage } from "next";
import * as S from "./GameRow.styles";
import { singleLetterRegex } from "../../../../constants";

const Board: NextPage = () => {
  const handleKeyDown = (event: globalThis.KeyboardEvent): void => {
    const { key } = event;

    if (singleLetterRegex.test(key)) {
      console.log(key.toUpperCase());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  });

  return <S.GameRow>Game Row</S.GameRow>;
};

export default Board;
