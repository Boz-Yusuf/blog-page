import { GithubIcon, OutsideIcon } from "@/components/icons";
import { LucideGithub, LucideOutdent } from "lucide-react";
import Link from "next/link";
import React from "react";

const dummyProjects = [
  {
    id: "1",
    title: "Formats, Runs and highlights FitNesse tests in VS Code",
    techstack: ["TypeScript", "Node.js", "VS Code"],
    imgUrl:
      "https://chrisotto.dev/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fvscodefitnesse.png&w=1920&q=75",
    github: "https://github.com/chrisotto6/VSCodeFitNesse",
    live: "https://github.com/chrisotto6/VSCodeFitNesse",
  },
  {
    id: "2",
    title: "A simple and clean blog template",
    techstack: ["CQRS", "PostgreSQL", ".NET Core"],
    github: "",
    imgUrl:
      "https://chrisotto.dev/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fchrisottodev.png&w=1920&q=75",
    live: "",
  },
  {
    id: "3",
    title: "A simple and clean blog template",
    techstack: ["CQRS", "PostgreSQL", ".NET Core"],
    github: "",
    imgUrl:
      "https://chrisotto.dev/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Flibrary.png&w=1920&q=75",
    live: "",
  },
  {
    id: "4",
    title: "A simple and clean blog template",
    techstack: ["CQRS", "PostgreSQL", ".NET Core"],
    github: "",
    imgUrl:
      "https://chrisotto.dev/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Ffitnesseformat.png&w=1920&q=75",
    live: "",
  },
  {
    id: "5",
    title: "A simple and clean blog template",
    techstack: ["CQRS", "PostgreSQL", ".NET Core"],
    github: "",
    imgUrl:
      "https://chrisotto.dev/_next/image?url=%2Fstatic%2Fimages%2Fprojects%2Fcardshuffling.png&w=1920&q=75",
    live: "",
  },
];

function Projects({}: Props) {
  return (
    <div>
      <div className="border-b w-full border-gray-500/50 space-y-4 pb-4">
        <h1 className="text-6xl">Projects</h1>
        <h2 className="text-2xl text-gray-300">
          My open source side projects.
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto mt-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
          {dummyProjects.map((project) => (
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
