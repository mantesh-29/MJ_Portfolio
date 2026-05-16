import {motion} from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.08}},
};

const cardVariants = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}},
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type Skill ={
  lang: string;
  abbr: string;
  description: string;
  iconBg: string;
  iconText: string;
};

const frontendSkills: Skill[] = [
  {
    lang: "HTML",
    abbr: "HTML",
    description: "HTML5 · Semantic tags · iframes",
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-400",
  },
  {
    lang: "CSS",
    abbr: "CSS",
    description: "CSS3 · Animations · Flex & Grid",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
  },
  {
    lang: "JavaScript",
    abbr: "JS",
    description: "ES2024 · DOM · Async",
    iconBg: "bg-yellow-400/10",
    iconText: "text-yellow-400",
  },
  {
    lang: "TypeScript",
    abbr: "TS",
    description: "Strict types · Interfaces",
    iconBg: "bg-sky-500/10",
    iconText: "text-sky-400",
  },
  {
    lang: "React",
    abbr: "⚛",
    description: "Hooks · Framer Motion",
    iconBg: "bg-cyan-400/10",
    iconText: "text-cyan-300",
  },
];

const backendSkills: Skill[] = [
  {
    lang: "Java",
    abbr: "JV",
    description: "Java 25 · OOP · Collections",
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-300",
  },
  {
    lang: "C",
    abbr: "C",
    description: "Systems · Pointers · Memory",
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-300",
  },
];

const databases: Skill[] = [
  {
    lang: "SQL",
    abbr: "SQL",
    description: "Oracle SQLPlus 21c · Queries",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-400",
  },
];

function Skillcard({skill}: {skill: Skill}){
  return (
    <motion.div variants={cardVariants}
    className="group bg-white/[0.03] border border-indigo-500/15 rounded-2xl p-5 overflow-hidden relative transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/[0.07] "
    >
      <div className="absolute  h-px top-0 inset-x-0 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 group-hover:opacity-100"/>
      <div className={`w-9 h-9 rounded-lg flex items-center mb-3 font-mono font-bold text-[11px] tracking-wide ${skill.iconBg} ${skill.iconText}`}>{skill.abbr}</div>
      <p className="text-[15px] font-bold text-indigo-100 mb-1 ">{skill.lang}</p>
      <p className="font-mono text-[11px] text-indigo-300/70 leading-relaxed">{skill.description}</p>
    </motion.div>
  );
}

function CategoryBlock({ label, skills }: {label:string; skills: Skill[]}){
  return (
    <div className="mb-10 ">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-indigo-400/60 uppercase font-mono tracking-[0.22em] text-[11px]">{label}</span>
        <div className="flex-1 h-px bg-indigo-500/10"/>
      </div>
      <motion.div
      className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]"
      // style={{  gridTemplateColumns: "repeat(auto-fill, minmax(160px,1fr))"}}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-60px"}}
      >
        {skills.map((s) =>(
          <Skillcard key={s.lang} skill = {s} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills(){

  return (
    <section
      id="Skills"
      className="min-h-screen py-24 px-10  bg-[#0c021f]"
      style={{
        backgroundImage: `
      linear-gradient( rgba(99,102,241,0.06) 1px, transparent 1px ),
      linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
      `,
        backgroundSize: "60px 60px",
      }}
    >
      <motion.div
        className="flex items-center gap-4 mb-2"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-white text-5xl font-extrabold tracking-tight ">
          Skills
        </h2>
        <div className="h-[3px] flex-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
      </motion.div>

      <p className="font-mono text-indigo-400 text-xs tracking-[0.2em] uppercase mb-12 flex items-center gap-2">
        <span className="w-[6px] h-[6px] bg-indigo-400 rounded-full animate-pulse inline-block" />
        Tech stack
      </p>
      <CategoryBlock label="Frontend" skills={frontendSkills} />
      <CategoryBlock label="Backend" skills={backendSkills} />
      <CategoryBlock label="Databases" skills={databases} />
      <div className="mt-12 font-mono pt-6 border-t border-indigo-500/50  text-indigo-500/30 flex items-center gap-2">
        <span className="bg-indigo-500/50 w-[6px] h-[6px] rounded-full animate-pulse inline-block" /> always learning <span className="h-[5px] w-[5px] bg-indigo-500/40 rounded-full"/> always building
      </div>
    </section>
  );

}
