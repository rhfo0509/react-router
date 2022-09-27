import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/game/number-baseball">숫자야구</Link>
      &nbsp;
      <Link to="/game/response-check">반응속도체크</Link>
      &nbsp;
      <Link to="/game/rock-scissors-paper">가위바위보</Link>
      &nbsp;
      <Link to="/game/lotto-generator">로또생성기</Link>
      &nbsp;
      <Link to="/game/void">게임매쳐</Link>
    </div>
  );
};

export default Home;
