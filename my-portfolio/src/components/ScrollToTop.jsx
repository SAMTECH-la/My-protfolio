import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";


function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button className="scroll-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
