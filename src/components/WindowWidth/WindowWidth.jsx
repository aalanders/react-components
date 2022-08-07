import React, { useState, useEffect } from "react";

export default function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // this removes the eventListener, otherwise it would stay in the app and slow it down
    return () => {
      // RETURN CODE HERE IS ran first to cleanup what happened last, and also called when unmounted
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div>
      Window Width Component:
      <h3>{windowWidth}</h3>
    </div>
  );
}
