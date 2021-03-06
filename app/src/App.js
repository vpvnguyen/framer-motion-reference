import React from "react";
import Animation from "./components/Animations/Animation";
import Animation2 from "./components/Animations/Animation2";
import Animation3 from "./components/Animations/Animation3";
import Animation4 from "./components/Animations/Animation4";
import IndividualLetters from "./components/Animations/IndividualLetters";
import SingleLetter from "./components/Animations/SingleLetter";
import AnimateUp from "./components/Animations/AnimateUp";
import WhileHoverWhileTap from "./components/Animations/WhileHoverWhileTap";

function App() {
  return (
    <>
      <Animation />
      <Animation2 />
      <Animation3 />
      <Animation4 />
      <IndividualLetters />
      <SingleLetter />
      <AnimateUp />
      <WhileHoverWhileTap />
    </>
  );
}

export default App;
