import { AnimatePresence, motion} from "framer-motion";
// import { title } from "framer-motion/client";/
import { useState } from "react";

interface Qualification{
  id: number;
  title: string;
  institution: string;
  duration: string;
  type: "education" | "certification";
  icon: string;
  details:{
    grade?:string;
    description:string;
    skills: string[];
    issuer: string;

  };
}

const qualifications: Qualification[] = [
  {
    id: 1,
    title: "Java Full Stack",
    institution: "Naresh I Technologies",
    duration: "July-2025 - July-2026",
    type: "education",
    icon: "💻",
    details: {
      grade: "",
      description: "Java Full Stack Training",
      skills: ["Java", "React", "Spring", "SQL", "HTML", "CSS", " JavaScript"],
      issuer: "Naresh I Technologies",
    },
  },
  {
    id: 2,
    title: "Bachelor of Computer Applications",
    institution: "ABRPG College - MGKVP University, Varanasi",
    duration: "August-2022 - October-2025",
    type: "education",
    icon: "🎓",
    details: {
      grade: "1st Grade",
      description: "Graduation Course",
      skills: ["Java", "C", "C++", "MySQL"],
      issuer: "MGKVP University, Varanasi",
    },
  },
  {
    id: 3,
    title: "Intermediate",
    institution: "Govt Inter College Pipri Sonbhadra",
    duration: "June-2022",
    type: "education",
    icon: "🎓",
    details: {
      grade: "1st Grade",
      description: "Intermediate with Science Stream.",
      skills: ["Mathematics", "Chemistry", "Physics"],
      issuer: "UP Board",
    },
  },
  {
    id: 4,
    title: "High School",
    institution: "Govt Inter College Pipri Sonbhadra",
    duration: "June-2020",
    type: "education",
    icon: "",
    details: {
      grade: "1st Grade",
      description: "",
      skills: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Computer",
        "Social Science",
      ],
      issuer: "UP Board",
    },
  },
  {
    id: 5,
    title: "Basic Course on Computer Concepts (BCC)",
    institution: "Shanvi Shiksha Samiti, Renukoot (U.P.)",
    duration: "October-2019 - December-2019",
    type: "certification",
    icon: "",
    details: {
      grade: "A",
      description: "Basic Computer Knowledge",
      skills: ["MS Word", "MS Excel", "MS Powerpoint", "Internet Surfing"],
      issuer: "Shanvi Shiksha Samiti",
    },
  },
];



const detailVariants = {
  hidden: {opacity: 0, y: 8, scale: 0.97},
  visible: {
    opacity: 1, y: 0 , scale: 1,
    transitioon: {duration: 0.25, ease: "easeOut"},
  },
  exit: {
    opacity: 0, y: 4,
    scale: 0.98,
    transition: {duration: 0.15},
  },
};

const mobileCardVariants ={
  hidden: {opacity: 0, x: -40},
  visible : {opacity: 1, x: 0, 
    transition: {duration: 0.5, ease: [0.22,1,0.36,1]},
  },

};

const desktopCardVariants = {
  hidden: (side: "left" | "right") =>  ({ opacity: 0, x: side === "left"? -60 : 60,}),
  visible: {
    opacity: 1,
    x:0,
    transition: {duration: 0.5, ease:[0.22, 1, 0.36, 1]},
  },
};

function DetailPanel({q}:{q: Qualification}){
  return(
    <motion.div 
    variants={detailVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="border-t border-white/80 mt-4 pt-4 ">

      {q.details.grade && <p className="text-indigo-300 text-xs font-semibold mb-2 ">Grade: {q.details.grade}</p>}

      {q.details.description && <p className="text-xs text-white/60 leading-relaxed mb-3">{q.details.description}</p>}

      <div className="flex flex-wrap gap-1.5">
        {q.details.skills.map((skill) =>(

          <span className="text-white/70 border border-white/10 px-2 py-0.5 rounded-md bg-white/[0.08] text-[10px] " key={skill}>{skill}</span>
        ))}
      </div>

    </motion.div>
  );
}

function CardContent({q, isActive}:{q: Qualification; isActive: boolean}){
return(
  <>
  <span className={`text-[10px] inline-block tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full mb-3  ${q.type==="education"? " bg-indigo-500/15 text-indigo-300": "bg-violet-500/15 text-violet-300"}`}>
    {q.type ==="education"? "Education": "Certification"}
    </span>

    <h3 className="text-white text-base sm:text-lg leading-snug font-semibold mb-1">{q.title}</h3>

    <p className="text-violet-300/80 text-sm font-medium mb-1 ">{q.institution}</p>
    <p className="text-white/30 text-xs ">{q.duration}</p>
    <AnimatePresence>{isActive && <DetailPanel q={q} />}</AnimatePresence>
  </>
);
}


function TimelineDot({active}: {active: boolean; icon: string}){
  return (
    <motion.div
      animate={
        active
          ? { scale: 1.35, boxShadow: "0 0 16px 4px rgba(139,92,246,0.5)" }
          : { scale: 1, boxShadow: "0 0 0px 0px rgba(139,92,246,0)" }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-10 h-10 rounded-full bg-[#0a0a0f] border-2 border-violet-500/60 flex items-center justify-center text-base shrink-0"
    ></motion.div>
  );}

export default function Qualifications(){

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tappedId, setTappedId] = useState<number | null>(null);
  const isActive = (id: number) => hoveredId ===id || tappedId === id;
  const handleTap=(id: number) => setTappedId((prev) => (prev === id ? null : id));
  return (
    <section
      id="Qualifications"
      className="relative py-16 sm:py-20 px-4 bg-[#0a0a0f]  sm:px-6 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[280px] sm:w-[500px] md:w-[600px] h-[280px] sm:h-[500px] md:h-[600px] rounded-full bg-violet-900/10 blur-[80px] sm:blur-[120px]" />
        <div className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-[200px] sm:w-[350px] md:w-[400px] h-[200px] sm:h-[350px] md:h-[400px] rounded-full bg-indigo-900/10 blur-[60px] sm:blur-[100px]" />
      </div>

      <motion.div
        className="text-center mb-12 relative z-10 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-violet-400 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 font-medium ">
          My Jouurney
        </p>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Qualifications
        </h2>

        <div className=" mt-4 mx-auto w-16 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500/10 rounded-full" />
      </motion.div>

      {/* Mobile display  */}
      <div className="relative max-w-sm mx-auto z-10 md:hidden">
        <div className="absolute left-5 top-0 bottom-0  w-px bg-linear-to-b from-transparent via-violet-500 to-transparent" />

        <div className="flex flex-col gap-8">
          {qualifications.map((q) => {
            const active = isActive(q.id);
            return (
              <motion.div
                key={q.id}
                initial="hidden"
                whileInView="visible"
                variants={mobileCardVariants}
                viewport={{ once: true, margin: "-60px" }}
                className="relative flex items-start gap-3"
              >
                <div className=" relative z-10 mt-1">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#0a0a0f] border-2 border-violet-500/60 flex items-center justify-center text-base "
                    animate={
                      active
                        ? {
                            scale: 1.3,
                            boxShadow: "0 0 14px 3px rgba(139,92,246,0.5",
                          }
                        : {
                            scale: 1,
                            boxShadow: "0 0 0px 0px rgba(139,92,246,0",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {q.icon}
                  </motion.div>
                </div>

                <motion.div
                  className={`flex-1 min-w-0 cursor-pointer rounded-2xl border p-4 transition-colors duration-300 ${active ? "border-violet-500/60 bg-violet-950/40 " : "border-white/8 bg-white/4"}`}
                  style={{ backdropFilter: "blur(12px)" }}
                  onHoverStart={() => setHoveredId(q.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleTap(q.id)}
                  whileTap={{ scale: 0.98 }}
                >
                  <CardContent q={q} isActive={active} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div className="absolute left-5 -translate-x-1/2 -bottom-4 w-2 h-2 bg-violet-500/40 rounded-full" />
      </div>

      {/* Tablet Section  */}
      <div className="relative max-w-2xl mx-auto z-10 hidden md:block lg:hidden">
        {/* dot  */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-violet-500/40" />
        {/* line  */}
        <div className="absolute  left-1/2 w-px bg-linear-to-b from-transparent via-violet-500/90 to-transparent top-0 bottom-0 -translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {qualifications.map((q, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            const active = isActive(q.id);

            return (
              <motion.div
                key={q.id}
                custom={side}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
                variants={desktopCardVariants}
                className={`relative flex items-center ${side === "left" ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-[calc(50%-2rem)]">
                  <motion.div
                    onHoverStart={() => setHoveredId(q.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    onClick={() => handleTap(q.id)}
                    whileHover={{ scale: 0.99 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`relative cursor-pointer rounded-2xl border p-4 transition-colors duration-300 ${
                      active
                        ? "border-violet-500/60 bg-violet-950/40"
                        : "border-white/8 bg-white/4"
                    }`}
                    style={{ backdropFilter: "blur(12px)" }}
                  >
                    <CardContent q={q} isActive={active} />

                    <div
                      className={`absolute top-1/2 w-8 h-[1px] bg-linear-to-r ${side === "left" ? "right-0 translate-x-full from-violet-500/50 to-transparent" : "left-0 -translate-x-full from-transparent to-violet-500/50"}`}
                    />
                  </motion.div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 z-10 ">
                  <motion.div
                    animate={
                      active
                        ? {
                            scale: 1.35,
                            boxShadow: "0 0 16px 4px rgba(139,92,246,0.5",
                          }
                        : {
                            scale: 1,
                            boxShadow: "0 0 0px rgba(139, 92, 246, 0",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-10 h-10 bg-[#0a0a0f] border-2 border-violet-500/60 flex items-center justify-center text-base rounded-full "
                  >
                    {q.icon}
                  </motion.div>
                </div>
                <div className="w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-2 h-2 rounded-full bg-violet-500/40" />
      </div>

      {/* Desktop Section  */}

      <div className="relative max-w-5xl mx-auto z-10 hidden lg:block">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-violet-500/40 to-transparent" />

        <div className="flex flex-col gap-14 xl:gap-16">
          {qualifications.map((q, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            const active = isActive(q.id);

            return (
              <motion.div
                key={q.id}
                custom={side}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={desktopCardVariants}
                className={`relative flex items-center ${
                  side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-[calc(50%-2.5rem)] xl:w-[calc(50%-3rem)]">
                  <motion.div
                    onHoverStart={() => setHoveredId(q.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    onClick={() => handleTap(q.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`relative cursor-pointer rounded-2xl border p-5 transition-colors duration-300 ${
                      active
                        ? "border-violet-500/60 bg-violet-950/40"
                        : "border-white/[0.08] bg-white/[0.04]"
                    }`}
                    style={{ backdropFilter: "blur(12px)" }}
                  >
                    <CardContent q={q} isActive={active} />
                    {/* Connector */}
                    <div
                      className={`absolute top-1/2 w-10 h-[1px] bg-gradient-to-r ${
                        side === "left"
                          ? "right-0 translate-x-full from-violet-500/50 to-transparent"
                          : "left-0 -translate-x-full from-transparent to-violet-500/50"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Centre dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    animate={
                      active
                        ? {
                            scale: 1.4,
                            boxShadow: "0 0 16px 4px rgba(139,92,246,0.5)",
                          }
                        : {
                            scale: 1,
                            boxShadow: "0 0 0px 0px rgba(139,92,246,0)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-10 h-10 rounded-full bg-[#0a0a0f] border-2 border-violet-500/60 flex items-center justify-center text-base"
                  >
                   <img src={`${q.icon}`} alt=""/>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-[calc(50%-2.5rem)] xl:w-[calc(50%-3rem)]" />
              </motion.div>
            );
          })}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-2 h-2 rounded-full bg-violet-500/40" />
      </div>

      {/* Tap hint — mobile only */}
      <p className="md:hidden text-center text-white/20 text-xs mt-10 tracking-wide">
        tap a card to expand
      </p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
      `}</style>
    </section>
  );
}


