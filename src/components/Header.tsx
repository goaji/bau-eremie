"use client";

import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-black">
      <div className="flex items-center justify-between px-8 py-8.5 max-w-300 mx-auto">
        <a
          href="#top"
          className="flex items-center gap-4.5 font-display font-extrabold text-[31px] tracking-wide text-white no-underline"
        >
          <Image
            src="/logo.png"
            alt="Adrian Eremie Logo"
            width={64}
            height={66}
            className="w-16 h-auto shrink-0"
          />
          <span>
            ADRIAN EREMIE
            <span className="block font-mono font-normal text-[13px] tracking-[0.14em] text-grey-soft uppercase">
              Planen. Bauen. Vertrauen.
            </span>
          </span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-transparent border-none text-white text-2xl"
          aria-label="Menü öffnen"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <nav
          className={`${isOpen ? "flex" : "hidden"} flex-col items-end gap-5 fixed right-8 top-25.75 bg-dark px-8 py-6 border-b border-grey-line
    md:flex md:static md:flex-row md:items-center md:gap-10 md:bg-transparent md:p-0 md:border-0`}
        >
          <NavLink href="#leistungen">Leistungen</NavLink>
          <NavLink href="#kontakt">Kontakt</NavLink>
          <NavLink href="#anfrage" isRed>
            Anfrage senden
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
