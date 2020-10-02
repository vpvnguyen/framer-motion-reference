import React from "react";
import { motion } from "framer-motion";

const AnimateUp = () => {
  const variants = {
    before: {
      opacity: 0,
      y: 10,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        // stiffness: 150,
      },
    },
  };

  return (
    <>
      <motion.div variants={variants} initial={"before"} animate={"after"}>
        Animate Up
      </motion.div>
    </>
  );
};

export default AnimateUp;
