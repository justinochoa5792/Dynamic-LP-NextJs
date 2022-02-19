import React from "react";
import CourseHeaderRecord from "./CourseHeaderRecord";
import CalloutRecord from "./CalloutRecord";
import LearnSectionRecord from "./LearnSectionRecord";
import PricingCard from "./PricingCard";
import PricingSectionRecord from "./PricingSectionRecord";

const CourseSection = ({ details }) => {
  console.log(details);
  if (details.__typename === "CourseHeaderRecord") {
    return <CourseHeaderRecord details={details} />;
  }
  if (details.__typename === "CalloutRecord") {
    return <CalloutRecord details={details} />;
  }
  if (details.__typename === "LearnSectionRecord") {
    return <LearnSectionRecord details={details} />;
  }
  if (details.__typename === "PricingCard") {
    return <PricingCard details={details} />;
  }
  if (details.__typename === "PricingSectionRecord") {
    return <PricingSectionRecord details={details} />;
  }
  return (
    <div>
      <h1>Course Section</h1>
    </div>
  );
};

export default CourseSection;
