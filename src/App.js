import React, { useState, useEffect } from "react";

import "./App.css";
import ComingSoon from "./pages/ComingSoon";
import WindowContext from "./store/window-context";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowContext.Provider value={{ isDesktop: !!(windowSize.width >= 992) }}>
      <ComingSoon />
    </WindowContext.Provider>
  );
}

export default App;
