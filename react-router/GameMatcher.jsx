import React from "react";
import { useParams } from "react-router";
import NumberBaseball from "../3.숫자야구/NumberBaseballClass";
import ResponseCheck from "../4.반응속도체크/ResponseCheckClass";
import RSP from "../5.가위바위보/RSPClass";
import Lotto from "../6.로또/LottoClass";

const GameMatcher = () => {
  const { name } = useParams();

  switch (name) {
    case "number-baseball":
      return <NumberBaseball />;
    case "response-check":
      return <ResponseCheck />;
    case "rock-scissors-paper":
      return <RSP />;
    case "lotto-generator":
      return <Lotto />;
    default:
      return (
        <div>존재하지 않는 페이지입니다.</div>
      )
  }
};

export default GameMatcher;
