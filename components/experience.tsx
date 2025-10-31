import React from "react";
import SectionHeading from "./section-heading";
import { getExperiences } from "@/lib/data-fetch";
import ExperienceClient from "./experience-client";

export default async function Experience() {
  const experiencesData = await getExperiences();

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <ExperienceClient experiencesData={experiencesData} />
    </section>
  );
}
