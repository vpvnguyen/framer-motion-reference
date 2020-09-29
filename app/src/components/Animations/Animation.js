import React from "react";
import { motion } from "framer-motion";

const Animation = () => (
  <>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      Animation 1
    </motion.div>
  </>
);

export default Animation;
