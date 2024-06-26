import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="shadow-md">
      <nav className="flex justify-between container mx-auto p-4">
        <div>
          <h1>Logo</h1>
        </div>

        <div className="flex gap-4 text-green  text-blue-500 font-medium tracking wide">
          <Link href={"/"}> HOME</Link>
          <Link href={"/about"}>ABOUT </Link>
          <Link href={"/project"}>PROJECTS</Link>
          <Link href={"/contact"}>CONTACT</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
