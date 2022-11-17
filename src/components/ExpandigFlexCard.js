import React, { useState } from "react";
import "../styles/expandigFlexCard.scss";

function ExpandigFlexCard() {

    const [activeClass,setActive] = useState(1)

    const setActiveClass = (number) => () => {
        setActive(number)
    }

  return (
    <div className="options">
      <div onClick={setActiveClass(1)} className={`option photoOne ${activeClass === 1 ? 'active' : ''}`}></div>
      <div onClick={setActiveClass(2)} className={`option photoTwo ${activeClass === 2 ? 'active' : ''}`}></div>
      <div onClick={setActiveClass(3)} className={`option photoTrhee ${activeClass === 3 ? 'active' : ''}`}></div>
    </div>
  );
}

export default ExpandigFlexCard;
