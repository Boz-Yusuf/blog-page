import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="h-12">
      <div className="flex justify-center items-center h-full text-gray-300">
        <p className="space-x-2">
          <span>© 2024 Made by</span>
          <Link href={"/"} className="underline">
            İsmail Sevgi
          </Link>
          <span>,</span>
          <Link href={"/"} className="underline">
            Yusuf Boz
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
