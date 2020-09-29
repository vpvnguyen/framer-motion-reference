import React from "react";
import { motion } from "framer-motion";

const Animation3 = () => (
  <>
    <motion.div
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 300,
      }}
    >
      Animation 3
    </motion.div>
  </>
);

export default Animation3;
