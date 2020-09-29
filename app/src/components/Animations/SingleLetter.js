import React from "react";
import { motion } from "framer-motion";

const SingleLetter = () => {
  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  };

  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 200,
      },
    },
  };

  return (
    <>
      <motion.div
        style={{
          fontFamily: "Montserrat, Work Sans, sans-serif",
          fontWeight: "bold",
          fontSize: 26,
          border: "1px solid black",
        }}
        variants={containerVariants}
        initial={"before"}
        animate={"after"}
      >
        <motion.div
          width={"auto"} // Set the width to the width of the letter
          height={26} // Set the height to the height of the text
          background={""}
          style={{ position: "relative" }} // Position elements
          variants={letterVariants}
        >
          Single Letter
        </motion.div>
      </motion.div>
    </>
  );
};

export default SingleLetter;
