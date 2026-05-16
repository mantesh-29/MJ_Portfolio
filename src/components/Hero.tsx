import { easeOut, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const avatarVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.5 } },
};

export default function Hero() {
  return (
    <motion.section id="Hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-[#080c1a] px-6 py-20
                 sm:px-10
                 md:flex-row md:items-center md:justify-between md:px-16 md:py-24
                 lg:px-24"
      style={{
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 animate-pulse rounded-full bg-indigo-600/10 blur-3xl sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-60 w-60 animate-pulse rounded-full bg-indigo-800/10 blur-3xl delay-1000 sm:h-80 sm:w-80" />

      {/* ── Avatar (top on mobile, right on desktop) ── */}
      <motion.div
        variants={avatarVariants}
        className="relative z-10 order-first shrink-0 md:order-last"
      >
        <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-[300px] lg:w-[300px]">
          {/* Rotating gradient ring */}
          <div className="absolute inset-[-3px] animate-spin rounded-full bg-[conic-gradient(#6366f1,#818cf8,#4f46e5,#6366f1)] [animation-duration:4s]" />
          {/* Inner circle */}
          <div className="absolute inset-1 overflow-hidden rounded-full bg-gradient-to-br from-indigo-950 to-[#0d1535]">
            <img
              src="#"
              alt="Mantesh Jaiswal"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-6xl font-extrabold text-indigo-500/40 sm:text-7xl lg:text-[5rem]">
              MJ
            </span>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute -bottom-3 -right-3 border-2 border-indigo-950 bg-[#0d1535] px-3 py-1.5 font-mono text-[10px] tracking-widest text-indigo-400 sm:px-4 sm:py-2 sm:text-xs [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
          <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          Open to Work
        </div>
      </motion.div>

      {/* ── Left content ── */}
      <div className="z-10 flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-indigo-400"
        >
          <span className="hidden h-px w-6 bg-indigo-400 md:inline-block" />
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-2 font-sans text-5xl font-extrabold leading-tight tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            Mantesh
          </span>
          <br />
          Jaiswal
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className="mb-5 font-mono text-sm font-normal tracking-wide text-slate-400 sm:text-base after:animate-[blink_1s_step-end_infinite] after:text-indigo-400 after:content-['|']"
        >
          Java Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-md border-l-0 font-mono text-sm leading-relaxed text-slate-500 md:border-l-2 md:border-indigo-950 md:pl-5"
        >
          I build scalable web applications using React and Java, focusing on
          clean design and real-world functionality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
        >
          <a
            href="#"
            className="group relative overflow-hidden bg-indigo-500 px-7 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] sm:py-3"
         >
            <span className="relative z-10">View Resume</span>
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </a>

          <a
            href="#"
            className="border-2 border-indigo-900 px-7 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-widest text-indigo-400 transition-all duration-200 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white sm:py-3"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Social / tech pills — bonus touch */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start"
        >
          {["React", "Java", "Spring Boot", "SQL"].map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-indigo-900/60 bg-indigo-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-indigo-400/70"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}