import * as React from "react";
import { motion } from "framer-motion";

export default function WhileHoverWhileTap() {
  const defaultStyle = {
    width: 150,
    height: 150,
    borderRadius: 30,
    backgroundColor: "pink",
    cursor: "pointer",
  };

  const whileHoverStyle = { borderRadius: 75 };

  const whileTapStyle = {
    borderRadius: 30,
    backgroundColor: "blue",
    rotate: 45,
  };

  return (
    <motion.div
      initial={defaultStyle}
      whileHover={whileHoverStyle}
      whileTap={whileTapStyle}
    />
  );
}
