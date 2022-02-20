import React from "react";
import PricingCard from "./PricingCard";

const PricingSectionRecord = ({ details }) => {
  return (
    <div className="bg-purple-600 py-20 px-10 max-w-100">
      <h1 className="text-center text-8xl font-bold text-white mb-20">
        {details.title}
      </h1>
      <div className="flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-4 justify-center wrap max-w-6xl mx-auto items-center">
        {details.pricingCards.map((card, index) => (
          <PricingCard details={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PricingSectionRecord;
