import React from "react";
import SectionHeading from "./section-heading";
import { getAbout } from "@/lib/data-fetch";
import AboutClient from "./about-client";

export default async function About() {
  const aboutContent = await getAbout();

  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <AboutClient content={aboutContent} />
    </section>
  );
}
