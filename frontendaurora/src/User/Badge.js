import React, { useState } from "react";
import './UserPage.css'
import badgeImage from '../images/badge1.png';

const Badge = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className="badge-container">
      <div
        className="badge-image"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <img src={badgeImage} width={50} height={65} alt="badge image" />
      </div>
      {hover && (
        <div className="popup">
          <p>Plumbing Badge</p>
        </div>
      )}
    </div>
  );
};

export default Badge;