"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a graduate with a degree in{" "}
        <span className="font-medium">BS Software Engineering</span> from{" "}
        <span className="font-medium">COMSATS</span>. I am currently working as a{" "}
        <span className="font-medium">Frontend Team Lead</span> at Greyfibre, while also{" "}
        <span className="font-medium">freelancing on Upwork</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Next.js, TypeScript, TailwindCSS, and React Native</span>
        . I am also familiar with Python, Django, and PostgreSQL. I am always looking to
        learn new technologies and expand my skillset.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, and going out with friends and family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
