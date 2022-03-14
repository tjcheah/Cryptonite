//---------------------------------------------------------------------------
//imports
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./scroller.css";

//---------------------------------------------------------------------------
//Scroller component structure
const Scroller = () => {
  //variables
  const [isVisible, setIsVisible] = useState(false);

  //Show button when page is scrolled up to a certain distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else if (window.pageYOffset <= 200) {
      setIsVisible(false);
    }
  };

  //Set the top coordiante to 120
  //make scrolling smooth
  const scrolling = () => {
    window.scrollTo({
      top: 120,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="arrowButton">
      <FaArrowCircleUp
        className="scrollToTop heartbeat"
        onClick={scrolling}
        style={{ height: 60, display: isVisible ? "flex" : "none" }}
      />
    </div>
  );
};

//---------------------------------------------------------------------------
//export
export default Scroller;
