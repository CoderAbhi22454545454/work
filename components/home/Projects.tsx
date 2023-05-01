import React from "react";
import projects from "@/data/content/projects";
import { Project } from "types";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../projects/ProjectCard";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div id="scrool">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-16  relative mt-12 font-bold">
        Projects
        <img
          className="sqD w-10 -top-8 -right-8 absolute"
          src="/static/doodles/hero/code.svg"
        />
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start mt-0">
        {projectsList.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
