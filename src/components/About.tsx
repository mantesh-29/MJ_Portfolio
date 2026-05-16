import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Next.js", level: 85 },
  { name: "PostgreSQL", level: 72 },
];

const stats = [
  { value: "10+", label: "Projects built" },
  { value: "5+", label: "Tech stacks learned" },
  { value: "∞", label: "Eagerness to learn" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0f] py-28 px-6 overflow-hidden"
    >
      {/* Background grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-violet-400/60" />
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">
            About me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* ── Left column ── */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-5xl xl:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-8"
              style={{ fontFamily: "'Sora', 'Helvetica Neue', sans-serif" }}
            >
              Fresh graduate,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                real skills,
              </span>{" "}
              big ambitions.
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[#a0a0b8] text-lg leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I'm a fresher developer passionate about building clean,
              performant web experiences. I've spent the last couple of years
              learning by doing — shipping real projects, not just following
              tutorials.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[#6e6e88] text-base leading-relaxed mb-12"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I'm actively looking for my first full-time role where I can
              contribute, grow fast, and work alongside people who care about
              their craft. I pick up new tools quickly and bring genuine
              curiosity to every problem I tackle.
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-6 mb-12"
            >
              {stats.map((s) => (
                <div key={s.label} className="group">
                  <div
                    className="text-4xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors duration-300"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-[#6e6e88] uppercase tracking-wide leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25 hover:-translate-y-0.5"
              >
                Get in touch
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[#a0a0b8] hover:text-white hover:border-white/25 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                View my projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-10">
            {/* Avatar card */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.03] p-1">
                {/* Placeholder avatar — replace with your actual <img> */}
                <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden relative">
                  {/* Decorative grid */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                  {/* Replace this div with your actual image */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-4xl font-bold text-white"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      YN
                    </div>
                    <span className="text-[#6e6e88] text-sm">
                      Your photo here
                    </span>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#0a0a0f]/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-[#a0a0b8]">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative corner dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full border-2 border-violet-500/50 bg-[#0a0a0f]" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-indigo-500/30" />
            </motion.div>

            {/* Skills */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
            >
              <h3
                className="text-white text-sm font-medium mb-5 tracking-wide"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Tech stack
              </h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  index,
  isInView,
}: {
  skill: { name: string; level: number };
  index: number;
  isInView: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span
          className="text-[#a0a0b8] text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {skill.name}
        </span>
        <span className="text-[#6e6e88] text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: 0.4 + index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}
