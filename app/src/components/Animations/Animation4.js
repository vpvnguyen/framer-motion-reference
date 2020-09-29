import React from "react";
import { motion } from "framer-motion";

const Animation4 = () => (
  <>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Animation 4
    </motion.div>
  </>
);

export default Animation4;
