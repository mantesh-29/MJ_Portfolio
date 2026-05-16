import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

interface Experience {
  id: number;
  role: string;
  company: string;
  type: "Internship" | "Job";
  duration: string;
  accent: string;
  // preview: string;
  details: {
    period: string;
    location: string;
    builtProject: {
      projectTitle: string;
      projectDescription: string;
      projectUrl: string;
    }
    description: string;
    skills: string[];
  };
}
  const experience: Experience[] = [
    {
      id: 1,
      role: "IT Intern",
      company: "Hindalco Industries Ltd.",
      type: "Internship",
      duration: "2 months",
      accent: "#8B5CF6",
      // preview:
      //   "Built an Inventory Management System for enterprise inventory tracking.",
      details: {
        period: "May 2024 - July 2024",
        location: "Renukoot, Sonbhadra, U.P.",
        builtProject: {
          projectTitle: "E-Track",
          projectUrl: "#Projects",
          projectDescription: "Built an Inventory Management System for enterprise inventory tracking. ",
        },
        description:
          "Worked in the IT Department of Hindalco Industries, Aditya Birla Group. Gained hands-on experience with enterprise workflows and built an Inventory Management System to efficiently track and manage inventory products.",
        skills: ["HTML", "CSS", "JavaScript"],
      },
    },
   
  ];


  // function ProjectInfo({info}:{info: Experience}){
  //   return(
  //     <motion.div>
  //       <div>{info}</div>
  //     </motion.div>
  //   );
  // }

  function ExperienceCard({exp, index}:{exp: Experience; index: number}){
    const [expanded, setExpanded] = useState(false);
return (
  <motion.div
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative grid grid-cols-[72px_1fr] group"
  >
    {/* Timeline  */}
    <div className="flex flex-col items-center relative ">
      <motion.div
        animate={{
          borderColor: expanded ? `${exp.accent}` : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.3 }}
        className="h-11 w-11 bg-[#111111] rounded-full border backdrop-blur-md relative z-10 items-center justify-center flex"
        style={{
          boxShadow: expanded ? `0  0 25px ${exp.accent}` : "none",
        }}
      >
        <span
          className="text-xs font-bold tracking-widest "
          style={{ color: exp.accent }}
        >
          {String(exp.id).padStart(2, "0")}
        </span>
      </motion.div>

      {/* line  */}
      {index !== experience.length && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-2 w-px flex-1 origin-top bg-gradient-to-b from-violet-500/50 to-transparent"
        />
      )}
    </div>

    {/* Main Card  */}
    <motion.div
      whileHover={{ y: -4 }}
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      onClick={() => setExpanded((prev) => !prev)}
      animate={{
        borderColor: expanded ? `${exp.accent}60` : "rgba(255,255,255,0.07)",
        // y: expanded ? -4 : 0,
      }}
      transition={{ duration: 0.35 }}
      className="relative border bg-gradient-to-br from-white/[0.03] to-white/[0.01] overflow-hidden backdrop-blur-xl cursor-pointer mb-16  rounded-3xl border-white/[0.8]"
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.45 }}
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
            style={{ background: `${exp.accent}30` }}
          />
        )}
      </AnimatePresence>

      {/* Card Header  */}
      <div className="p-6 md:p-7 z-10 relative">
        <div className="mb-4 flex justify-between gap-4 items-start flex-wrap">
          <div>
            <div className="mb-2 flex flex-wrap gap-2 items-center">
              <span
                className=" font-semibold border px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em]"
                style={{
                  color: exp.accent,
                  borderColor: `${exp.accent}40`,
                  background: `${exp.accent}15`,
                }}
              >
                {exp.type}
              </span>
              <span className="text-white/30 text-[11px]">{exp.duration}</span>
            </div>
            <h3 className="text-white text-2xl font-serif tracking-tight">
              {exp.role}
            </h3>
            <p className="text-white/45 mt-1 text-sm ">{exp.company}</p>
            {/* <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
              {exp.preview}
            </p> */}
          </div>

          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center  bg-white/5 rounded-full h-10 w-10 border border-white/10 "
          >
            <span className="text-lg text-white/50 ">+</span>
          </motion.div>
        </div>
      </div>

      {/* Expanded Content  */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.06] mx-6 " />

            <div className="p-6 grid md:grid-cols-2 gap-6 md:p-7 ">
              <div>
                <p className="text-white/25 font-semibold uppercase tracking-[0.22em] text-[10px] mb-2">
                  Period
                </p>
                <p className="text-sm text-white/70 ">{exp.details.period}</p>
              </div>

              <div>
                <p className="text-white/25 mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] ">
                  Location
                </p>
                <p className="text-white/70 texs-sm">{exp.details.location}</p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-2 text-white/25 text-[10px] uppercase font-semibold tracking-[0.22em] ">
                  Built Project
                </p>
                {/* <ProjectInfo project={exp.details.builtProject} /> */}
                <div className="border inline-flex items-center px-4 py-2 text-sm font-medium rounded-full"  style={{color:exp.accent, borderColor: `${exp.accent}40`, background: `${exp.accent}15`}}>
                <a href={`${exp.details.builtProject.projectUrl}`}> <p> ✦ {exp.details.builtProject.projectTitle}</p> </a>
                </div>
                  <motion.div><p className="mt-2 pl-2 text-white/55 text-[13px] leading-relaxed max-w-2xl">{exp.details.builtProject.projectDescription}{" "} <span>( Click on Project title to check project )</span></p></motion.div>
              </div>

              <div className="md:col-span-2">
                <p className="text-white/25 uppercase text-[10px] font-semibold tracking-[0.22em]">
                  About
                </p>
                <p className="text-white/65 text-[15px] leading-relaxed  max-w-2xl ">
                  {exp.details.description}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-white/25 uppercase text-[10px] font-semibold tracking-[0.22em] mb-3">
                  Skills Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.details.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-white/45 border border-white/10 bg-white/[0.04] px-3 py-1 rounded-md text-[12px] font-medium transition-all duration-300 hover:border-violet-500/30 hover:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )} 
      </AnimatePresence>
    </motion.div>
  </motion.div>
);
  }


export default function Experience() {
  return (
    <section
      id="Experience"
      className="relative min-h-screen bg-[#080808] px-6 py-28 md:px-12 lg:px-24 xl:px-36 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "65px 65px",
        }}
      />
      {/* Background Glow */}
      <div className="h-[500px] w-[500px] absolute bg-violet-500/10 blur-[140px] -translate-x-1/2 left-1/2 rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        {/* Header of Section  */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14"
        >
          <h2 className="font-serif text-white text-5xl font-normal leading-[1.05] tracking-tight md:text-6xl mb-4 ">
            Experience{" "}
            <span className="bg-violet-500 bg-clip-text text-transparent">
              & Internships.
            </span>{" "}
          </h2>
          <p className="text-white/25 uppercase tracking-[0.25em] font-bold mb-4 text-[11px]">
            Work History
          </p>
        </motion.div>

        <div>
          {experience.map((exp, index) => (
            <ExperienceCard exp={exp} index={index} key={exp.id} />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm text-white/25"
        >
          More coming soon.
        </motion.p>
      </div>
    </section>
  ); 
}
