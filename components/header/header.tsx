import { LucideCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import profileDefault from "@/profiles/default.json";
import profileIsmail from "@/profiles/ismail.json";
import profileYusuf from "@/profiles/yusuf.json";

type Props = {};

const navbar = [
  { title: "Blog", url: "/", isActive: true },
  { title: "Projects", url: "/projects", isActive: true },
  { title: "About", url: "/about", isActive: true },
];

function Header({}: Props) {
  let title = "";
  switch (process.env.CURRENT_PROFILE) {
    case "ismail":
      title = profileIsmail.header;
      break;
    case "yusuf":
      title = profileYusuf.header;
      break;
    default:
      title = profileDefault.header;
      break;
  }

  return (
    <header className="h-12 flex py-16 items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="border-2 border-r-transparent border-l-transparent animate-spin border-teal-400 rounded-full p-1">
          <div
            className="
          border-2 border-r-transparent border-l-transparent animate-spin-slow-reverse border-teal-100 rounded-full p-1
          "
          >
            <LucideCircle className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-2xl">
          <Link
            href="/"
            className="font-bold text-gray-100 hover:text-primary-600 duration-150 ease-linear"
          >
            {title}
          </Link>
        </h1>
      </div>
      <div>
        <nav className="flex gap-4">
          {navbar
            .filter((item) => item.isActive !== false)
            .map((item, i) => {
              return (
                <Link
                  key={item.title + i}
                  href={item.url}
                  className="text-gray-100 hover:text-primary-600 duration-150 ease-linear text-xl tracking-wide"
                >
                  {item.title}
                </Link>
              );
            })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
