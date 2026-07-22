import { SERVICES } from "@/app/constants";
import Image from "next/image";



export default function Services() {
  return (
    <section className="bg-paper pt-10 pb-16" id="leistungen">
      <div className="max-w-300 mx-auto  ">
        <h2 className="sr-only">Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`p-8 bg-white flex flex-col border-b md:border-b-0 border-[#C9C5BB] ${i < SERVICES.length - 1 ? "md:border-r" : ""
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
      </div>
    </section>
  );
}
