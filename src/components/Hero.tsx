import AnfrageButton from "@/components/AnfrageButton";

export default function Hero() {
  return (
    <section
      className="bg-dark text-paper pt-16 pb-12 overflow-hidden"
      id="top"
    >
      <div className="max-w-300 mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>


          <h1 className="font-display font-extrabold text-[clamp(38px,5vw,58px)] leading-[1.3] tracking-tight text-white mb-5.5">
            <span className="text-red">Bauen </span>
            mit Energieberater-Verstand und
            <span className="text-red"> Energieberatung </span> mit Bauausführer-Verstand
          </h1>

          <p className="text-[17px] text-paper-2 max-w-120 mb-8">
            Ihr zuverlässiger Partner für schlüsselfertiges Bauen, Baumeisterarbeiten, Planung und Energieberatung in der Region Inn-Salzach und darüber hinaus.
          </p>

          <div className="flex gap-4 flex-wrap mb-10">
            <AnfrageButton label="Anfrage senden" href="#kontakt" />
          </div>


        </div>

        <div>
          <picture>
            <source media="(max-width: 500px)" srcSet="/blueprintMobile.svg" />
            <img
              src="/blueprintAnimated.svg"
              alt="Technische Skizze eines Hausquerschnitts mit Bemaßung, Gründungstiefe, Planstempel und Verweisen auf die drei Leistungsbereiche"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
