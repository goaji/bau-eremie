import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#141412] text-grey-soft py-9 border-t border-grey-line">
      <div className="max-w-300 mx-auto px-8 flex justify-between items-center flex-wrap gap-3.5 text-[13px]">
        <div className="flex items-center gap-2.5 font-display font-bold text-paper-2 text-base">
          <Image
            src="/logo.png"
            alt="Adrian Eremie Logo"
            width={22}
            height={23}
          />
          ADRIAN EREMIE
        </div>
        <div className="font-mono text-[11px] text-[#B5B09F]">
          © 2026 · Adrian Eremie, Garching a.d.Alz
        </div>
        <div className="flex gap-5.5">
          <a
            href="/impressum"
            className="no-underline text-grey-soft hover:text-paper"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="no-underline text-grey-soft hover:text-paper"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
