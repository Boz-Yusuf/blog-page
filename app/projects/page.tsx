import { GithubIcon, OutsideIcon } from "@/components/icons";
import { LucideGithub, LucideOutdent } from "lucide-react";
import Link from "next/link";
import React from "react";
import profileDefault from "@/profiles/default.json";
import profileIsmail from "@/profiles/ismail.json";

function Projects() {
  let projects;
  console.log(
    "process.env.CURRENT_PROFILE",
    process.env.CURRENT_PROFILE == "ismail"
  );
  switch (process.env.CURRENT_PROFILE) {
    case "ismail":
      projects = profileIsmail.projects;
      break;
    default:
      projects = profileDefault.projects;
      break;
  }
  return (
    <div>
      <div className="border-b w-full border-gray-500/50 space-y-4 pb-4">
        <h1 className="text-6xl">Projects</h1>
        <h2 className="text-2xl text-gray-300">
          My open source side projects.
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto mt-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-outline-blue p-4 rounded-lg flex flex-col justify-between gap-4"
            >
              <div className="space-y-4">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl mt-2 line-clamp-2">{project.title}</h3>
                <div className="flex gap-2 mt-2">
                  {project.techstack.map((tech) => (
                    <p
                      key={tech}
                      className="px-2 h-max py-1 bg-sky-500 rounded-md tracking-wide select-none"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  <GithubIcon className=" text-white" />
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-white"
                  >
                    <OutsideIcon />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
