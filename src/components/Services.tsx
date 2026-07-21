import Image from "next/image";

const services = [
  {
    title: "Schlüsselfertiges Bauen",
    description:
      "Sie möchten nur einen Ansprechpartner für Ihr gesamtes Bauvorhaben? Wir koordinieren alle notwendigen Gewerke und begleiten Ihr Projekt von der Planung bis zur schlüsselfertigen Übergabe.",
    items: [
      "Ein- und Mehrfamilienhäuser",
      "An- und Umbauten",
      "Sanierungen",
      "Koordination aller Gewerke",
      "Bauleitung und Terminplanung",
      "Schlüsselfertige Ausführung",
      "Persönliche Betreuung während der gesamten Bauzeit"
    ],
    iconSrc: "/icons/crane.svg",
  },
  {
    title: "Baumeisterarbeiten",
    description:
      "Wir übernehmen sämtliche klassischen Baumeisterarbeiten – präzise, zuverlässig und termingerecht.",
    items: [
      "Rohbau",
      "Maurerarbeiten",
      "Stahlbetonarbeiten",
      "Schalungsarbeiten",
      "Fundamente und Bodenplatten",
      "Ortbetontreppen",
      "Betonfertigteile",
      "Putzarbeiten",
      "Pflasterarbeiten"
    ],
    iconSrc: "/icons/blueprint.svg",
  },
  {
    title: "Planung",
    description:
      "Eine sorgfältige Planung bildet die Grundlage für jedes erfolgreiche Bauprojekt.",
    items: [
      "Entwurfsplanung",
      "Genehmigungsplanung",
      "Ausführungsplanung",
      "Bauzeichnungen",
      "Werk- und Detailplanung",
      "Massenermittlung",
      "Technische Beratung"
    ],
    iconSrc: "/icons/energy.svg",
  },  
  {
    title: "Energieberatung",
    description:
      "Wir unterstützen Sie dabei, Ihr Gebäude energieeffizient und zukunftssicher zu gestalten.",
    items: [
     "Energieberatung",
     "Individuelle Sanierungsfahrpläne (iSFP)",
     "Energieausweise",
     "Fördermittelberatung",
     "Energetische Sanierung",
     "GEG-Nachweise"
    ],
    iconSrc: "/icons/energy.svg",
  },
];

export default function Services() {
  return (
    <section className="bg-paper pt-10 pb-16" id="leistungen">
      <h2 className="sr-only">Leistungen</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`p-8 bg-white flex flex-col border-b md:border-b-0 border-[#C9C5BB] ${
              i < services.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div className="w-11 h-11 flex items-center justify-center mb-4.5">
              <Image src={service.iconSrc} alt="" width={40} height={40} />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3.5 text-red">
              {service.title}
            </h3>
            <p className="text-[15px] text-[#4B4943] mb-5 grow">
              {service.description}
            </p>
            <ul className="list-none">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="text-[13.5px] text-[#5A5850] pl-4 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.75 before:h-[1.5px] before:bg-red"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
