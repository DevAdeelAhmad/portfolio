import React from "react";
import SectionHeading from "./section-heading";
import { getSkills } from "@/lib/data-fetch";
import SkillsClient from "./skills-client";

export default async function Skills() {
  const skillsData = await getSkills();

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <SkillsClient skillsData={skillsData} />
    </section>
  );
}
