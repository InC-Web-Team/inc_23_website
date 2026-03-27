import { sponsors } from "../constants";
import { cn } from "../lib/utils";
import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

/* -------------------- SPONSORS SECTION -------------------- */

const Sponsors = () => {
  const logoClassMap = {
    cloudhedge: "p-1 scale-[1.28]",
    fold_health: "p-2 scale-[1.08]",
    gfg: "p-2 scale-[1.06]",
    josh: "p-3",
    agribid: "p-3",
    intangles: "p-2",
    imocha: "p-3",
    eq: "p-3",
    zetakode: "p-3",
  };

  return (
    <section className="w-full flex flex-col items-center pt-4 pb-24 relative overflow-hidden">
      {/* <h2 className={`${styles.sectionHeadText} text-center`}>Our Sponsors.</h2> */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />
      <div className="flex flex-col w-full items-center gap-14 sm:py-16 py-8">
        {Object.keys(sponsors).map((key) => {
          const heading =
            key === "association"
              ? "In Association With"
              : key === "co"
                ? "Co-sponsors"
                : key + (sponsors[key].length > 1 ? " sponsors" : " sponsor");

          return (
            <div key={key} className="flex flex-col gap-8 items-center w-full px-4">
              <h3 className="text-center text-3xl font-bold capitalize pb-2 border-b-2 border-orange-200">
                {heading}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-10 max-w-6xl w-full">
                {sponsors[key].map((s) => (
                  <SponsorCard key={s.name} width={300} height={120}>
                    <SponsorLogo
                      src={s.src}
                      alt={s.name}
                      className={cn(
                        "w-full h-full object-contain select-none transition-transform duration-300",
                        logoClassMap[s.name] ?? "p-3"
                      )}
                    />
                  </SponsorCard>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;

const getDriveFileId = (url) => {
  if (!url) return null;
  const fromPath = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (fromPath?.[1]) return fromPath[1];
  const fromQuery = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (fromQuery?.[1]) return fromQuery[1];
  return null;
};

const buildDriveCandidates = (src) => {
  const fileId = getDriveFileId(src);
  if (!fileId) return [src];
  return [
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`,
    `https://drive.google.com/uc?export=view&id=${fileId}`,
    `https://drive.google.com/uc?export=download&id=${fileId}`,
  ];
};

const SponsorLogo = ({ src, alt, className }) => {
  const candidates = buildDriveCandidates(src);
  const [idx, setIdx] = useState(0);

  return (
    <img
      loading="lazy"
      src={candidates[idx]}
      alt={alt}
      referrerPolicy="no-referrer"
      decoding="async"
      className={className}
      onError={() => {
        if (idx < candidates.length - 1) setIdx((prev) => prev + 1);
      }}
    />
  );
};

/* -------------------- SPONSOR CARD -------------------- */

const SponsorCard = ({ children, width, height }) => {
  return (
    <CardContainer
      containerClassName="bg-gradient-to-br from-[#173B78] via-[#5F9DF7] to-[#E89A35] rounded-xl"
    >
      <CardBody
        className="relative group/card shadow-xl shadow-orange-200/40 bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-xl"
        style={{ width, height }}
      >
        <CardItem
          translateZ={50}
          className="w-full h-full group-hover/card:shadow-2xl group-hover/card:shadow-blue-300/50 rounded-xl flex items-center justify-center"
        >
          {children}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

/* -------------------- TILT 3D ENGINE -------------------- */

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18;
    const y = (e.clientY - top - height / 2) / 18;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "p-0 flex items-center justify-center rounded-xl",
          containerClassName
        )}
        style={{ perspective: "1200px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center transition-all duration-300 ease-linear rounded-xl",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

/* -------------------- CARD BODY -------------------- */

export const CardBody = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={cn(
        "rounded-xl [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

/* -------------------- CARD ITEM -------------------- */

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;

    if (isMouseEntered) {
      ref.current.style.transform = `
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `;
    } else {
      ref.current.style.transform =
        "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    }
  }, [isMouseEntered]);

  return (
    <Tag
      ref={ref}
      className={cn("transition-all duration-300 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/* -------------------- CONTEXT HOOK -------------------- */

export const useMouseEnter = () => {
  const ctx = useContext(MouseEnterContext);
  if (!ctx)
    throw new Error("useMouseEnter must be used inside MouseEnterContext");
  return ctx;
};
