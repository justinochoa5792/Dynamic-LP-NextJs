import React from "react";
import CourseHeaderRecord from "./CourseHeaderRecord";
import CalloutRecord from "./CalloutRecord";
import LearningSectionRecord from "./LearningSectionRecord";
import PricingCard from "./PricingCard";
import PricingSectionRecord from "./PricingSectionRecord";

const CourseSection = ({ details }) => {
  if (details.__typename === "CourseHeaderRecord") {
    return <CourseHeaderRecord details={details} />;
  }
  if (details.__typename === "CalloutRecord") {
    return <CalloutRecord details={details} />;
  }
  if (details.__typename === "LearningSectionRecord") {
    return <LearningSectionRecord details={details} />;
  }
  if (details.__typename === "PricingCard") {
    return <PricingCard details={details} />;
  }
  if (details.__typename === "PricingSectionRecord") {
    return <PricingSectionRecord details={details} />;
  }
  return <div></div>;
};

export default CourseSection;
