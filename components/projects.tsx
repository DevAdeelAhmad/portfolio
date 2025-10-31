import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import Link from "next/link";
import { getProjects } from "@/lib/data-fetch";

export default async function Projects() {
  const projectsData = await getProjects();

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-1">
        {projectsData.map((project, index) => (
          <Link key={index} target="_blank" href={project.link}>
            <React.Fragment >
              <Project {...project} />
            </React.Fragment>
          </Link>
        ))}
      </div>
    </section>
  );
}
