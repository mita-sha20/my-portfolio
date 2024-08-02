import React from "react";
import { education } from "../../apis";
import Heading from "../Heading";
import EducationCard from "../EducationCard";
export default function Education() {
  return (
    <div className="py-4 md:pt-0 md:pb-10 font-Poppins ">
      <Heading title="Education" subTitle="where I study?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mt-14 grid-flow">
        {education.map((education) => (
          <React.Fragment key={education.id}>
            <EducationCard {...education} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
