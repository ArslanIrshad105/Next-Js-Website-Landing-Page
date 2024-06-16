"use client";
import React, { useState } from "react";
import ServicesCard from "./servicesCard/ServicesCard";
import { SERVICES } from "@/utlis/dat";
import ServicesDetail from "./servicesDetail/ServicesDetail";

const Services = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  const handleSelectService = (item) => {
    setSelectedService(item);
  };

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="text-align">
              <h2 className="main-heading-1">
                Software Consulting & <br></br> Development Services
              </h2>
              <p className="pb-2">
                ...with the perfect blend of technology, expertise and
                innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row justify-content-center">
              {SERVICES.map((item) => (
                <ServicesCard
                  icon={item.serviceIcon}
                  title={item.title}
                  isActive={selectedService.title === item.title}
                  onClick={() => {
                    handleSelectService(item);
                  }}
                />
              ))}
            </div>
          </div>
          <ServicesDetail
            serviceTitle={selectedService.title}
            serviceDescription={selectedService.Description}
            icons={selectedService.languagesIcon}
            serviceLink={selectedService.link}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
