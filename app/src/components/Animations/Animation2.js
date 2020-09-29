import React from "react";
import { motion } from "framer-motion";

const Animation2 = () => (
  <>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 200,
        duration: 1,
      }}
    >
      Animation 2
    </motion.div>
  </>
);

export default Animation2;
