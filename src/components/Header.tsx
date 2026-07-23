"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnfrageButton from "@/components/AnfrageButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <div className="flex items-center justify-between px-8 py-8.5 max-w-300 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-4.5 font-display font-extrabold text-[31px] tracking-wide  no-underline"
        >
          <Image
            src="/logoDark.svg"
            alt="Adrian Eremie Logo"
            width={64}
            height={66}
            className="w-16 h-auto shrink-0"
          />
          <span>
            ADRIAN EREMIE
            <span className="block font-mono font-normal text-[13px] tracking-[0.14em]  uppercase">
              Planen. <span className="text-red">Bauen</span>. Vertrauen.
            </span>
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-transparent border-none text-black text-2xl"
          aria-label="Menü öffnen"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <nav
          className={`${isOpen ? "flex" : "hidden"} flex-col items-end gap-5 fixed right-8 top-25.75 bg-dark px-8 py-6 border-b border-grey-line
            md:static md:flex md:flex-row md:items-center md:gap-10 md:bg-transparent md:p-0 md:border-0`}
        >
          <Link
            href="/#leistungen"
            className="text-white md:text-black hover:text-red no-underline text-[16.5px] font-medium"
          >
            Leistungen
          </Link>
          <Link
            href="/#kontakt"
            className="text-white md:text-black hover:text-red no-underline text-[16.5px] font-medium"
          >
            Kontakt
          </Link>
          <AnfrageButton label="Anfrage senden" href="/#anfrage-form" />
        </nav>
      </div>
    </header>
  );
}
