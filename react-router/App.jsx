import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import GameMatcher from "./GameMatcher";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/game/:name" element={<GameMatcher />} />
    </Routes>
  );
};

export default App;
