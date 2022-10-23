import React from "react";
import { NextPage } from "next";
import * as S from "./Board.styles";
import { BoardProps } from "./Board.types";

const Board: NextPage<BoardProps> = ({ children }) => {
  return <S.Board>{children}</S.Board>;
};

export default Board;
