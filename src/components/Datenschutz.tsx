export default function Datenschutz() {
  return (
    <div>
      <main className="bg-paper text-ink">
        <div className="max-w-180 mx-auto px-8 py-20">
          <h1 className="font-display font-extrabold text-4xl mb-10 text-ink">
            Datenschutzerklärung
          </h1>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">
              1. Verantwortlicher
            </h2>
            <p className="text-[15px] leading-relaxed">
              Adrian Eremie
              <br />
              Hütweg 19
              <br />
              84518 Garching a.d.Alz
              <br />
              E-Mail: info@bau-eremie.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">
              2. Kontaktformular
            </h2>
            <p className="text-[15px] leading-relaxed mb-2">
              Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen
              angegebenen Daten (Name, E-Mail-Adresse, optional Telefonnummer,
              Art des Vorhabens, Nachricht) ausschließlich zur Bearbeitung Ihrer
              Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahme) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">
              3. Hosting &amp; Schriftarten
            </h2>
            <p className="text-[15px] leading-relaxed">
              Diese Website nutzt Google Fonts, die über die
              Next.js-Schriftoptimierung beim Build der Seite lokal eingebunden
              werden. Es findet dabei keine Verbindung zu Servern von Google zur
              Laufzeit statt; es werden keine Daten an Google übertragen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl mb-2">
              4. Cookies &amp; Analyse-Tools
            </h2>
            <p className="text-[15px] leading-relaxed">
              Diese Website setzt aktuell keine Cookies und keine Analyse- oder
              Tracking-Tools ein.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl mb-2">
              5. Ihre Rechte
            </h2>
            <p className="text-[15px] leading-relaxed">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie
              ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
