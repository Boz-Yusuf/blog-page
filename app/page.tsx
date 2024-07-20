"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LucideChevronDown, LucideChevronUp, LucideSearch } from "lucide-react";
import React from "react";

const tags = ["React", "Next.js", "TailwindCSS", "TypeScript"];

export default function Home() {
  const [isTagsOpen, setIsTagsOpen] = React.useState(false);

  function handleIsTagsOpen() {
    setIsTagsOpen(!isTagsOpen);
  }

  return (
    <main className="space-y-4">
      <h1 className="text-6xl">All Posts</h1>
      <div className="flex justify-between ">
        <div className="relative ">
          <label
            htmlFor="search"
            className="absolute top-[50%] right-2 translate-y-[-50%]"
          >
            <LucideSearch className="w-6 h-6 text-gray-500 z-10" />
          </label>
          <Input type="text" name="search" id="search" className="w-full" />
        </div>
        <div className="flex gap-2 text-xl items-center">
          <label
            className="select-none cursor-pointer"
            onClick={handleIsTagsOpen}
          >
            TAGS
          </label>
          {isTagsOpen ? (
            <LucideChevronDown
              onClick={handleIsTagsOpen}
              className="cursor-pointer"
            />
          ) : (
            <LucideChevronUp
              onClick={handleIsTagsOpen}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        className={cn(
          "flex gap-4 flex-wrap duration-150 ease-linear overflow-hidden border-teal-500",
          isTagsOpen ? "h-auto border-t border-b py-2 " : "h-0"
        )}
      >
        {tags.map((tag, i) => (
          <p
            key={i}
            className="px-2 h-max py-1 hover:text-white  hover:bg-teal-500 cursor-pointer border-teal-500 border rounded-full text-sm tracking-wide select-none"
          >
            {tag}
          </p>
        ))}
      </div>
    </main>
  );
}
