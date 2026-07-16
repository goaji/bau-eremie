export default function Impressum() {
  return (
    <div>
      <main className="bg-paper text-ink">
        <div className="max-w-180 mx-auto px-8 py-20">
          <h1 className="font-display font-extrabold text-4xl mb-10 text-ink">
            Impressum
          </h1>
          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="text-[15px] leading-relaxed">
              Adrian Eremie
              <br />
              Hütweg 19
              <br />
              84518 Garching a.d.Alz
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">Kontakt</h2>
            <p className="text-[15px] leading-relaxed">
              Telefon: (+49) 0162 7141491
              <br />
              E-Mail: info@bau-eremie.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">
              Zuständige Aufsichtsbehörde / Handwerkskammer
            </h2>
            <p className="text-[15px] leading-relaxed">[Platzhalter ]</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">
              Umsatzsteuer-ID
            </h2>
            <p className="text-[15px] leading-relaxed">[Platzhalter]</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl mb-2">
              Streitschlichtung
            </h2>
            <p className="text-[15px] leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <br />
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
