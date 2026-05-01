const dripServices = [
  "Visual Branding",
  "Direction Artistique",
  "Design Editorial",
  "Motion & Audiovisuel",
];

const codeServices = [
  "Site Web & Landing Pages",
  "Applications Web / SaaS",
  "Cybersécurité",
  "Hébergement & Déploiement",
];

export function ServicesSplit() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen"
    >
      <article className="split-side bg-[#FFD600] text-[#161616] flex flex-col justify-center p-8 md:p-16 relative overflow-hidden transition-all duration-500 ease-out min-h-[50vh]">
        <div className="relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
          <h2 className="font-['PMingLiU',serif] text-[clamp(3rem,6vw,5rem)] leading-none">
            Drip/{" "}
            <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
              Artisan
            </span>
          </h2>
          <p className="mt-4 font-sans text-lg max-w-[400px] opacity-90">
            Direction artistique, graphisme et productions audiovisuelles.
            L&apos;essence même de l&apos;esthétique.
          </p>
          <ul className="mt-12 list-none font-sans text-xl font-medium leading-loose">
            {dripServices.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 before:content-[''] before:block before:w-6 before:h-px before:bg-current"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="split-side bg-[#304CD3] text-white flex flex-col justify-center p-8 md:p-16 relative overflow-hidden transition-all duration-500 ease-out min-h-[50vh]">
        <div className="relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
          <h2 className="font-['Zabal',sans-serif] text-[clamp(3rem,6vw,5rem)] leading-none">
            &lt;Code&gt;{" "}
            <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
              Architecte
            </span>
          </h2>
          <p className="mt-4 font-sans text-lg max-w-[400px] opacity-90">
            Développement fullstack, solutions SaaS et cybersécurité. Construire
            l&apos;architecture de demain.
          </p>
          <ul className="mt-12 list-none font-sans text-xl font-medium leading-loose">
            {codeServices.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 before:content-[''] before:block before:w-6 before:h-px before:bg-current"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
