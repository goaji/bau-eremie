export default function Hero() {
  return (
    <section
      className="bg-dark text-paper pt-16 pb-12 overflow-hidden"
      id="top"
    >
      <div className="max-w-300 mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>


          <h1 className="font-display font-extrabold text-[clamp(38px,5vw,58px)] leading-[1.02] tracking-tight text-white mb-5.5">
            <span className="text-red">Bauen </span>
            mit Energieberater-Verstand und
            <span className="text-red"> Energieberatung </span> mit Bauausführer-Verstand
          </h1>

          <p className="text-[17px] text-paper-2 max-w-120 mb-8">
            Wir bauen, planen und beraten: Rohbau und Ausbau, eigene Baupläne
            und Genehmigungsplanung sowie zertifizierte Energieberatung für
            Neubau und Sanierung — koordiniert von einem Ansprechpartner statt
            drei Gewerken.
          </p>

          <div className="flex gap-4 flex-wrap mb-10">
            <a
              href="#kontakt"
              className="bg-red text-white border border-red px-6.5 py-3.5 text-[15px] font-semibold no-underline hover:bg-red-deep transition-colors"
            >
              Kostenlose Erstberatung anfragen
            </a>
          </div>

          <p className="font-mono text-xs tracking-wide text-grey-soft">
            Zertifizierte&nbsp;Energieberatung&nbsp;&middot;
            Eigene&nbsp;Planung&nbsp;&middot; Ein&nbsp;Ansprechpartner
          </p>
        </div>

        <div>
          <picture>
            <source media="(max-width: 559px)" srcSet="/blueprint-mobile.svg" />
            <img
              src="/blueprint.svg"
              alt="Technische Skizze eines Hausquerschnitts mit Bemaßung, Gründungstiefe, Planstempel und Verweisen auf die drei Leistungsbereiche"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
