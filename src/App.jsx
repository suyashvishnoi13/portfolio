import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Globe,
  Database,
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
  Server,
  Smartphone,
  Sparkles,
  Monitor,
  GitBranch,
  BriefcaseBusiness,
} from "lucide-react";
import "./styles.css";

const PROFILE = {
  name: "Suyash Vishnoi",
  github: "https://github.com/suyashvishnoi13",
  linkedin: "https://www.linkedin.com/in/suyash-vishnoi-a98179343/",
  email: "suyash.vishnoi13@gmail.com",
  resume:
    "https://drive.google.com/file/d/1Zlf7kgNYr0CxvSaVE1Z4dFoyZ0D-vw7u/view?usp=sharing",
};

/* =========================================
   NEW 3D SPHERICAL ANIMATION
   One sphere + triangular wireframe + two rings
   No stars or particle systems
========================================= */


function AnimatedOrb() {
  const coreRef = useRef(null);
  const wireframeRef = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const dt = Math.min(delta, 0.05);

    if (coreRef.current) {
      coreRef.current.rotation.y += dt * 0.12;
      coreRef.current.rotation.x = Math.sin(t * 0.3) * 0.07;

      const pulse = 1 + Math.sin(t * 1.1) * 0.018;
      coreRef.current.scale.setScalar(pulse);
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.035;
      wireframeRef.current.rotation.x =
        Math.sin(t * 0.2) * 0.04;
    }
  });

  return (
    <>
      <ambientLight intensity={0.65} />

      <pointLight
        position={[2, 2, 3]}
        intensity={2.2}
        color="#a78bfa"
      />

      <pointLight
        position={[-2, -1, 2]}
        intensity={1.8}
        color="#2dd4bf"
      />

      {/* Animated glowing sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#3939a9"
          emissive="#342080"
          emissiveIntensity={0.55}
          roughness={0.3}
          metalness={0.2}
          distort={0.16}
          speed={1.3}
        />
      </mesh>

      {/* Subtle triangular wireframe */}
      <mesh ref={wireframeRef} scale={1.12}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial
          color="#aaa0df"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>
    </>
  );
}

/* =========================================
   PROJECTS
========================================= */

const projects = [
  {
    number: "01",
    category: "GENERATIVE AI WEB APP",
    title: "Poster Generator",
    description:
      "A multimodal content creation platform combining generative AI, retrieval-augmented generation, and vision-language capabilities.",
    stack: ["Python", "RAG", "Vision LLMs", "FLUX"],
    type: "ai",
    icon: <Sparkles />,
    link: "https://github.com/suyashvishnoi13/poster_generation",
    demoLink: "https://postergeneration.netlify.app/",
  },
  {
    number: "02",
    category: "C++ • GRAPH ALGORITHMS",
    title: "MetroGo — Metro Route Planner",
    description:
      "A C++ metro route planner that models stations and route connectivity using graph data structures and shortest-path algorithms to calculate efficient journeys.",
    stack: ["C++", "DSA", "Graph Algorithms", "Shortest Path"],
    type: "web",
    icon: <GitBranch />,
    link: "https://github.com/suyashvishnoi13/metro-go-project",
    demoLink: "",
  },
  {
    number: "03",
    category: "SOFTWARE ENGINEERING",
    title: "Code Clone Detection",
    description:
      "A code similarity detection system using transformer-based representations to identify potentially duplicated code.",
    stack: ["Python", "CodeBERT", "NLP", "ML"],
    type: "ai",
    icon: <Code2 />,
    link: "https://github.com/suyashvishnoi13/code-clone-detector",
    demoLink: "https://ai-code-intelligence-platform.vercel.app/",
  },
  {
    number: "04",
    category: "WEB APP / NLP",
    title: "Real-Time Speech Translator",
    description:
      "A multilingual translation application using a Python backend and transformer-based language translation.",
    stack: ["Flask", "Python", "mBART", "REST API"],
    type: "web",
    icon: <Globe />,
    link: "https://github.com/suyashvishnoi13/realtime-voice-translation",
    demoLink: "",
  },
  {
    number: "05",
    category: "COMPUTER VISION",
    title: "Image Forgery Detection",
    description:
      "An image analysis application using deep learning to identify potential digital image forgery.",
    stack: ["Python", "ResNet", "PyTorch", "Streamlit"],
    type: "ai",
    icon: <BrainCircuit />,
    link: "https://github.com/suyashvishnoi13/image_detection",
    demoLink: "",
  },
  {
    number: "06",
    category: "AI • COMPUTER VISION",
    title: "TrafficVision AI",
    description:
      "An AI-powered traffic violation detection system that identifies helmet violations and triple riding, extracts vehicle registration numbers with EasyOCR, generates digital evidence, and provides an interactive analytics dashboard.",
    stack: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "EasyOCR",
      "PyTorch",
      "Streamlit",
      "SQLite",
    ],
    type: "ai",
    icon: <BrainCircuit />,
    link: "https://github.com/suyashvishnoi13/Automated-Photo-Identification-and-Classification-for-Traffic-Violations-Using-Computer-Vision",
    demoLink: "",
  },
];

/* =========================================
   SKILLS
========================================= */

const skills = [
  {
    title: "Frontend Development",
    icon: <Monitor />,
    description:
      "Responsive interfaces, reusable components, and interactive user experiences.",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: <Server />,
    description:
      "Application logic, server-side development, and API integration.",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Databases & Developer Tools",
    icon: <Database />,
    description:
      "Data storage, version control, and modern application deployment.",
    items: [
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Git",
      "GitHub",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit />,
    description:
      "Intelligent features that extend the capabilities of software products.",
    items: [
      "Machine Learning",
      "Generative AI",
      "RAG",
      "NLP",
      "PyTorch",
      "Computer Vision",
    ],
  },
];

/* =========================================
   EXPERIENCE
========================================= */

const experiences = [
  {
    date: "JUN 2026 — JUL 2026",
    title: "Software Engineer",
    company: "Orryworx Pvt. Ltd. · Remote",
    type: "SOFTWARE",
    description:
      "Contributed to software engineering work and practical application development.",
  },
  {
    date: "FEB 2026 — MAR 2026",
    title: "Data Science Intern",
    company: "Kodbud Solutions",
    type: "AI / DATA",
    description:
      "Worked on predictive modeling, model evaluation, and improving machine learning workflows.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}

/* =========================================
   MAIN APP
========================================= */

function App() {
  const emailSubject = encodeURIComponent("Portfolio Inquiry");

  const emailBody = encodeURIComponent(
    "Hi Suyash,\n\nI visited your portfolio and would like to connect with you.\n\n"
  );

  const emailHref = `mailto:${PROFILE.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">S.</span>
          <span>
            SUYASH<span className="brand-muted"> / DEV</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="status-dot" />
              OPEN TO INTERNSHIPS & OPPORTUNITIES
            </motion.div>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              HELLO, I'M SUYASH VISHNOI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              I build for
              <br />
              the <span className="gradient-text">web.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Full-stack developer crafting modern web experiences,
              scalable backend systems, and polished digital products.
              I also bring AI/ML capabilities into applications when
              they solve a real problem.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>

              <a className="button button-secondary" href="#contact">
                Get in touch <ArrowUpRight size={17} />
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> GitHub
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>

              <a href={emailHref}>
                <Mail size={17} /> Email
              </a>
            </motion.div>
          </div>

          {/* NEW SPHERICAL ANIMATION ONLY */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Canvas
              camera={{ position: [0, 0, 5.2], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true }}
              onCreated={({ gl }) => {
                gl.setClearColor("#080810", 0);
              }}
            >
              <AnimatedOrb />
            </Canvas>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section
          className="about section-wrap section-space"
          id="about"
        >
          <SectionHeading
            eyebrow="01 / A LITTLE ABOUT ME"
            title={
              <>
                Developer first.{" "}
                <span className="gradient-text">Curious always.</span>
              </>
            }
            subtitle="I enjoy solving real problems through thoughtful engineering and clean design."
          />

          <div className="about-grid">
            <motion.div
              className="about-copy glass-card"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                I'm a Computer Science Engineering student at{" "}
                <strong>JIIT, Noida</strong>, graduating in 2027.
                My main focus is building complete web applications—from
                responsive frontends and API-driven backends to data
                storage and deployment.
              </p>

              <p>
                I also work with AI/ML, which helps me build web products
                with features like intelligent search, document analysis,
                language processing, and generative AI. I enjoy learning
                by building and improving projects through iteration.
              </p>

              <a className="text-link" href="#contact">
                Have a project in mind? <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <div className="about-highlights">
              <motion.div
                className="highlight-card"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Code2 />
                <span className="highlight-number">01</span>
                <h3>End-to-end development</h3>
                <p>From intuitive interfaces to reliable backend APIs.</p>
              </motion.div>

              <motion.div
                className="highlight-card"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Smartphone />
                <span className="highlight-number">02</span>
                <h3>Responsive by design</h3>
                <p>Experiences designed for desktop, tablet, and mobile.</p>
              </motion.div>

              <motion.div
                className="highlight-card"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <BrainCircuit />
                <span className="highlight-number">03</span>
                <h3>AI as an advantage</h3>
                <p>Practical intelligence integrated into useful products.</p>
              </motion.div>

              <motion.div
                className="highlight-card"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <GitBranch />
                <span className="highlight-number">04</span>
                <h3>Continuous improvement</h3>
                <p>Iterating on code quality, usability, and performance.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="skills section-wrap section-space"
          id="skills"
        >
          <SectionHeading
            eyebrow="02 / MY TOOLKIT"
            title={
              <>
                Tools to turn ideas{" "}
                <span className="gradient-text">into reality.</span>
              </>
            }
            subtitle="A practical mix of web engineering fundamentals, development tools, and AI capabilities."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.article
                className="skill-card glass-card"
                key={skill.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          className="projects section-wrap section-space"
          id="projects"
        >
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title={
              <>
                Things I've <span className="gradient-text">built.</span>
              </>
            }
            subtitle="Full-stack applications, backend systems, analytics dashboards, and AI-powered experiments."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: (index % 2) * 0.1 }}
              >
                <div className={`project-art art-${index + 1}`}>
                  <span className="project-art-index">
                    {project.number} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>

                  <div className="project-art-icon">
                    {project.icon}
                  </div>

                  <div className="art-grid" />
                  <div className="art-orbit" />

                  <span className="project-art-type">
                    {project.type === "web"
                      ? "WEB ENGINEERING"
                      : "AI / ENGINEERING"}
                  </span>
                </div>

                <div className="project-content">
                  <div className="project-category">
                    {project.category}
                  </div>

                  <div className="project-title-row">
                    <h3>{project.title}</h3>

                    <div className="project-links">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          aria-label={`Open ${project.title} live demo`}
                        >
                          <Globe size={18} />
                        </a>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="projects-note">
            <span className="status-dot" />
            Explore the project repositories to see implementation details.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section
          className="experience section-wrap section-space"
          id="experience"
        >
          <SectionHeading
            eyebrow="04 / EXPERIENCE"
            title={
              <>
                Learning by <span className="gradient-text">building.</span>
              </>
            }
            subtitle="Hands-on experience across web development, software engineering, and data science."
          />

          <div className="timeline">
            {experiences.map((experience) => (
              <motion.div
                className="timeline-item"
                key={`${experience.company}-${experience.title}`}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="timeline-dot" />

                <div className="timeline-date">
                  {experience.date}
                </div>

                <div className="timeline-main">
                  <div>
                    <h3>{experience.title}</h3>
                    <p className="timeline-company">
                      {experience.company}
                    </p>
                  </div>

                  <span className="timeline-type">
                    {experience.type}
                  </span>
                </div>

                <p className="timeline-description">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact section-wrap section-space"
          id="contact"
        >
          <motion.div
            className="contact-panel"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="eyebrow">05 / WHAT'S NEXT?</span>

            <div className="contact-decoration">
              <BriefcaseBusiness size={22} />
            </div>

            <h2>
              Let's build something
              <br />
              <span className="gradient-text">meaningful.</span>
            </h2>

            <p>
              Looking for a developer for your team, internship, or
              project? I'd love to connect and explore what we can
              create together.
            </p>

            <a
              className="button button-primary contact-button"
              href={emailHref}
            >
              Say hello <ArrowUpRight size={20} />
            </a>

            <div className="contact-socials">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

              <a href={emailHref}>
                <Mail size={18} /> Email
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">S.</span>
          <span>
            SUYASH<span className="brand-muted"> / DEV</span>
          </span>
        </a>

        <p>Designed with curiosity. Built with code.</p>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;