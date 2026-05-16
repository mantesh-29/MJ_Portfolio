import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    handle: "@yourhandle",
    href: "https://github.com/yourhandle",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Your Name",
    href: "https://linkedin.com/in/yourprofile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    handle: "@yourhandle",
    href: "https://twitter.com/yourhandle",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "you@email.com",
    href: "mailto:you@email.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: "ease" },
  }),
};

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your actual form submission logic (e.g. EmailJS, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0f] py-28 px-6 overflow-hidden flex items-center"
    >
      {/* Background grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[110px]" />

      {/* Decorative dots grid top-left */}
      <div className="pointer-events-none absolute top-20 left-10 opacity-10">
        {Array.from({ length: 5 }).map((_, row) => (
          <div key={row} className="flex gap-4 mb-4">
            {Array.from({ length: 5 }).map((_, col) => (
              <div key={col} className="w-1 h-1 rounded-full bg-violet-400" />
            ))}
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
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
            Contact
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-5xl xl:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-4 max-w-2xl"
          style={{ fontFamily: "'Sora', 'Helvetica Neue', sans-serif" }}
        >
          Let's start a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            conversation.
          </span>
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#6e6e88] text-base mb-16 max-w-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          I'm actively looking for my first opportunity. Whether it's a
          full-time role, internship, or just a chat — my inbox is always open.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
          {/* ── Contact form (3 cols) ── */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p
                      className="text-white text-xl font-medium"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      Message sent!
                    </p>
                    <p className="text-[#6e6e88] text-sm max-w-xs">
                      Thanks for reaching out. I'll get back to you as soon as I
                      can.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", message: "" });
                      }}
                      className="mt-2 text-violet-400 text-sm hover:text-violet-300 transition-colors underline underline-offset-4"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <TextareaField
                      label="Message"
                      name="message"
                      placeholder="Tell me about the opportunity, project, or just say hi..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/20 group"
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            className="animate-spin"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 12a9 9 0 11-6.219-8.56" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <svg
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ── Right sidebar (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Availability card */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">
                  Available for opportunities
                </span>
              </div>
              <p className="text-[#6e6e88] text-sm leading-relaxed">
                Open to full-time roles, internships, and freelance projects.
                Based in <span className="text-[#a0a0b8]">India</span> — open to
                remote worldwide.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Full-time", "Internship", "Remote"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs border border-violet-500/20 text-violet-400 bg-violet-500/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
            >
              <p className="text-[#6e6e88] text-xs uppercase tracking-widest mb-4 font-mono">
                Find me on
              </p>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#6e6e88] group-hover:text-violet-400 transition-colors duration-200">
                        {s.icon}
                      </span>
                      <div>
                        <p
                          className="text-[#a0a0b8] text-sm group-hover:text-white transition-colors duration-200"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {s.label}
                        </p>
                        <p className="text-[#4e4e68] text-xs font-mono">
                          {s.handle}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="text-[#4e4e68] group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
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
                ))}
              </div>
            </motion.div>

            {/* Response time note */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-start gap-3 px-4 py-3 rounded-xl border border-white/[0.05] bg-white/[0.01]"
            >
              <svg
                className="mt-0.5 shrink-0 text-violet-400/60"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-[#4e4e68] text-xs leading-relaxed">
                I typically respond within{" "}
                <span className="text-[#6e6e88]">24–48 hours</span>. For urgent
                matters, LinkedIn DMs are fastest.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sub-components ──

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#6e6e88] text-xs font-mono tracking-wide uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-[#3e3e58] outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all duration-200"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      />
    </div>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#6e6e88] text-xs font-mono tracking-wide uppercase">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-[#3e3e58] outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all duration-200 resize-none"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      />
    </div>
  );
}
