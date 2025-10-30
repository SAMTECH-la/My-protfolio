import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home">
      <h2 className="section-title">Welcome</h2>
      <div className="container hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Hi, I'm <span style={{ color: "#64ffda" }}>Samarth V. Kurdukar</span>
        </motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
          Frontend Developer & Designer
        </motion.h2>
        <a href="#projects"><button className="hero-btn mt-3">View My Work</button></a>
      </div>
    </section>
  );
}

export default Hero;
