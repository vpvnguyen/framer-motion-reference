import React from "react";
import { motion } from "framer-motion";

const Animation2 = () => (
  <>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 2600000,
        damping: 2,
      }}
    >
      Animation 2
    </motion.div>
  </>
);

export default Animation2;
