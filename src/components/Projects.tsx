import {motion} from "framer-motion";
const projects = [
  {
    title: "PrepStryk",
    logo: "#",
    description: "Plan designer for preparation of exams",
    tag: "React Native",
  },
  {
    title: "CodeNotes",
    logo: "#",
    description: "Different Programming Notes",
    tag: "React",
  },
  {
    title: "PrepStryk",
    logo: "#",
    description: "Plan designner for preparation of exams",
    tag: "React Native",
  },
  {
    title: "CodeNotes",
    logo: "#",
    description: "Different Programming Notes",
    tag: "Java",
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15,},
  },
};

const cardVarients = {
  hidden: {opacity: 0, y: 40},
  visible:{
    opacity: 1, y: 0,
    transition: {duration: 0.5, ease: "easeOut"},
  },
};

const headingVariants = {
  hidden: {opacity: 0, x: -30},
  visible: {
    opacity: 1, x: 0,
    transition: {duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects(){
  return (
    <section id="Projects"
      className="min-h-screen bg-[#0a0a0f] py-24 px-6"
      style={{
        backgroundImage: `
      linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px),
       linear-gradient(180deg, rgba(99,102,241,0.06) 1px, transparent 1px )
      `,
        backgroundSize: "50px 50px",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        >
          {/* <p className="text-indigo-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3"></p> */}

          <h2 className="text-5xl font-extrabold text-white leading-tight"> My {""} <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span></h2>
        </motion.div>

      <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      >
        {projects.map((project,i)=>(
          <motion.div
          key={i}
          variants={cardVarients}
          whileHover={{y: -8, scale: 1.02, boxShadow: "0 30px 60px rgba(99,102,241,0.25",}}
          whileTap={{scale: 0.7}}
          className="relative bg-gradient-to-br from-[#13131f] to-[#1a1a2e] border border-white/5 rounded-2xl p-6 flex flex-col gap-5 cursor-pointer overflow-hidden group"
          >
            <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none"
            initial={{opacity: 0}}
            whileHover={{opacity: 1}}
            transition={{duration: 0.3}}
            />
            <div className="w-12 h-12 rounded-xl bg-[#e1e3a] border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
            <img src={project.logo} alt="logo" 
            className="w-6 h-6 object-contain" onError={(e) =>{
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
            />
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M616l-4-4 4-4"
              />
            </svg>
            </div>


            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <span className="bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-xs font-medium px-2 py-0.5 rounded-full">{project.tag}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.desciption}</p>
            </div>

            <motion.button
            whileHover={{scale: 1.04}}
            whileTap={{scale: 0.96}}
            className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold font-mono rounded-xl px-5 py-2.5 flex items-center justify-center gap-2 hover:shadow-[0_8px_24px_rgba(99,102,241,0.45)] transition-shadow duration-200"
            >
              View Project
            <motion.svg 
            className="w-4 h-4" fill="none" viewBox="0 0 24 24 " 
            stroke="currentColor"
            initial={{x:0}}
            whileHover={{x:4}}
            transition={{type: "spring",stiffness: 300}}
            >
              <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
            </motion.button>

          </motion.div>
        ))}
      </motion.div>

      </div>
     
      
    </section>
  );
}
