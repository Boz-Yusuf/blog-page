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

const profile = {
  img: {
    url: "https://chrisotto.dev/_next/image?url=%2Fstatic%2Fimages%2Favatar.jpg&w=1920&q=75",
    alt: "John Doe",
  },
  contact: [
    {
      icon: LucideMail,
      url: "mailto:forotshaman@gmail.com",
    },
    {
      icon: GithubIcon,
      url: "https://github.com/Boz-Yusuf",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yusuf-boz/",
    },
    {
      icon: LucideTwitter,
      url: "#",
    },
  ],
  experiences: [
    {
      company: "Flow",
      jobs: [
        {
          jobtitle: "Senior SDET",
          date: "Aug 2022 - Present",
          tasks: ["UNDER CONSTRUCTION"],
        },
      ],
    },
    {
      company: "Northwestern mutual",
      jobs: [
        {
          jobtitle: "Software Engineer",
          date: "Aug 2021 - Aug 2022",
          tasks: [
            "Manage technical backlog and planning for over forty test and test support repositories.",
            "Lead team of nine Test Engineers across a large project coordinating testing efforts, managing project expectations and meeting project milestones.",
            "Plan and execute end-to-end functional testing and create UI tests around new functionality.",
            "Adopt and advocate technological advancement amongst teams across organization as the Digital Ambassador",
            "Provide guidance and solutions to improve team efficiency and effectiveness.",
            "Collaborate with cross-functional teams across the organization for companywide deliverables.",
            "Mentor reports and mentees to achieve company, project, and personal goals.",
            "Create automated testing solutions using Node.js, Jest, Postman, Cucumber and WDIO.",
            "Advise on testing, automation, and performance strategies for delivery teams.",
          ],
        },
        {
          jobtitle: "Sr Test Engineer",
          date: "Jan 2019 - Aug 2021",
          tasks: [
            "Created automated tests with Specflow, Cucumber, WDIO, Node.js and Postman.",
            "Prescribed process improvements, tracked progress, and achieved completion objectives.",
            "Developed Postman API testing solution at the scrum team level with Node.js, Docker and Gitlab CI/CD, forty microservices with one-thousand tests using solution.",
            "Elevated Postman API testing solution to the enterprise level working with the frameworks team to get it added to NM internal tooling.",
            "Worked on backend API and middleware GraphQL services using C# and Javascript.",
            "Audited services test coverage, filling gaps and maintaining a proportional automation pyramid.",
            "Collaborated with product organization to develop strong quality processes across project teams.",
            "Mentored five Test Engineers, set goals, strategy, and direction to improve their technical and soft skills.",
            "Provided technical leadership, training, guidance, feedback, and coaching to Test Engineers.",
          ],
        },
      ],
    },
    {
      company: "Blue Yonder",
      jobs: [
        {
          jobtitle: "Senior Quality Engineer",
          date: "Nov 2017 - Jan 2019",
          tasks: [
            "Assessed the testing requirements of each product area and its components, detailed appropriate strategies and tools throughout product development.",
            "Utilized FitNesse and Selenium to create highly effective automated tests running on Jenkins.",
            "Collected test metrics, analyzed trends, and suggested appropriate corrective actions.",
            "Detected the root cause of unstable tests, corrected the underlying issues that resulted in an 80% decrease in unstable tests year over year.",
            "Evaluated test automation tools, technology, and framework based on product requirements.",
            "Assisted in developing performance criteria and validated performance metrics were achieved.",
            "Resolved impediments related to quality by collaborating with cross-functional stakeholders.",
            "Conducted cross-training and education to test, development and services personnel as required.",
          ],
        },
      ],
    },
  ],
};

function AboutPage() {
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
            {profile.contact.map((contact) => (
              <Link href={contact.url} className="">
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
            {profile.experiences.map((experience) => (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{experience.company}</h3>
                {experience.jobs.map((job) => (
                  <div className="space-y-4">
                    <h4 className="text-xl">{job.jobtitle}</h4>
                    <p className="text-gray-300">{job.date}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 tracking-wide">
                      {job.tasks.map((task) => (
                        <li>{task}</li>
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
