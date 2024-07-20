import { GithubIcon } from "@/components/icons";
import { url } from "inspector";
import {
  Linkedin,
  LucideMail,
  LucidePhone,
  LucidePhoneCall,
  LucideTwitter,
  TwitterIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import profileDefault from "@/profiles/default.json";
import profileIsmail from "@/profiles/ismail.json";

function AboutPage() {
  let profile;

  switch (process.env.CURRENT_PROFILE) {
    case "ismail":
      profile = profileIsmail.about;
      break;
    default:
      profile = profileDefault.about;
      break;
  }

  return (
    <div>
      <div className="border-b border-gray-500 space-y-4 pb-4">
        <h1 className="text-6xl ">About</h1>
        <h2 className="text-xl text-gray-300">
          This is a simple blog template. It is built with Next.js, Tailwind
          CSS, TypeScript and ESLint. It is a work in progress.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 py-12">
        <div className="col-span-4 lg:col-span-1 flex flex-col space-y-4">
          <div className="w-full grid place-content-center">
            <img
              src={profile.img.url}
              alt={profile.img.alt}
              className="rounded-full w-full object-cover"
            />
          </div>

          <h3 className="text-white text-center text-3xl">{profile.img.alt}</h3>
          <div className="text-center text-gray-300">
            <p>Senior Front-end Developer</p>
            <p>Facebook</p>
          </div>
          <div className="flex w-full justify-center gap-4  items-center">
            {profile.contact.map((contact, i) => (
              <Link href={contact.url} className="" key={contact.url + i}>
                <contact.icon />
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 px-12 ">
          <div className="border-b border-gray-500 p-4">
            <h2 className="text-3xl">Experience</h2>
          </div>
          <div className="p-4 space-y-4 ">
            {profile.experiences.map((experience, i) => (
              <div className="space-y-4" key={experience.company + i}>
                <h3 className="text-2xl font-bold">{experience.company}</h3>
                {experience.jobs.map((job) => (
                  <div className="space-y-4" key={job.jobtitle + i}>
                    <h4 className="text-xl">{job.jobtitle}</h4>
                    <p className="text-gray-300">{job.date}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 tracking-wide">
                      {job.tasks.map((task, i) => (
                        <li key={task + i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
