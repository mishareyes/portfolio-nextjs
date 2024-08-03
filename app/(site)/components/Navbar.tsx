"use client";
import { strings as s } from "../constants";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ href, text }: { href: string; text: string }) => {
    return (
      <li>
        <a
          href={href}
          className="flex text-xl hover:text-white active:text-background transition ease-in-out 
                duration-300 active:underline decoration-dotted decoration-[3px]">
          {text}
        </a>
      </li>
    );
  };

  return (
    <nav className="bg-nav sticky top-0 w-full flex flex-wrap border-b-2 border-black justify-between backdrop-blur-sm z-10">
      <div className="flex flex-row w-full md:w-fit justify-between">
        <a href="/#">
          <h2
            className={`p-2 px-6 duration-300 hover:text-white active:text-background nav-logo`}>
            {s.misha.toLowerCase()}
          </h2>
        </a>
        <button
          className="md:hidden text-2xl focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}>
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect y="10" width="80" height="10"></rect>
            <rect y="40" width="80" height="10"></rect>
            <rect y="70" width="80" height="10"></rect>
          </svg>
        </button>
      </div>
      <ul
        id="navlist"
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:gap-8 self-center px-6`}>
        <NavItem href="/#about-me" text={s.aboutMe} />
        <NavItem href="/#projects" text={s.projects} />
        <NavItem href="/#designs" text={s.designs} />
        <NavItem href="/#contact" text={s.contact} />
      </ul>
    </nav>
  );
}
