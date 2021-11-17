import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        yoyo: Infinity
      },
      y: {
        duration: 0.25,
        yoyo: Infinity,
        ease: "easeOut"
      }
    }
  }
}

const Loader = () => {
  return (
    <motion.div className="loader"
      variants={loaderVariants}
      animate="animationOne"
    >

    </motion.div>
  )
}

export default Loader
