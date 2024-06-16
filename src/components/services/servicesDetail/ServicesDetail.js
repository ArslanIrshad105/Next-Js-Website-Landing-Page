import React from "react";
import "../Services.css";
import Link from "next/link";

const ServicesDetail = (props) => {
  const { serviceTitle, serviceDescription, icons, serviceLink } = props;
  return (
    <div className="pl-md-5 Services-module--serviceDetail--99387 col-md-6">
      <p className="Services-module--para--5ad1a">{serviceTitle}</p>
      <p className="pb-2">{serviceDescription}</p>
      <div className="d-flex align-items-center flex-wrap">
        {icons.map((i) => {
          return (
            <div className="pb-2 mb-3 pr-4 hover-text">
              <img height={30} width={30} src={i.icon} alt={i.altText} />
              <span className="tooltip-text" id="top">
                {i.altText}
              </span>
            </div>
          );
        })}
      </div>
      <Link href={serviceLink} className="btn_black_border">
        Learn More
      </Link>
    </div>
  );
};

export default ServicesDetail;
