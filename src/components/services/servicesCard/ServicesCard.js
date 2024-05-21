import React from "react";
import "../Services.css";

const ServicesCard = (props) => {
  const { title, icon, isActive, onClick } = props;
  return (
    <div
      className="d-flex justify-content-center col-xl-4 col-lg-4 col-md-6 col-sm-12"
      onClick={() => {
        onClick();
      }}
    >
      <div
        className={
          isActive
            ? "Services-module--serviceCard--27b94 Services-module--focused--c457c"
            : "Services-module--serviceCard--27b94"
        }
      >
        <div>
          <img
            className={isActive ? "invertWhite" : ""}
            width={37}
            height={37}
            src={icon}
            alt={title}
          />
          <p
            className={
              isActive
                ? "Services-module--heading--f9c58"
                : "Services-module--heading--f9c58"
            }
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
